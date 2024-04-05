import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Links } from "@/components/links";
import '../app/globals.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Links />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
