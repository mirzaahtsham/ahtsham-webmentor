import { ThemeProvider } from "../../components/ThemeProvider";
import { Services as ServicesComponent } from "../../components/Services";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";

export default function Services() {
  return (
    <ThemeProvider>
        <HeaderWithMegaMenu />
      <ServicesComponent />
        <Footer />
    </ThemeProvider>
  );
}
