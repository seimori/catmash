import { Footer } from "../components/layout/Footer/Footer";
import { Header } from "../components/layout/Header/Header";
import { MainContent } from "../components/layout/MainContent/MainContent";
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
        <MainContent>{children}</MainContent>
        <Footer>Voir le classement des chats</Footer>
      </body>
    </html>
  );
}
