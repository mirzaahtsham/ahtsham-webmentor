// import { ThemeProvider } from "ox-theme-switcher";
import { Services as ServicesComponent } from "../../components/Services";
import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";

export default function Services() {
  return (
    <>
        <HeaderWithMegaMenu />
      <ServicesComponent />
        <Footer />
    </>
  );
}
