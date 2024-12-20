import { Header } from "../components/layout/Header/Header";
import "./globals.css";
import { inter } from "../public/fonts/inter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
