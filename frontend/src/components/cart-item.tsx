import Image from "next/image";
import { XIcon } from "@/assets/icons";

export default function CartItem() {
  return (
    <div className="flex items-center px-3 py-2 w-full gap-3 border border-(--lightPink) rounded-2xl">
      <Image
        src="/clothing-placeholder.png"
        alt="Cart Item"
        width={80}
        height={80}
        className="rounded-lg"
      />
      <div className="flex flex-col flex-1 min-h-[80px] justify-between">
        <div>
          <h3 className="font-medium">Leather Jacket</h3>
          <p className="text-xs text-gray-600">Size: M</p>
        </div>
        <p className="font-bold">$30</p>
      </div>
      <button>
        <XIcon />
      </button>
    </div>
  );
}
