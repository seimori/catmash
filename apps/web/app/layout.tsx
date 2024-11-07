import { Footer } from "../components/layout/Header/Footer/Footer";
import { Header } from "../components/layout/Header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer>Voir le classement des chats</Footer>
      </body>
    </html>
  );
}
