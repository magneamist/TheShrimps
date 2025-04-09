"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header({ title }: { title?: string }) {
  const router = useRouter();

  return (
    <div className="relative w-full">
      <div className="flex w-full justify-center pb-4">
        <button onClick={() => router.back()}>
          <ArrowLeft
            strokeWidth={1.5}
            size={34}
            className="absolute top-0 left-0"
          />
        </button>
        <h1 className="text-2xl">{title}</h1>
      </div>
    </div>
  );
}
