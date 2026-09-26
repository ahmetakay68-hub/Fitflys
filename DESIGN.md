# FitFlys — tasarım ve görsel kayıtları

## Son düzenleme: zümrüt paleti ve 500 ml

Kullanıcının ekran görüntülerine göre açılış fotoğrafı %48 yerine %40 noktasından başlatıldı. Yeşil alanlar hafif zümrüt geçişleriyle yenilendi; 4K ekran metin boyutları artırıldı. Hacim tüm güncel içerikte 500 ml olarak düzeltildi. Fotoğraf üzerindeki sıra numaraları ve çizgili hacim alanları kaldırıldı; bilgi ürün metnine taşındı. Yatay ürün fotoğrafları masaüstünde de kullanılıyor; şişeler kapak ve tabanlarıyla görünür.

Ahmet Akay portresi yerleşik ImageGen ile yüzü ve kıyafeti referans alınarak yeniden hazırlandı. Araç, 4K istemlerine rağmen ilk denemede 1086×1448, ikinci denemede 941×1672 çıktı verdi. Seçilen ikinci çıktı Lanczos ile 2160×3840 WebP olarak dışa aktarıldı; bu doğal 4K üretim değildir. Proje dosyası: `assets/editorial-founder-4k.webp`. Eski portre dosyaları korunmuştur.

Portre istemi:

Create a 4K vertical founder portrait at exactly 2160 x 3840 pixels. The final generated image must have 2160 pixels width and 3840 pixels height. Use the supplied image as the identity reference for Ahmet Akay, preserve his recognizable face, bald head, eyeglasses, warm smile, age, dark green overshirt and light t-shirt, and relaxed joined hands. Photorealistic portrait, naturally detailed skin and crisp eyeglasses and shirt weave, soft window daylight, warm ivory plaster with softly defocused plant behind him. Show him from complete head to upper thigh, leave 15% empty space above his head, keep his head centered horizontally. No text or graphics. Preserve identity accurately. Output a 4K image 2160x3840, do not output a small preview or a 1K image.

## Yön

26 Eylül 2026: mevcut statik altyapı üzerinde tasarım yeniden kuruldu. Koyu orman yeşili, sıcak krem, büyük serif başlıklar ve doğal ışıkta ürün fotoğrafları. Altı tam ekran sahne, aşağı kaydırıldığında sağdan gelen sayfa geçişleri. Mobilde fotoğraf üstte, metin altta.

Ana mesaj: iyi beslenmenin taze hali; meyve, sebze, gerçek malzemeler ve ısı uygulanmadan sıkım. Sayısal besin değerleri, vitamin yüzdeleri, ilave şeker veya katkı iddiaları doğrulanmış veri olmadan eklenmedi. Tarifler mevcut projenin içeriklerine dayanır; içerik listeleri beslenme etiketi yerine tanıtım amaçlıdır.

## Görseller

Yerleşik ImageGen ile dört ana fotoğraf ve üç yatay mobil kadraj üretildi. Referans: `assets/orange-cutout.png` (şişe biçimi). Yeni fotoğraflar sunum görselleridir. Mevcut Ahmet Akay portresi yeniden üretilmedi; yalnızca WebP olarak optimize edildi. Orijinal görseller korunmuştur.

Son dosyalar: `assets/editorial-collection.webp`, `assets/editorial-orange.webp`, `assets/editorial-red.webp`, `assets/editorial-green.webp`, `assets/editorial-founder.webp`.

## Doğrulama

Edge/Chromium: 1440×900, 1920×1080, 1366×768, 1024×768, 820×1180, 760×900, 390×844, 375×667, 320×568, 844×390 ekranlarında altı bölüm kontrol edildi. Mobil kadrajlar 390, 375 ve 320 piksel genişlikte tekrar kontrol edildi. Yatay taşma ve ulaşılamayan üst metin tespit edilmedi; kısa ekranlarda metin kendi içinde kaydırılabilir.

