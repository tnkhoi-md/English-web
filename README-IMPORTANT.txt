TNKHOI ENGLISH v3.3 — ROOT BUILD

Quan trọng:
Repository hiện tại của tnkhoi-md/English-web đang có các file:
index.html, styles.css, app-core.js, app-views.js, app-views2.js,
content-general.js, content-medical.js, content-extra.js ở THƯ MỤC GỐC.

Do đó index.html phải gọi:
content-general.js
content-medical.js
content-extra.js
app-core.js
app-views.js
app-views2.js

KHÔNG dùng js/ ở bản root build.

Bản này sửa lỗi resume khi reload và giữ cache-bust v3.3.
