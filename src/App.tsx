// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Properties from "./pages/Properties";
// import PropertyDetail from "./pages/PropertyDetail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import EMICalculator from "./pages/EMICalculator";
// import Career from "./pages/Career";
// import Blog from "./pages/Blog";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/properties" element={<Properties />} />
//           <Route path="/properties/:id" element={<PropertyDetail />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/emi-calculator" element={<EMICalculator />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </TooltipProvider>
//     </BrowserRouter>
//   </QueryClientProvider>
// );

// export default App;



//testing

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Index from "./pages/Index";
// import Properties from "./pages/Properties";
// import PropertyDetail from "./pages/PropertyDetail";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import EMICalculator from "./pages/EMICalculator";
// import Career from "./pages/Career";
// import Blog from "./pages/Blog";
// import BlogDetail from "./pages/BlogDetail";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/properties" element={<Properties />} />
//           <Route path="/properties/:id" element={<PropertyDetail />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/emi-calculator" element={<EMICalculator />} />
//           <Route path="/career" element={<Career />} />

//           {/* Blog Routes */}
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogDetail />} />

//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </TooltipProvider>
//     </BrowserRouter>
//   </QueryClientProvider>
// );

// export default App;


//testing 3
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EMICalculator from "./pages/EMICalculator";
import Career from "./pages/Career";
import Blog from "./pages/Blog";          // ← default import
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/career" element={<Career />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
 {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;