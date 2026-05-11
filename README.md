# Cevaplai — Landing Page

Cevaplai için tanıtım sayfası. **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, statik üretim (SSG), tek sayfa (one-pager).

> Cevaplai: mail, WhatsApp ve Telegram için yapay zeka iletişim asistanı.
> E-postaları Telegram'dan onaylı taslakla cevaplar, WhatsApp/Telegram DM'lerini önceden verilmiş bilgilerle otomatik yanıtlar.

## Komutlar

```bash
npm install        # bağımlılıkları kur
npm run dev        # http://localhost:3000
npm run build      # production build (.next/)
npm start          # production preview
npm run lint       # eslint
```

## Klasör yapısı

```
cevaplai/
├── app/
│   ├── layout.tsx        # root layout (Inter font, Header, Footer)
│   ├── page.tsx          # ana sayfa (7 bölümü sırayla render eder)
│   ├── thanks/page.tsx   # Netlify Forms submit sonrası
│   ├── globals.css       # Tailwind v4 + marka paleti
│   ├── icon.png          # favicon (Next.js otomatik)
│   ├── apple-icon.png    # iOS home screen ikonu
│   ├── sitemap.ts        # /sitemap.xml çıktısı
│   └── robots.ts         # /robots.txt çıktısı
├── components/
│   ├── Header.tsx        # sticky header (logo + Beta CTA)
│   ├── Hero.tsx
│   ├── HowItWorks.tsx    # 4 adım
│   ├── Features.tsx      # 8 madde
│   ├── Channels.tsx      # 3 kanal karşılaştırması
│   ├── UseCases.tsx      # 3 senaryo
│   ├── FAQ.tsx           # 8 soru (native <details>)
│   ├── BetaForm.tsx      # Netlify Forms beta kayıt
│   └── Footer.tsx
├── lib/
│   └── seo.ts            # paylaşılabilir metadata
├── public/
│   ├── cevaplai.png      # logo (512×512)
│   ├── og_cevaplai.png   # OG image (1200×630)
│   ├── mockup-whatsapp.svg
│   └── mockup-telegram.svg
└── next.config.ts
```

## Netlify'a deploy

### 1. Site oluştur

Netlify dashboard → **Add new site → Import an existing project**. Git provider (GitHub/GitLab) bağla, repo'yu seç. Build ayarları otomatik algılanır:

| Ayar | Değer |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node version | 20 (veya 22) |

> Netlify'ın `@netlify/plugin-nextjs` eklentisi, App Router'lı projeyi otomatik tanır ve doğru output yapısını kurar. Ek `netlify.toml` gerekmiyor (gerekirse köke ekleyebilirsiniz).

### 2. Form gönderim akışı

Beta kayıt formu **Netlify Forms** ile entegre. Form `data-netlify="true"` attribute'u ile statik HTML'de tanımlı; Netlify deploy sırasında otomatik algılar.

- Form adı: **`beta-signup`**
- Alanlar: `email`, `provider`, `channels` (çoklu seçim), `message`
- Honeypot: `bot-field` (spam koruması)
- Submit sonrası `/thanks` sayfasına yönlendirir

Kayıtları görmek için: **Netlify dashboard → Forms → beta-signup**. E-posta bildirimi açmak için: **Forms → Settings → Form notifications**.

### 3. Domain

Production domain'i Netlify'da `cevaplai.com` olarak ayarladıktan sonra `lib/seo.ts` içindeki `SITE_URL` zaten doğru. SSL otomatik gelir.

### 4. Logo ve görseller

- `public/cevaplai.png` — 512×512 logo (favicon + Apple touch icon olarak kullanılıyor)
- `public/og_cevaplai.png` — 1200×630 sosyal medya kartı
- `public/mockup-*.svg` — Hero'daki Telegram/WhatsApp önizleme görselleri (placeholder, istediğiniz zaman değiştirilebilir)

## Önemli detaylar

- **Tek dil:** Türkçe (`<html lang="tr">`)
- **Karanlık mod yok**, sadece beyaz tema
- **Statik üretim:** Tüm sayfalar (`/`, `/thanks`) prerender edilir, sunucu çalışmaz
- **Erişilebilirlik:** Semantic HTML, alt metinler, klavye navigasyonu, WCAG AA kontrast
- **Performans:** Inter font swap, görseller `next/image` ile optimize, no client JS (formlar dahil)

## SEO

- Title + description + OG + Twitter card → [`lib/seo.ts`](lib/seo.ts)
- Sitemap → otomatik `/sitemap.xml`
- Robots → otomatik `/robots.txt` (`/thanks` indexlenmez)
- `<html lang="tr">` ve `og:locale=tr_TR`

## KVKK / Yasal

Footer'daki **KVKK Aydınlatma Metni**, **Gizlilik Politikası** ve **Kullanım Koşulları** linkleri şu an `#` placeholder. Hazırlandığında `components/Footer.tsx` içinde `legalLinks` dizisinin `href` değerlerini güncelle.
