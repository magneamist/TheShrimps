import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "@/components/dialog-demo";
import { UserGreeting } from "@/components/user-greeting";
import GetItems from "@/components/ui/items";

export default function Home() {
  return (
    <div>
      <UserGreeting />
      {/* <h1>Hi, {user.username || "User"} </h1> */}
      <Button variant="default">default</Button>
      <AlertDialogDemo />
      <GetItems />
import { SearchBar } from "@/components/search-bar";
import ItemCard from "@/components/item-card1";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <div
        id="modify"
        className="flex flex-col items-center justify-center gap-2 w-full"
      >
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
              Discount
            </Button>
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
              Size
            </Button>
            <Button
              variant={"outline"}
              className="w-fit h-fit px-3 py-1.5 text-sm border-(--lightPink) hover:bg-(--lightPink) rounded-xl"
            >
              Size
            </Button>
          </div>
        </div>
      </div>
      <div className="inline-grid grid-cols-12 gap-5 pb-5 w-full overflow-y-auto">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      {/* <Button size={"lg"}>Add to bag</Button>
      <Button size={"lg"} className="bg-(--blue) hover:bg-(--blue)/70">
        Add to favorite <HeartIcon stroke="white" strokeWidth="3" />
      </Button>
      <Button variant={"outline"}>Maria shrimp</Button>
      <CartItem /> */}
    </div>
  );
}
