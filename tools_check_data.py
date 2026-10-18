#!/usr/bin/env python3
"""Kiểm tra dữ liệu của ứng dụng trước khi phát hành. Chạy: python3 tools_check_data.py

Không cần Node.js. Đọc trực tiếp các tệp dữ liệu (không chạy mã JavaScript) và kiểm tra:
- VERSION trong sw.js trùng với ?v= trong index.html; mọi tệp script trong index.html đều có mặt;
- GRAMMAR: id không trùng; GRAMMAR_BANK: đúng định dạng từng dòng, chỉ số đáp án hợp lệ,
  giải thích sai khớp với lựa chọn, không có điểm ngữ pháp mồ côi;
- AUDIO_MAP: mọi đường dẫn có tệp tương ứng trong dự án; mp3 gốc không được tham chiếu (cảnh báo);
- I18N_EN: không có khóa trùng hoặc giá trị rỗng.

Thoát với mã 1 nếu có lỗi. Cảnh báo (WARN) không làm dừng việc kiểm tra.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
errors, warns = [], []


def read(name):
    return (ROOT / name).read_text(encoding="utf8")


def err(msg):
    errors.append(msg)


def warn(msg):
    warns.append(msg)


def object_text(text, start_pat):
    """Trả về phần {...} ngay sau start_pat, đếm dấu ngoặc và bỏ qua chuỗi."""
    m = re.search(start_pat, text)
    if not m:
        return None
    i = text.index("{", m.end() - 1)
    depth, j, quote = 0, i, None
    while j < len(text):
        c = text[j]
        if quote:
            if c == "\\":
                j += 2
                continue
            if c == quote:
                quote = None
        elif c in "\"'`":
            quote = c
        elif c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return text[i:j + 1]
        j += 1
    return None


def array_text(text, start_pat):
    """Trả về nội dung mảng từ sau start_pat đến dòng '];' đầu tiên."""
    m = re.search(start_pat, text)
    if not m:
        return ""
    end = text.find("\n];", m.end())
    return text[m.end():end if end != -1 else len(text)]


# 1. Phiên bản và danh sách script
sw_match = re.search(r'const VERSION = "([^"]+)"', read("sw.js"))
sw_version = sw_match.group(1) if sw_match else None
html = read("index.html")
page_versions = sorted(set(re.findall(r"\?v=([0-9.]+)", html)))
if not sw_version:
    err("Không tìm thấy VERSION trong sw.js")
if page_versions != [sw_version]:
    err(f"Phiên bản không khớp: sw.js={sw_version}, index.html={', '.join(page_versions)}")
for s in re.findall(r'<script src="([^"?]+)', html):
    if not (ROOT / s).exists():
        err(f"index.html nạp tệp không tồn tại: {s}")

# 2. GRAMMAR và GRAMMAR_BANK
study = read("content-study.js")
ext_files = ["content-grammar2.js", "content-grammar3.js", "content-grammar4.js"]

grammar_src = array_text(study, r"const GRAMMAR = \[") + array_text(study, r"const GRAMMAR_NEW = \[")
for f in ext_files:
    grammar_src += array_text(read(f), r"const NEW = \[")
grammar_ids = re.findall(r'\{\s*(?:id|"id"):\s*"([^"]+)"', grammar_src)
dups = sorted({i for i in grammar_ids if grammar_ids.count(i) > 1})
if dups:
    err(f"Trùng id điểm ngữ pháp: {', '.join(dups)}")
grammar_ids = list(dict.fromkeys(grammar_ids))

bank = {}
bank_block = object_text(study, r"const GRAMMAR_BANK\s*=\s*\{")
if bank_block is None:
    err("Không tìm thấy GRAMMAR_BANK trong content-study.js")
else:
    for k, body in re.findall(r"^\s*([A-Za-z0-9_\-]+):\s*`([^`]*)`", bank_block, re.M):
        bank[k] = body

# BANK trong grammar2/3/4: object JSON trên một dòng
for f in ext_files:
    m = re.search(r"const BANK = (\{.*?\});", read(f), re.S)
    if not m:
        warn(f"{f}: không tìm thấy BANK")
        continue
    try:
        part = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        err(f"{f}: BANK không phải JSON hợp lệ ({e})")
        continue
    for k, v in part.items():
        if k in bank:
            err(f"Khóa GRAMMAR_BANK trùng giữa các tệp: {k}")
        bank[k] = v

for gid in grammar_ids:
    if gid not in bank:
        warn(f'Điểm ngữ pháp "{gid}" chưa có bài tập trong GRAMMAR_BANK')
for key in bank:
    if key not in grammar_ids:
        warn(f'GRAMMAR_BANK có khóa "{key}" không thuộc GRAMMAR')

items = 0
for key, txt in bank.items():
    lines = [l.strip() for l in txt.split("\n") if l.strip()]
    for n, line in enumerate(lines, 1):
        items += 1
        where = f"GRAMMAR_BANK.{key} dòng {n}"
        p = line.split("|")
        t = p[0]
        if t in ("c", "x"):
            q = p[1] if len(p) > 1 else ""
            opts = [o.strip() for o in (p[2] if len(p) > 2 else "").split(" / ")]
            try:
                a = int(p[3])
            except (IndexError, ValueError):
                a = None
            if not q:
                err(f"{where}: thiếu câu hỏi")
            if len(opts) < 2:
                err(f"{where}: cần ít nhất 2 lựa chọn")
            if len(set(opts)) != len(opts):
                err(f"{where}: có lựa chọn trùng nhau")
            if a is None or not (0 <= a < len(opts)):
                err(f'{where}: chỉ số đáp án "{p[3] if len(p) > 3 else ""}" nằm ngoài khoảng')
            if len(p) < 5 or not p[4]:
                warn(f"{where}: thiếu giải thích")
            wrong = p[5] if len(p) > 5 else ""
            for seg in filter(None, wrong.split(";;")):
                k = seg.split("=>")[0].strip()
                if k not in opts:
                    err(f'{where}: giải thích sai cho "{k}" không khớp lựa chọn nào')
                elif a is not None and 0 <= a < len(opts) and opts[a] == k:
                    err(f"{where}: giải thích sai đang gắn cho đáp án đúng")
        elif t == "t":
            if len(p) < 2 or not p[1]:
                err(f"{where}: thiếu câu hỏi")
            ans = [s.strip() for s in (p[2] if len(p) > 2 else "").split(";") if s.strip()]
            if not ans:
                err(f"{where}: thiếu đáp án")
            if len(p) < 4 or not p[3]:
                warn(f"{where}: thiếu giải thích")
        elif t == "f":
            s = p[1] if len(p) > 1 else ""
            wrong_word = p[2] if len(p) > 2 else ""
            fix = p[3] if len(p) > 3 else ""
            if not (s and wrong_word and fix):
                err(f"{where}: thiếu câu, từ sai hoặc cách sửa")
            elif wrong_word not in s:
                err(f'{where}: từ sai "{wrong_word}" không có trong câu')
            elif wrong_word == fix:
                err(f"{where}: từ sửa trùng từ sai")
        elif t == "o":
            if len(p) < 2 or not p[1]:
                err(f"{where}: thiếu câu")
        else:
            err(f'{where}: loại dòng "{t}" không hợp lệ (chỉ c, x, t, f, o)')

print(f"GRAMMAR: {len(grammar_ids)} điểm; GRAMMAR_BANK: {len(bank)} điểm, {items} dòng bài tập")

# 3. AUDIO_MAP
# Đường dẫn trong bản triển khai: phan-N/audio-ten/... hoặc audio-ten-N/...
# Bản làm việc: _upload/phan-N/... (bản sao để tải lên) và audio-ten/... (gốc, chia theo thư mục con).
def local_candidates(rel):
    tail = rel.split("/", 1)[1] if "/" in rel else rel
    yield ROOT / rel
    yield ROOT / "_upload" / rel
    if re.match(r"audio-ten-\d+/", rel):
        yield ROOT / "audio-ten" / tail
    if re.match(r"phan-\d+/audio-ten/", rel):
        yield ROOT / "audio-ten" / tail.split("/", 1)[1]


audio_match = re.search(r"const AUDIO_MAP = (\{.*\});", read("audio-map.js"), re.S)
if not audio_match:
    err("Không đọc được AUDIO_MAP trong audio-map.js")
else:
    audio = json.loads(audio_match.group(1))
    mapped = set(audio.values())
    unresolved = [rel for rel in sorted(mapped) if not any(c.exists() for c in local_candidates(rel))]
    for rel in unresolved:
        err(f"AUDIO_MAP trỏ tới tệp không tìm thấy trong dự án: {rel}")
    mapped_tails = {re.sub(r"^(phan-\d+|audio-ten-\d+)/(audio-ten/)?", "", rel) for rel in mapped}
    root_mp3 = sorted(str(p.relative_to(ROOT / "audio-ten")) for p in (ROOT / "audio-ten").rglob("*.mp3"))
    orphan = [f for f in root_mp3 if f not in mapped_tails]
    print(f"AUDIO_MAP: {len(audio)} mục, không tìm thấy: {len(unresolved)}; "
          f"mp3 gốc trong audio-ten: {len(root_mp3)}, không được tham chiếu: {len(orphan)}")
    if orphan:
        warn(f"{len(orphan)} tệp mp3 trong audio-ten không có trong AUDIO_MAP (ví dụ: {', '.join(orphan[:3])})")

# 4. I18N_EN: mỗi dòng là một cặp "vi": "en" (dấu phẩy cuối dòng có thể thiếu)
i18n_block = object_text(study, r"const I18N_EN\s*=\s*\{")
if i18n_block is None:
    err("Không tìm thấy I18N_EN trong content-study.js")
else:
    i18n, bad_lines = {}, []
    for n, line in enumerate(i18n_block.split("\n")[1:], 2):
        line = line.strip().rstrip(",")
        if not line or line in ("{", "}", "};"):
            continue
        try:
            for k, v in json.loads("{" + line + "}").items():
                if k in i18n:
                    err(f"I18N_EN trùng khóa: {k[:60]}")
                i18n[k] = v
        except json.JSONDecodeError:
            bad_lines.append(n)
    if bad_lines:
        err(f"I18N_EN có dòng không đọc được (dòng {', '.join(map(str, bad_lines[:5]))})")
    empty = [k for k, v in i18n.items() if not isinstance(v, str) or not v.strip()]
    if empty:
        err(f"I18N_EN có {len(empty)} khóa rỗng hoặc không phải chuỗi (ví dụ: {' | '.join(empty[:3])})")
    print(f"I18N_EN: {len(i18n)} khóa")

# Kết quả
for w in warns:
    print("WARN ", w)
for e in errors:
    print("ERROR", e)
print(f"\nKết quả: {len(errors)} lỗi, {len(warns)} cảnh báo")
sys.exit(1 if errors else 0)
