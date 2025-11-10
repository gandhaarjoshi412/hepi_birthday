import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChakraYantra from "./pages/ChakraYantra";
import YastiYantra from "./pages/YastiYantra";
import PhalakaYantra from "./pages/PhalakaYantra";
import DhanurYantra from "./pages/DhanurYantra";
import VernierCaliper from "./pages/VernierCaliper";
import Micrometer from "./pages/Micrometer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chakra-yantra" element={<ChakraYantra />} />
          <Route path="/yasti-yantra" element={<YastiYantra />} />
          <Route path="/phalaka-yantra" element={<PhalakaYantra />} />
          <Route path="/dhanur-yantra" element={<DhanurYantra />} />
          <Route path="/vernier-caliper" element={<VernierCaliper />} />
          <Route path="/micrometer" element={<Micrometer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
