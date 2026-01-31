// import { ThemeProvider } from "ox-theme-switcher";
import { Linktree as LinktreeComponent } from "../../components/linktree";
import { HeaderWithMegaMenu } from "@/components/Header/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";
import SeoSchema from "./SeoSchema";
import { ContactModal } from "./ContactModal";

export default function AhtshamConnect() {
  return (
    <>
      <SeoSchema />
      <HeaderWithMegaMenu />
      {/* <div 
      className="flex flex-col items-center mt-6 space-y-4"
      >
        <ContactModal />
      </div> */}
      <LinktreeComponent />
      <Footer />
      </>
  );
}
