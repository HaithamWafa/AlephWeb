
import React, { useState } from 'react';
import Logo from './Logo';
import { Check } from 'lucide-react';

const LogoShowcase = () => {
  const [selectedDesign, setSelectedDesign] = useState<"triangle" | "geometric-a" | "building" | "diamond">("geometric-a");
  
  const designs = [
    { id: "triangle", name: "Triangle Design" },
    { id: "geometric-a", name: "Geometric A" },
    { id: "building", name: "Building Icon" },
    { id: "diamond", name: "Diamond Shape" }
  ] as const;

  return (
    <div className="premium-card p-12">
      <h2 className="text-2xl font-display text-estate-navy mb-12 text-center">Select Your Preferred Logo Design</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {designs.map((design) => (
          <div 
            key={design.id}
            className={`p-6 border cursor-pointer transition-all group ${
              selectedDesign === design.id
                ? 'border-estate-gold bg-estate-cream shadow-md'
                : 'border-gray-200 hover:border-estate-gold'
            }`}
            onClick={() => setSelectedDesign(design.id as any)}
          >
            <div className="flex justify-center mb-4">
              <Logo variant="dark" size="lg" design={design.id as any} />
            </div>
            <div className="text-center">
              <h3 className="font-display text-estate-navy mb-2">{design.name}</h3>
              {selectedDesign === design.id && (
                <div className="text-estate-gold flex items-center justify-center gap-2">
                  <Check size={16} />
                  <span className="text-sm">Selected</span>
                </div>
              )}
              {selectedDesign !== design.id && (
                <p className="text-sm text-estate-charcoal/70">
                  Click to select
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-estate-navy p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-estate-gold"></div>
        
        <h3 className="text-white text-center mb-8 font-display text-2xl">Selected Logo Preview</h3>
        
        <div className="flex flex-col gap-10">
          <div className="bg-white p-8 mb-6">
            <div className="flex justify-center">
              <Logo variant="dark" size="lg" design={selectedDesign} />
            </div>
            <p className="text-center mt-4 text-sm text-estate-charcoal/70">Dark Variant</p>
          </div>
          
          <div className="bg-estate-navy p-8 border border-white/10">
            <div className="flex justify-center">
              <Logo variant="light" size="lg" design={selectedDesign} />
            </div>
            <p className="text-center mt-4 text-sm text-white/70">Light Variant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
