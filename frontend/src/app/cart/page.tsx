import CartItem from "@/components/cart-item";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";

export default function Cart() {
  return (
    <div className="flex flex-col items-center justify-between h-full pb-5">
      <Header title="My cart" />

      <div className="flex flex-col gap-3 w-full h-full pb-4 overflow-y-auto">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <div className="flex flex-col w-full gap-2">
          <hr className="border-(--pink) rounded-full border w-full" />
          <div className="flex justify-between w-full px-3">
            <p className="">Total</p>
            <p className="font-bold">$120</p>
          </div>
        </div>
        <Button size={"lg"}>Checkout</Button>
      </div>
    </div>
  );
}
