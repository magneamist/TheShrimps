"use client";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
import ItemCard from "@/components/item-card1";
import { useItems } from "../hooks/useItems";

export default function Home() {
  const { items, loading, error } = useItems();

  if (loading) return <p>Fetching items...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div className="flex flex-col items-center justify-center sm:items-start gap-2 w-full">
        <SearchBar />
        <div className="flex flex-col items-start justify-center gap-1 w-full">
          <p className="text-sm">Filters</p>
          <div className="flex gap-2 overflow-x-auto w-full">
            <Button
              variant={"outline"}
              className="w-fit h-fit px-3 py-1.5 text-sm border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
            >
              Size
            </Button>
            <Button
              variant={"outline"}
              className="w-fit h-fit px-3 py-1.5 text-sm border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
            >
              Price
            </Button>
            <Button
              variant={"outline"}
              className="w-fit h-fit px-3 py-1.5 text-sm border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
            >
              With discount
            </Button>

            <Button
              variant={"outline"}
              className="w-fit h-fit px-3 py-1.5 text-sm border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
            >
              Clothing item
            </Button>
          </div>
        </div>
      </div>
      <div className="inline-grid grid-cols-12 gap-5 pb-5 w-full overflow-y-auto">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
