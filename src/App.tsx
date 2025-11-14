import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NetflixPreloader from "./components/NetflixPreloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a small delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Preload critical resources
  useEffect(() => {
    const preloadImages = () => {
      // Add any critical images you want to preload here
      // Place the image attachment you uploaded at `public/L1.png`.
      const imageUrls = [
        '/L1.png',
        // '/path/to/hero-image.jpg',
        // '/path/to/profile-image.jpg',
      ];

      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      return Promise.allSettled(imagePromises);
    };

    // Simulate content loading (you can replace this with actual loading logic)
    Promise.all([
      preloadImages(),
      // Add other loading operations here (API calls, etc.)
      new Promise(resolve => setTimeout(resolve, 2000)) // Minimum loading time
    ]).then(() => {
      // Loading complete, but let the preloader handle the transition
    });
  }, []);

  if (isLoading) {
    return <NetflixPreloader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
