import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useMetaTags } from "./hooks/useMetaTags";
import Home from "./pages/Home";

// SEO Blog Pages
import AkoObjednatTaxiBezAplikacie from "./pages/blog/AkoObjednatTaxiBezAplikacie";
import KedyVolatTaxiVopred from "./pages/blog/KedyVolatTaxiVopred";
import PlatbaVTaxiku from "./pages/blog/PlatbaVTaxiku";
import TaxiSDetskouSedackou from "./pages/blog/TaxiSDetskouSedackou";
import TaxiNaVlakAutobus from "./pages/blog/TaxiNaVlakAutobus";
import LetiskovaPreprava from "./pages/blog/LetiskovaPreprava";
import AkoPodatStaznost from "./pages/blog/AkoPodatStaznost";
import NonstopTaxi from "./pages/blog/NonstopTaxi";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  // Update meta tags based on language
  useMetaTags();

  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path={"/"} component={Home} />

        {/* SEO Blog Routes */}
        <Route path={"/ako-objednat-taxi-bez-aplikacie"} component={AkoObjednatTaxiBezAplikacie} />
        <Route path={"/kedy-volat-taxi-vopred"} component={KedyVolatTaxiVopred} />
        <Route path={"/platba-v-taxiku"} component={PlatbaVTaxiku} />
        <Route path={"/taxi-s-detskou-sedackou"} component={TaxiSDetskouSedackou} />
        <Route path={"/taxi-na-vlak-autobus"} component={TaxiNaVlakAutobus} />
        <Route path={"/letiskova-preprava"} component={LetiskovaPreprava} />
        <Route path={"/ako-podat-staznost"} component={AkoPodatStaznost} />
        <Route path={"/nonstop-taxi"} component={NonstopTaxi} />

        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// Addison Lee inspired dark theme
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
