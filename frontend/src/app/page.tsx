import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SearchBar />
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <p className="">Filters</p>
        <Button className="bg-transparent border border-(--lightPink) text-foreground hover:bg-(--lightPink) rounded-xl">
          Size
        </Button>
      </div>
    </div>
  );
}
