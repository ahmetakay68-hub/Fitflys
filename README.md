# FitFlys

Türkçe soğuk sıkım içecek tanıtım sitesi. Tam ekran, yatay sahne geçişleri; doğal ışık ve taş yüzeyler üzerine kurulu ürün fotoğrafları.

## Yapı

- `index.html`: başlangıç, üç tarif, soğuk sıkım yöntemi ve marka hikâyesi.
- `style.css`: masaüstü ve mobil düzenler, sahne geçişleri.
- `script.js`: kaydırma, klavye, dokunma ve bölüm bağlantıları.
- `assets/editorial-*.webp`: yeni fotoğraflar ve optimize edilmiş kurucu portresi.
- `DESIGN.md`: görsel üretim kayıtları ve tasarım notları.
- `home.html`: ana sayfaya yönlendirme.
- `coming-soon.html`: önceki çok yakında sayfası.
- `CNAME`: mevcut özel alan adı.

Derleme ve uygulama bağımlılığı yoktur. Klasör herhangi bir statik HTTP sunucusuyla açılabilir. Mevcut GitHub Pages yayın yapısı korunur.

## Gezinme

Fare tekerleği, yukarı/aşağı veya sağ/sol oklar, Page Up/Down, Home/End, dokunmatik kaydırma ve alttaki bölüm düğmeleri. Aşağı kaydırma yeni sahneyi sağdan getirir; ana belge dikey kaymaz. Küçük ekranlarda taşan metin alanları kendi içinde kaydırılabilir.

URL bölümleri ve tarayıcı geri/ileri geçmişi desteklenir. Önceki sayfanın ürün bağlantıları yeni bölümlere eşlenir. JavaScript kapalıyken site fotoğraflarıyla birlikte normal dikey sayfa olarak çalışır. Azaltılmış hareket tercihi geçiş animasyonlarını kapatır.
