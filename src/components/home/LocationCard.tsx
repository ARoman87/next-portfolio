"use client";

import { Card } from "@/components/ui/card";
import createGlobe from "cobe";
import { MapPinIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const LocationCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const fadeMask = "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)";

  const rotationRef = useRef(0); // Store rotation without causing re-renders
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener("resize", onResize);
      }
    };
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 12_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      glowColor: [0.5, 0.5, 0.5],
      markers: [{ location: [37.4316, -78.6569], size: 0.1 }], // Virginia, USA
      scale: 1.05,
      onRender: (state) => {
        state.phi = 25 + rotationRef.current; // Use the rotationRef for smooth animation
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Function to update rotation smoothly
  const updateRotation = (delta: number) => {
    rotationRef.current += delta; // Update rotationRef directly
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(() => {
        animationFrameRef.current = null; // Reset animation frame
      });
    }
  };

  return (
    <Card className="h-[250px] w-full">
      <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl p-4">
        <div className="flex items-center gap-2">
          <MapPinIcon className="size-[18px]" />
          <h2 className="text-sm">Virginia, USA</h2>
        </div>
        <div className="absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              overflow: "visible"
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "1/1",
                maxWidth: 800,
                WebkitMaskImage: fadeMask,
                maskImage: fadeMask
              }}
            >
              <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                  pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                  if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                  pointerInteracting.current = null;
                  if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerOut={() => {
                  pointerInteracting.current = null;
                  if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onMouseMove={(e) => {
                  if (pointerInteracting.current !== null) {
                    const delta = (e.clientX - pointerInteracting.current) / 5000; // Increased divisor for less sensitivity
                    pointerInteractionMovement.current += delta;
                    updateRotation(delta); // Smooth rotation
                  }
                }}
                onTouchMove={(e) => {
                  if (pointerInteracting.current !== null && e.touches[0]) {
                    const delta = (e.touches[0].clientX - pointerInteracting.current) / 5000; // Increased divisor for touch sensitivity
                    pointerInteractionMovement.current += delta;
                    updateRotation(delta); // Smooth rotation
                  }
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  contain: "layout paint size",
                  cursor: "auto",
                  userSelect: "none"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationCard;
