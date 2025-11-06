// import { ThemeProvider } from "ox-theme-switcher";
import { Services as ServicesComponent } from "../../components/Services";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
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
