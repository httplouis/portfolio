"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  projectName: string;
  isMobile?: boolean;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  projectName,
  isMobile = false,
}: ImageLightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(images.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1);
        } else {
          onNavigate(images.length - 1);
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex < images.length - 1) {
          onNavigate(currentIndex + 1);
        } else {
          onNavigate(0);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onNavigate, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">
          {projectName} - Image {currentIndex + 1} of {images.length}
        </DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full flex items-center justify-center p-8"
            >
              <div
                className={`relative ${
                  isMobile
                    ? "w-full max-w-md h-full"
                    : "w-full h-full max-w-6xl"
                }`}
              >
                {/* Check if current image is a logo (first image) - no cropping for logos */}
                {isMobile && currentIndex > 0 ? (
                  <div
                    className="relative w-full h-full"
                    style={{
                      clipPath: projectName.toLowerCase().includes('sarap') 
                        ? "inset(8% 0 8% 0)" 
                        : "inset(8% 0 0 0)",
                    }}
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`${projectName} screenshot ${currentIndex + 1}`}
                      fill
                      className={`object-contain ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-300`}
                      onLoad={() => setImageLoaded(true)}
                      priority
                    />
                  </div>
                ) : (
                  <Image
                    src={images[currentIndex]}
                    alt={`${projectName} screenshot ${currentIndex + 1}`}
                    fill
                    className={`object-contain ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300`}
                    onLoad={() => setImageLoaded(true)}
                    priority
                  />
                )}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}

