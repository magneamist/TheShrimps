"use client";
import ItemCard from "@/components/item-card1";
import { useItems } from "@/hooks/useItems";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FavoriteItems() {
  const { items, loading, error } = useItems();

  if (loading) return <p>Fetching items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-2 h-(--screen-wo-navbar)">
      <Link
        href={"/favoriteProfiles"}
        className="flex justify-between w-full border border-(--lightPink) hover:bg-(--lightPink) rounded-2xl px-2 py-4"
      >
        <p>Go to favorite profiles</p>
        <ArrowRight strokeWidth={1.5} size={24} className="" />
      </Link>
      <p>Favoite items</p>
      <div className="inline-grid grid-cols-12 gap-5 pb-5 w-full overflow-y-auto">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