Fare tekerleği, klavye okları, sahne bağlantıları, dokunma olayları, tarayıcı geri geçmişi, eski ürün URL eşlemeleri, JavaScript kapalı dikey sürüm ve azaltılmış hareket modu doğrulandı. Uzun trackpad olay dizisi birden fazla sahne atlamıyor. Başlangıçta masaüstünde yaklaşık 460 KB fotoğraf aktarılıyor (koleksiyon ve önceden yüklenen ilk ürün). Çalışma zamanı veya yerel kaynak yükleme hatası görülmedi. JavaScript sözdizimi ve diff boşluk kontrolü geçti.

Dokunma kontrolü tarayıcı emülasyonuyla yapıldı; fiziksel iOS/Safari cihazı kullanılmadı.

## Üretim istemleri

Mobil kadrajlar: `assets/editorial-orange-wide.webp`, `assets/editorial-red-wide.webp`, `assets/editorial-green-wide.webp`. Aynı fotoğraflar referans alınarak yatay kadrajda yeniden üretildi; şişe kapağı ve tabanı görünür tutuldu.

### orange — mobil kadraj

Use case: product-mockup. Edit this reference photograph to a landscape 3:2 wide composition for a mobile website product panel. Keep the same orange juice, identical bottle silhouette and black cap, same ingredients, natural side daylight, warm travertine tabletop, and same plaster wall color. Reframe by widening the scene. One complete upright bottle centered, its full cap and base clearly visible with 12% breathing room above and below, bottle occupies about 72% of image height. Ingredients beside bottle to left and right, natural sparse arrangement. Photorealistic editorial food photography matching the reference exactly. No text, graphics, labels, liquid splash or floating objects. Not a collage. Output landscape 1536x1024.

### red — mobil kadraj

Use case: product-mockup. Edit this reference photograph to a landscape 3:2 wide composition for a mobile website product panel. Keep the same red juice, identical bottle silhouette and black cap, same ingredients, natural side daylight, warm travertine tabletop, and same plaster wall color. Reframe by widening the scene. One complete upright bottle centered, its full cap and base clearly visible with 12% breathing room above and below, bottle occupies about 72% of image height. Ingredients beside bottle to left and right, natural sparse arrangement. Photorealistic editorial food photography matching the reference exactly. No text, graphics, labels, liquid splash or floating objects. Not a collage. Output landscape 1536x1024.

### green — mobil kadraj

Use case: product-mockup. Edit this reference photograph to a landscape 3:2 wide composition for a mobile website product panel. Keep the same green juice, identical bottle silhouette and black cap, same ingredients, natural side daylight, warm travertine tabletop, and same plaster wall color. Reframe by widening the scene. One complete upright bottle centered, its full cap and base clearly visible with 12% breathing room above and below, bottle occupies about 72% of image height. Ingredients beside bottle to left and right, natural sparse arrangement. Photorealistic editorial food photography matching the reference exactly. No text, graphics, labels, liquid splash or floating objects. Not a collage. Output landscape 1536x1024.


### collection

Photorealistic editorial food photography for FitFlys cold pressed juice website, landscape 3:2 composition. Three honest unlabeled 350ml clear rounded square PET juice bottles with black screw caps, filled with opaque orange carrot citrus juice, dark burgundy beet juice and natural green vegetable juice. Bottles standing together, slightly staggered, on a warm pale limestone worktop. Real orange cut half, carrot, beetroot, green apple and a few spinach leaves casually placed beside them, restrained arrangement, no piles. Beautiful directional morning daylight from the left, tactile stone, subtle real condensation, natural juice sediment, soft shadows. Background muted olive plaster wall, sophisticated independent food brand campaign photographed with medium format camera, not a glossy 3D render. Bottle shapes based on the supplied reference. Three bottles take center and right with generous space above, every bottle fully visible. No splashes, floating fruit, decorative typography, text, logos, labels or graphics. Scene must feel like real carefully prepared fresh juice.

### orange

Photorealistic premium editorial product photograph, portrait 2:3. One unlabeled clear 350ml rounded square PET bottle with black closed screw cap, same bottle silhouette as reference, filled with opaque rich orange carrot-citrus juice. Bottle upright on pale warm travertine stone, with one cut orange, two natural carrots, a piece of ginger and green apple beside it. Sparse carefully styled real kitchen still life, softly sunlit warm ochre plaster background, daylight side lighting, tactile textures and gentle shadows. Full bottle and cap visible, bottle centered, generous breathing room above and around, bottle takes 60% of height. Fine subtle condensation, natural juice texture. Medium format film food photography, sophisticated authentic healthy food brand. No liquid splash, floating ingredients, text, label, graphic, artificial glow, illustration or 3D render.

