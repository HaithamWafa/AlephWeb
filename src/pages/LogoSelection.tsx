
import LogoShowcase from "../components/LogoShowcase";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LogoSelection = () => {
  return (
    <main className="min-h-screen bg-estate-light">
      <div className="h-24 bg-estate-navy flex items-center px-8">
        <Link to="/" className="text-white flex items-center gap-2 hover:text-estate-gold transition-colors">
          <ArrowLeft size={18} />
          <span className="uppercase tracking-wide text-sm font-light">Return Home</span>
        </Link>
      </div>
      
      <div className="container max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl text-estate-navy font-display font-normal text-center mb-4">Brand Identity</h1>
        <div className="h-px w-24 bg-estate-gold mx-auto mb-8"></div>
        <p className="text-center text-estate-charcoal/80 max-w-xl mx-auto mb-16 font-light">
          Explore our collection of logo designs, each crafted to embody the elegance and sophistication of the Aleph Developments brand.
        </p>
        <LogoShowcase />
      </div>
    </main>
  );
};

export default LogoSelection;
