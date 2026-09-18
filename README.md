# FitFlys (fitflys.com) Web Sitesi & GitHub Pages Kurulum Rehberi

Bu proje, **fitflys.com** için hazırlanmış modern, hızlı ve mobil uyumlu bir fitness & koçluk web sitesidir. 
GitHub Pages üzerinde **tamamen ücretsiz** ve ek bir derleme (build) adımı olmadan doğrudan çalışacak şekilde tasarlanmıştır.

---

## 📁 Proje Dosya Yapısı

- `index.html` : Ana sayfa şablonu (Navbar, Hero, İstatistikler, Özellikler, Paketler, SSS, İletişim Formu, Footer)
- `style.css` : Özel tasarım stilleri, cam efekti (glassmorphism), renk geçişleri ve animasyonlar
- `script.js` : Mobil menü, SSS akordiyonu, canlı sayaçlar ve form gönderim bildirimleri
- `CNAME` : GitHub Pages'in `fitflys.com` alan adınızı otomatik tanıması için gerekli dosya

---

## 🚀 1. Kodları GitHub Reponuza Yükleme

GitHub'da açtığınız reponun içine bu klasördeki tüm dosyaları (`index.html`, `style.css`, `script.js`, `CNAME`, `README.md`) yüklemeniz gerekir. İki yöntemden birini seçebilirsiniz:

### Yöntem A: Tarayıcı Üzerinden (En Kolay)
1. GitHub'da açtığınız reponun sayfasına gidin.
2. Sayfadaki **"uploading an existing file"** linkine tıklayın.
3. Bu klasördeki (`C:\Users\MSI\.gemini\antigravity\scratch\fitflys`) tüm dosyaları tarayıcıya sürükleyip bırakın.
4. Alttaki yeşil **"Commit changes"** butonuna tıklayın.

### Yöntem B: Git Terminal Komutları ile
Eğer bilgisayarınızda Git yüklüyse bu klasör içinde PowerShell veya terminal açarak şu komutları çalıştırın:
```bash
git init
git add .
git commit -m "Initial commit for FitFlys website"
git branch -M main
git remote add origin https://github.com/<KULLANICI-ADINIZ>/<REPO-ADINIZ>.git
git push -u origin main --force
```

---

## ⚙️ 2. GitHub Pages'i Aktif Etme

1. GitHub'daki reponuzun üst menüsünden **Settings (Ayarlar)** sekmesine tıklayın.
2. Sol menüden **Pages** seçeneğine girin.
3. **Build and deployment** başlığı altında:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` (veya `master`) / `/ (root)` seçip **Save** butonuna tıklayın.
4. Sayfayı yenilediğinizde **Custom domain** kısmında `fitflys.com` yazdığını göreceksiniz (`CNAME` dosyası sayesinde otomatik gelir).
5. **Enforce HTTPS** kutusunu işaretleyin (SSL sertifikası GitHub tarafından ücretsiz sağlanır).

---

## 🌐 3. Domain (DNS) Ayarları (Squarespace / Registrar)

Alan adınızı (`fitflys.com`) satın aldığınız Squarespace Domains (veya hangi kayıt firmasından aldıysanız) paneline giriş yapın ve **DNS Settings (DNS Ayarları)** kısmına şu kayıtları ekleyin:

### 1) A Kayıtları (Apex domain: fitflys.com için)
Host / Ad: `@` (veya boş bırakın)
Aşağıdaki 4 GitHub IP adresini ayrı ayrı `A` kaydı olarak ekleyin:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### 2) CNAME Kaydı (www.fitflys.com için)
- **Host / Ad:** `www`
- **Hedef / Points to:** `<kullanici-adiniz>.github.io`

DNS kayıtlarının oturması genelde 15-30 dakika sürer. Bu işlem bittiğinde `https://fitflys.com` adresiniz doğrudan yayına girer!
