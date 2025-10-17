import "./globals.css";

// seo codes
export const metadata = {
  title: "Best computer training center in Rohingya Camp | Visionary Youth Labs Academy",
  description:
    "Visionary Youth Labs Academy is a complete practical and equiped computer training center/lab in the Rohingya refugee camps where we provide hands on practical trainings and build young generations with digital tech skills to contribute in global landscape of the digital tech opportunities and beyond. VYLA is implemented by Visionary Youth Labs, a Web Development and Digital Marketing service provider based in Rohingya refugee camp.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      }
    ],
  },
  metadataBase: new URL("https://academy.visionaryyouthlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Best computer training center in Rohingya Camp | Visionary Youth Labs Academy",
    description:
      "Visionary Youth Labs Academy is a complete practical and equiped computer training center/lab in the Rohingya refugee camps where we provide hands on practical trainings and build young generations with digital tech skills to contribute in global landscape of the digital tech opportunities and beyond.",
    url: "https://academy.visionaryyouthlabs.com/",
    siteName: "Visionary Youth Labs Academy",
    images: [
      {
        url: "/VisionaryYouthLabsAcademy.png",
        width: 1200,
        height: 630,
        alt: "Visionary Youth Labs Academy lab logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best computer training center in Rohingya Camp | Visionary Youth Labs Academy",
    description:
      "Visionary Youth Labs Academy is a complete practical and equiped computer training center/lab in the Rohingya refugee camps providing hands on practical trainings.",
    images: ["/VisionaryYouthLabsAcademy.png"],
    // optional: to handle twitter later
    // site: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional manual fallback meta tags (only needed if not using Next's metadata API) */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://YOUR_SITE_URL/" />
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>

      <body>{children}</body>
    </html>
  );
}

