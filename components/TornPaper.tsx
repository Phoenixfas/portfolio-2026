import React, { ReactNode } from 'react';

interface TornPaperProps {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    paperColor?: string;
    rounded?: boolean;
    isBig?: boolean;
}

export default function TornPaper({
    children,
    className = "",
    innerClassName = "",
    paperColor = "bg-white",
    rounded = false,
    isBig = false
}: TornPaperProps) {
    return (
        // The main wrapper scales to fit the content
        <div className={`relative inline-block w-fit ${className}`}>

            {/* SVG Filter Definition 
        Hidden from view, but provides the turbulence math for the CSS filter.
        Uses the exact frequencies and octaves from your original code.
      */}
            <svg className="absolute w-0 h-0" aria-hidden="true">
                <filter id="torn-edge-noise">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.03"
                        numOctaves="24"
                        seed="10"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        scale="8"
                        xChannelSelector="B"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>

            {/* The "Paper" Background Layer 
        Sits behind the content. The SVG filter and drop-shadow are applied here 
        so the ragged edges cast a realistic shadow without warping the text.
      */}
            <div
                className={`absolute inset-0 z-0 ${paperColor} ${rounded ? 'rounded-full overflow-hidden' : ''}`}
                style={{
                    // Combines the SVG displacement with a CSS drop-shadow
                    filter: `url(#torn-edge-noise) drop-shadow(0px 0px 0.75rem rgba(255, 255, 255, 0.3))`,
                }}
            />

            {/* Content Layer 
        Positioned relatively to sit above the torn background layer.
      */}
            <div className={`relative z-10 ${innerClassName}`}>
                {children}
            </div>

        </div>
    );
}