### red

Photorealistic premium editorial product photograph, portrait 2:3. One unlabeled clear 350ml rounded square PET bottle with black closed screw cap, same bottle silhouette as reference, filled with opaque deep burgundy beetroot juice. Bottle upright on pale warm travertine stone, with a halved raw beetroot showing rings, one green apple, a small carrot and a few basil leaves beside it. Sparse carefully styled real kitchen still life, muted dusty rose plaster background, daylight side lighting, tactile textures and gentle shadows. Full bottle and cap visible, bottle centered, generous breathing room above and around, bottle takes 60% of height. Fine subtle condensation, natural juice texture. Medium format film food photography, sophisticated authentic healthy food brand. No liquid splash, floating ingredients, text, label, graphic, artificial glow, illustration or 3D render.

### green

Photorealistic premium editorial product photograph, portrait 2:3. One unlabeled clear 350ml rounded square PET bottle with black closed screw cap, same bottle silhouette as reference, filled with opaque natural green vegetable juice. Bottle upright on pale warm travertine stone, with a few fresh spinach leaves, a cut green apple, one cucumber and a celery stalk beside it. Sparse carefully styled real kitchen still life, muted sage olive plaster background, daylight side lighting, tactile textures and gentle shadows. Full bottle and cap visible, bottle centered, generous breathing room above and around, bottle takes 60% of height. Fine subtle condensation, natural juice texture. Medium format film food photography, sophisticated authentic healthy food brand. No liquid splash, floating ingredients, text, label, graphic, artificial glow, illustration or 3D render.


## Named packaging and botanical ingredients — September 27

The opening follows the supplied mockup: 38/62 split, three-line serif headline, emerald gradient, cream capsule CTA, 500 ml facts and a recipe selector. Every ingredient is shown in a named tile with the existing botanical SVG illustration (6/8/9 ingredients). All product photographs used by the site, including the method collection photo, now use cream paper labels with actual recipe names. Earlier unlabeled assets remain as unused source history.

Generation used the built-in ImageGen tool, with the existing photo as edit target and the user mockup as packaging reference. Output images were inspected for full bottle framing and Turkish product names, then encoded as quality 93 WebP without resizing.

### assets/labeled-collection.webp
Source: C:\Users\MSI\.codex\generated_images\01a0df59-0bf6-78f3-a745-ada5a154d226\exec-b3720566-3937-4345-9acb-4d0a9e3cbc45.png
Prompt:
> Use case: precise-object-edit. Image 1 is the edit target product photograph; Image 2 is ONLY a packaging style reference, NOT a website to reproduce. Return only the realistic landscape product photograph, no UI. Preserve Image 1 composition, full bottle including cap and bottom, ingredient props, lighting, wall, stone counter and landscape 3:2 framing. Replace bottle packaging with the clear rounded square 500 ml PET bottle and black ribbed cap from Image 2. Add tall ivory textured paper rounded-corner stickers exactly in the elegant style of Image 2: large black serif 'fitflys.' at top, actual Turkish recipe name, small rule, three ingredient lines, delicate botanical line engraving, bottom 'SOĞUK SIKIM' and '500 ml'. All THREE bottles: orange front bottle name 'Gün Işığı' ingredients 'portakal / havuç / zencefil'; red middle bottle name 'Kızıl Pancar' ingredients 'pancar / elma / havuç'; green right bottle name 'Yeşil Filiz' ingredients 'elma / ıspanak / salatalık'. Names must be spelled exactly with Turkish accents. Never use color words TURUNCU, KIRMIZI, YEŞİL as product names. Physically realistic matte cream labels adhered to bottle curvature, readable typography, subtle condensation on bottle, premium editorial photography. Keep sufficient space above cap and below base; no cut off bottle.

