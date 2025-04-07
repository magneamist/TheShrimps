import Image from "next/image";
import { HeartIcon } from "@/assets/icons";

export default function ItemCard() {
  return (
    <div className="relative flex flex-col items-center gap-1">
      <div className="w-36 h-40 relative">
        <Image
          src="/blank-profile.png"
          alt="Cart Item"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover rounded-t-xl"
          priority
        />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-sm">Leather Jacket</p>
        <p className="text-sm">$30</p>
      </div>
      <button className="absolute top-0 right-0 p-2 z-10">
        <HeartIcon size="24" />
      </button>
    </div>
  );
}
