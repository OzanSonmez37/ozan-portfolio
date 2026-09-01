# Ozan Sönmez — Portfolio

Next.js ile geliştirilen kişisel portfolyo sitesi. Deneyimlerimi, projelerimi ve yeteneklerimi tek bir sayfada, koyu temalı ve minimal bir tasarımla bir araya getiriyor.

**Repo:** [github.com/OzanSonmez37/ozan-portfolio](https://github.com/OzanSonmez37/ozan-portfolio)

## Özellikler

- ⚡ **Next.js 16** (App Router) + **TypeScript**
- 🎨 **Tailwind CSS v4** ile koyu tema ve asit yeşili aksan rengi
- 🎬 **Framer Motion** ile scroll-triggered animasyonlar
- 📱 Uçtan uca responsive tasarım (mobil hamburger menü dahil)
- 📩 Backend gerektirmeyen, `mailto` tabanlı iletişim formu
- 📄 Tek tıkla CV indirme

## Bölümler

| Bölüm | İçerik |
| --- | --- |
| Hero | Giriş, kısa özet, sosyal linkler, CV indir |
| Hakkımda | Özet, eğitim, sertifikalar |
| Deneyim | Staj geçmişi (zaman çizelgesi) |
| Projeler | Öne çıkan GitHub projeleri |
| Yetenekler | Kategorilere ayrılmış teknoloji listesi |
| İletişim | Mesaj formu + sosyal linkler |

## Kullanılan Teknolojiler

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Framer Motion` · `Lucide Icons`

## Geliştirme Ortamını Çalıştırma

```bash
# bağımlılıkları kur
npm install

# geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıdan [http://localhost:3000](http://localhost:3000) adresini aç.

### Diğer komutlar

```bash
npm run build   # production build al
npm run start   # production build'i çalıştır
npm run lint    # ESLint kontrolü
```

## Proje Yapısı

```
src/
├── app/                # Root layout, global stiller, sayfa
├── components/          # Nav, Hero, About, Experience, Projects, Skills, Contact...
└── lib/
    └── data.ts          # Tüm site içeriği (profil, deneyim, projeler, yetenekler)
```

İçeriği güncellemek için çoğu durumda sadece [`src/lib/data.ts`](src/lib/data.ts) dosyasını düzenlemek yeterli.

## Deploy

Proje [Vercel](https://vercel.com) üzerinde deploy edilmeye hazırdır:

1. Repoyu Vercel'e bağla
2. Framework olarak **Next.js** otomatik algılanır
3. Deploy

## İletişim

- GitHub: [@OzanSonmez37](https://github.com/OzanSonmez37)
- LinkedIn: [Ozan Sönmez](https://www.linkedin.com/in/ozan-s%C3%B6nmez-275484358/)