### assets/labeled-orange-wide.webp
Source: C:\Users\MSI\.codex\generated_images\01a0df59-0bf6-78f3-a745-ada5a154d226\exec-2948d5c4-1a3e-4196-a399-fcacb60fc55a.png
Prompt:
> Use case: precise-object-edit. Image 1 is the edit target product photograph; Image 2 is ONLY a packaging style reference, NOT a website to reproduce. Return only the realistic landscape product photograph, no UI. Preserve Image 1 composition, full bottle including cap and bottom, ingredient props, lighting, wall, stone counter and landscape 3:2 framing. Replace bottle packaging with the clear rounded square 500 ml PET bottle and black ribbed cap from Image 2. Add tall ivory textured paper rounded-corner stickers exactly in the elegant style of Image 2: large black serif 'fitflys.' at top, actual Turkish recipe name, small rule, three ingredient lines, delicate botanical line engraving, bottom 'SOĞUK SIKIM' and '500 ml'. Single orange bottle name 'Gün Işığı', ingredient lines 'portakal / havuç / zencefil', botanical orange/carrot/ginger engraving. Names must be spelled exactly with Turkish accents. Never use color words TURUNCU, KIRMIZI, YEŞİL as product names. Physically realistic matte cream labels adhered to bottle curvature, readable typography, subtle condensation on bottle, premium editorial photography. Keep sufficient space above cap and below base; no cut off bottle.

### assets/labeled-red-wide.webp
Source: C:\Users\MSI\.codex\generated_images\01a0df59-0bf6-78f3-a745-ada5a154d226\exec-4829b182-01ea-411c-8f52-337d0e39e10d.png
Prompt:
> Use case: precise-object-edit. Image 1 is the edit target product photograph; Image 2 is ONLY a packaging style reference, NOT a website to reproduce. Return only the realistic landscape product photograph, no UI. Preserve Image 1 composition, full bottle including cap and bottom, ingredient props, lighting, wall, stone counter and landscape 3:2 framing. Replace bottle packaging with the clear rounded square 500 ml PET bottle and black ribbed cap from Image 2. Add tall ivory textured paper rounded-corner stickers exactly in the elegant style of Image 2: large black serif 'fitflys.' at top, actual Turkish recipe name, small rule, three ingredient lines, delicate botanical line engraving, bottom 'SOĞUK SIKIM' and '500 ml'. Single red bottle name 'Kızıl Pancar', ingredient lines 'pancar / elma / havuç', botanical beet/apple engraving. Names must be spelled exactly with Turkish accents. Never use color words TURUNCU, KIRMIZI, YEŞİL as product names. Physically realistic matte cream labels adhered to bottle curvature, readable typography, subtle condensation on bottle, premium editorial photography. Keep sufficient space above cap and below base; no cut off bottle.

### assets/labeled-green-wide.webp
Source: C:\Users\MSI\.codex\generated_images\01a0df59-0bf6-78f3-a745-ada5a154d226\exec-49246fd2-e24f-49f7-b5cb-0efcf28ebb88.png
Prompt:
> Use case: precise-object-edit. Image 1 is the edit target product photograph; Image 2 is ONLY a packaging style reference, NOT a website to reproduce. Return only the realistic landscape product photograph, no UI. Preserve Image 1 composition, full bottle including cap and bottom, ingredient props, lighting, wall, stone counter and landscape 3:2 framing. Replace bottle packaging with the clear rounded square 500 ml PET bottle and black ribbed cap from Image 2. Add tall ivory textured paper rounded-corner stickers exactly in the elegant style of Image 2: large black serif 'fitflys.' at top, actual Turkish recipe name, small rule, three ingredient lines, delicate botanical line engraving, bottom 'SOĞUK SIKIM' and '500 ml'. Single green bottle name 'Yeşil Filiz', ingredient lines 'elma / ıspanak / salatalık', botanical apple/leaves/cucumber engraving. Names must be spelled exactly with Turkish accents. Never use color words TURUNCU, KIRMIZI, YEŞİL as product names. Physically realistic matte cream labels adhered to bottle curvature, readable typography, subtle condensation on bottle, premium editorial photography. Keep sufficient space above cap and below base; no cut off bottle.


Verification: Edge browser checks at 1440×900, 3840×1986 and 390×844 confirm no horizontal overflow and no copy overflow for the opening and all three products. Recipe dock links open their respective scenes; all 23 ingredient instances resolve to matching SVG symbols; all product images load labeled assets. Wheel scene navigation passes and browser reports no JavaScript errors.
