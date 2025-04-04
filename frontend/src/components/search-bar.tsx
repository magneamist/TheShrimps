"use client";

import type * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  hideLabel?: boolean;
}

export function SearchBar({
  className,
  label = "Search",
  hideLabel = true,
  id = "search",
  ...props
}: SearchBarProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      {label && (
        <Label htmlFor={id} className={cn(hideLabel && "sr-only")}>
          {label}
        </Label>
      )}
      <div className="relative ">
        <Search className="absolute left-3 top-1/2 h-6 w-6 stroke-[1.5px] -translate-y-1/2 text-muted-foreground" />
        <Input
          id={id}
          type="search"
          placeholder="Search..."
          className="pl-10 py-5 rounded-2xl "
          {...props}
        />
      </div>
    </div>
  );
}
