import "./globals.css";

export const metadata = {
  title: "Lakshyraj Singh Rathore — Frontend Developer",
  description: "Portfolio of Lakshyraj Singh Rathore, a Frontend Developer crafting beautiful, responsive web experiences with modern technologies.",
  keywords: "frontend developer, react, nextjs, portfolio, web developer, India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
