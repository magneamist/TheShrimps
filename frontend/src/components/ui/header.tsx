import { ArrowLeft } from "lucide-react";

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex w-full justify-center pb-4">
      <ArrowLeft
        strokeWidth={1.5}
        size={34}
        className="absolute top-0 left-0"
      />
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}
