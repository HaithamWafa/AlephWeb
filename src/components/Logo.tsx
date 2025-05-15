
import React from "react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  design?: "triangle" | "geometric-a" | "building" | "diamond";
}

const Logo: React.FC<LogoProps> = ({ variant = "dark", size = "md", design = "geometric-a" }) => {
  // Determine colors based on variant
  const textColor = variant === "light" ? "text-white" : "text-estate-navy";
  const goldColor = "text-estate-gold";
  
  // Determine size classes
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  // Determine icon size based on text size - increased to better match text height
  const iconSize = {
    sm: "h-7 w-7",
    md: "h-9 w-9",
    lg: "h-12 w-12"
  };
  
  // Render the appropriate logo design - simplified versions
  const renderLogo = () => {
    switch (design) {
      case "triangle":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path 
              d="M50 10L90 80H10L50 10Z" 
              className="fill-estate-gold"
              strokeWidth="0"
            />
          </svg>
        );
        
      case "geometric-a":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path 
              d="M50,10 L80,90 L20,90 Z" 
              className="fill-none"
              strokeWidth="2"
              stroke={variant === "light" ? "white" : "#0C2340"}
            />
            <rect 
              x="35" 
              y="55" 
              width="30" 
              height="5" 
              className="fill-estate-gold" 
            />
          </svg>
        );
        
      case "building":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path 
              d="M30,90 L30,40 L50,20 L70,40 L70,90 Z" 
              className="fill-none"
              strokeWidth="2"
              stroke={variant === "light" ? "white" : "#0C2340"} 
            />
          </svg>
        );
        
      case "diamond":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <rect 
              x="20" 
              y="20" 
              width="60" 
              height="60" 
              className="fill-estate-gold"
              transform="rotate(45 50 50)"
            />
          </svg>
        );
    }
  };
  
  return (
    <div className="flex items-center">
      {/* Logo shape with adjusted size */}
      <div className={`mr-3 ${iconSize[size]}`}>
        {renderLogo()}
      </div>
      
      {/* Logo text */}
      <div className={`font-sans font-light ${sizeClasses[size]} tracking-tight`}>
        <span className={goldColor}>ALEPH</span>
        <span className={textColor}> DEVELOPMENTS</span>
      </div>
    </div>
  );
};

export default Logo;
