import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
import { HeartIcon } from "@/assets/icons";
import CartItem from "@/components/cart-item";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <SearchBar />
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <p className="">Filters</p>
        {/* <Button className="bg-transparent border border-(--lightPink) text-foreground hover:bg-(--lightPink) rounded-xl">
          Size
        </Button> */}
        <Button
          variant={"outline"}
          className="w-fit h-fit px-3 py-1.5 border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
        >
          Size
        </Button>
        <Button className="w-60 h-fit py-4">Add to bag</Button>
        <Button className="w-60 h-fit py-4 bg-(--blue) hover:bg-(--blue)/70">
          Add to favorite <HeartIcon stroke="white" strokeWidth="3" />
        </Button>
        <Button variant={"outline"}>Maria shrimp</Button>
        <CartItem />
      </div>
    </div>
  );
}
