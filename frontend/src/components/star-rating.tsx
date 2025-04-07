"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: "small" | "large";
  readOnly?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export function StarRating({
  rating = 0,
  maxRating = 5,
  size = "large",
  readOnly = false,
  onChange,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(rating);

  const sizeClasses = {
    small: "w-3 h-3", // 12x12
    large: "w-6 h-6", // 24x24
  };

  const handleClick = (index: number) => {
    if (readOnly) return;

    const newRating = index + 1;
    setSelectedRating(newRating);
    onChange?.(newRating);
  };

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(null);
  };

  const displayRating = hoverRating ?? selectedRating;

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role={readOnly ? "img" : "slider"}
      aria-label={`${displayRating} out of ${maxRating} stars`}
      aria-valuemin={0}
      aria-valuemax={maxRating}
      aria-valuenow={displayRating}
      tabIndex={readOnly ? undefined : 0}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: maxRating }).map((_, index) => {
        const isFilled = index < displayRating;

        return (
          <button
            key={index}
            type={readOnly ? "button" : "button"}
            disabled={readOnly}
            className={cn(
              "relative cursor-pointer transition-colors",
              readOnly && "cursor-default",
              !readOnly && "hover:scale-110"
            )}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            aria-label={`${index + 1} stars`}
            onKeyDown={(e) => {
              if (readOnly) return;
              if (e.key === "ArrowRight") {
                const newRating = Math.min(selectedRating + 1, maxRating);
                setSelectedRating(newRating);
                onChange?.(newRating);
              } else if (e.key === "ArrowLeft") {
                const newRating = Math.max(selectedRating - 1, 0);
                setSelectedRating(newRating);
                onChange?.(newRating);
              }
            }}
          >
            <Star
              className={cn(
                sizeClasses[size],
                "stroke-2",
                isFilled
                  ? "fill-(--yellow) text-(--yellow)"
                  : "fill-(none) text-(--yellow)"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
