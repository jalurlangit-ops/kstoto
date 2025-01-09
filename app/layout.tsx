'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.jiggyhiphop.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.jiggyhiphop.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025",
            "reviewBody": "Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025</title>
        <meta name="description" content="Kstoto menghadirkan pengalaman bermain slot yang menyenangkan dengan pilihan deposit pulsa mulai dari hanya 5000 tanpa potongan. Fitur ini memberikan kemudahan bagi para pemain untuk menikmati permainan slot tanpa harus khawatir dengan biaya tambahan atau proses transaksi yang rumit. Dengan deposit pulsa yang terjangkau" />
        <meta name="keywords" content="Kstoto, Slot Deposit Pulsa 5000, Slot Gacor Terbaru 2025, Situs Slot Online, Situs Resmi Slot Online, Deposit Via Dana 5K, Daftar Slot Online, Slot Pulsa, Slot Gacor Gampang Menang, Slot Gacor 4D, Slot Pulsa Tanpa Potongan" />
        <meta name="google-site-verification" content="by3zYpiETgt5Dg5ASpsHoZ4lGQRWHmXxWiQCaxGP7tQ" />
        <meta name="application-name" content="kstoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="kstoto" />
        <meta name="publisher" content="kstoto" />
        <meta name="copyright" content="kstoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025" />
        <meta property="og:description" content="Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="kstoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="kstoto" />
        <meta name="twitter:title" content="Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025" />
        <meta name="twitter:description" content="Kstoto : Slot Deposit Pulsa 5000 Tanpa Potongan Dan Slot Gacor Terbaru 2025, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
