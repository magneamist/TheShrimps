"use client";
import Image from "next/image";
import { HeartIcon } from "@/assets/icons";
import { Item } from "../services/api";
import Link from "next/link";
import { useState } from "react";

type ItemCardProps = {
  item: Item;
};

export default function ItemCard({ item }: ItemCardProps) {
  const [imageError, setImageError] = useState(false);

  // Determine the image source
  const imageUrl =
    item.image && !imageError
      ? `http://localhost:4000/images/${item.image}`
      : "/clothing-placeholder.png";

  return (
    <>
      <Link
        href={`/item/${item.id}`}
        className="relative col-span-6 sm:col-span-4 flex flex-col items-center gap-1 border border-(--lightPink) rounded-2xl p-2 hover:scale-105 transition duration-200 ease-in-out"
      >
        <div className="w-full h-44 relative">
          <Image
            src={imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover rounded-t-xl"
            priority
            onError={() => setImageError(true)}
          />
        </div>
        <div className="flex justify-between w-full">
          <p className="text-sm truncate">{item.name}</p>
          <p className="text-sm">
            $
            {typeof item.price === "number"
              ? item.price
              : parseFloat(item.price)}
          </p>
        </div>
        <button className="absolute top-0 right-0 p-2 z-10">
          <HeartIcon size="24" />
        </button>
      </Link>
    </>
  );
}
