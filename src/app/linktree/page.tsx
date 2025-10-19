import { ThemeProvider } from "../../components/ThemeProvider";
import { Linktree as LinktreeComponent } from "../../components/linktree";
import { HeaderWithMegaMenu } from "@/components/HeaderWithMegaMenu";
import { Footer } from "@/components/Footer";

export default function Linktree() {
    return (
    <ThemeProvider>
        <HeaderWithMegaMenu />
      <LinktreeComponent />
        <Footer />
    </ThemeProvider>
    );
}