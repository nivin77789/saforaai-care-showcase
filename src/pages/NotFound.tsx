import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-glow">
        <img
          src="/avon angels.png"
          alt="Avon Angels Home Care logo"
          className="h-8 w-auto object-contain"
        />
        <span className="hidden sm:inline font-display text-sm font-bold text-navy tracking-wide">
          Avon Angels Home Care
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-glass p-12 text-center max-w-md w-full"
      >
        <h1 className="mb-4 text-7xl font-display font-bold text-primary">404</h1>
        <p className="mb-8 text-xl font-body text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold shadow-glow hover:bg-primary/90 transition-all"
        >
          <Home className="w-5 h-5" />
          Return to Avon Angels Home Care
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
