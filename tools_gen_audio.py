import json,sys,os,wave,io,time,lameenc
from piper import PiperVoice
S=os.path.dirname(os.path.abspath(__file__))
OUT="/Users/nguyenkhoi/Library/Mobile Documents/com~apple~CloudDocs/Linh tinh/tnkhoi-english/audio"
os.makedirs(OUT,exist_ok=True)
def h(s):
    a,b=0x811c9dc5,0x01000193
    x=0x811c9dc5; y=0x1234567
    for ch in s.encode('utf-16-le')[::2] if False else [ord(c) for c in s]:
        x=((x^ch)*0x01000193)&0xFFFFFFFF
        y=((y*31)+ch)&0xFFFFFFFF
    return "%08x%08x"%(x,y)
V=[PiperVoice.load(os.path.join(S,"voices",n+".onnx"),espeak_data_dir="/tmp/pe/espeak-ng-data") for n in ("en_US-lessac-high","en_US-ryan-high")]
def synth(v,text):
    buf=io.BytesIO()
    with wave.open(buf,"wb") as w: v.synthesize_wav(text,w)
    buf.seek(0)
    with wave.open(buf) as w: sr=w.getframerate(); pcm=w.readframes(w.getnframes())
    e=lameenc.Encoder(); e.set_bit_rate(40); e.set_in_sample_rate(sr); e.set_channels(1); e.set_quality(2)
    return e.encode(pcm)+e.flush()
d=json.load(open(os.path.join(S,"extract.json")))
jobs={}
def add(who,t):
    t=" ".join(t.split())
    if t: jobs[("%d|"%who)+t]=(who,t)
for dl in d['dlg']+d['lc']:
    who={};n=0
    for l in dl:
        spk,t=l[0],l[1]
        if spk not in who: who[spk]=n%2; n+=1
        add(who[spk],t)
for t in d['ex']: add(0,t)
limit=int(sys.argv[1]) if len(sys.argv)>1 else 10**9
mp=json.load(open(os.path.join(S,"manifest.json"))) if os.path.exists(os.path.join(S,"manifest.json")) else {}
t0=time.time();c=0
for k,(who,t) in jobs.items():
    key=("%d|"%who)+t; hk=h(key)
    f=os.path.join(OUT,hk+".mp3")
    if hk in mp and os.path.exists(f): continue
    open(f,"wb").write(synth(V[who],t)); mp[hk]=1; c+=1
    if c%50==0:
        json.dump(mp,open(os.path.join(S,"manifest.json"),"w")); print(c,len(jobs),round(time.time()-t0),flush=True)
    if c>=limit: break
json.dump(mp,open(os.path.join(S,"manifest.json"),"w"))
print("done",c,"of",len(jobs),round(time.time()-t0),"s")
