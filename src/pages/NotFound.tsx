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
          Return to Saforaai
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
