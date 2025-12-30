import "./globals.css";
import { inter } from './fonts';
import Header from './components/header';
import Footer from './footer';

export const metadata = {
  title: "The Orange Project",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}