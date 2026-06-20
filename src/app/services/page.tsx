// import { ThemeProvider } from "ox-theme-switcher";
import { Services as ServicesComponent } from "../../components/Services";
import { HeaderWithMegaMenu } from "@/components/shared/header/HeaderWithMegaMenu";
import { Footer } from "@/components/shared/Footer";

export default function Services() {
  return (
    <>
        <HeaderWithMegaMenu />
      <ServicesComponent />
        <Footer />
    </>
  );
}
