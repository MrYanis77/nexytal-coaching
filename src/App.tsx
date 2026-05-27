import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CoachingDirigeants from "./pages/CoachingDirigeants";
import CoachingManagers from "./pages/CoachingManagers";
import CoachingSalaries from "./pages/CoachingSalaries";
import CoachingEquipes from "./pages/CoachingEquipes";
import Methode from "./pages/Methode";
import Coachs from "./pages/Coachs";
import Temoignages from "./pages/Temoignages";
import Tarifs from "./pages/Tarifs";
import APropos from "./pages/APropos";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Diagnostic from "./pages/Diagnostic";
import FAQ from "./pages/FAQ";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/coaching-dirigeants" component={CoachingDirigeants} />
        <Route path="/coaching-managers" component={CoachingManagers} />
        <Route path="/coaching-salaries" component={CoachingSalaries} />
        <Route path="/coaching-equipes" component={CoachingEquipes} />
        <Route path="/methode" component={Methode} />
        <Route path="/coachs" component={Coachs} />
        <Route path="/temoignages" component={Temoignages} />
        <Route path="/tarifs" component={Tarifs} />
        <Route path="/a-propos" component={APropos} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/diagnostic" component={Diagnostic} />
        <Route path="/faq" component={FAQ} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
