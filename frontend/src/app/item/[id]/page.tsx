"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/header";
import { useParams } from "next/navigation";
import { Item } from "@/services/api";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/assets/icons";
import { useItems } from "@/hooks/useItems";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export default function ItemPage() {
  const params = useParams();
  const itemId = typeof params.id === "string" ? parseInt(params.id, 10) : -1;
  const { items, loading: itemsLoading, error: itemsError } = useItems();
  const [item, setItem] = useState<Item | null>(null);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (items.length > 0) {
      const foundItem = items.find((item) => item.id === itemId);
      setItem(foundItem || null);
    }
  }, [items, itemId]);

  // Show loading state while items are being fetched
  if (itemsLoading)
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );

  // Show error if there was an issue fetching items
  if (itemsError)
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Error: {itemsError}
      </div>
    );

  // Show error if item wasn't found
  if (!item)
    return (
      <div className="flex justify-center items-center h-full">
        Item not found
      </div>
    );

  // Determine the image source
  const imageUrl =
    item.image && !imageError
      ? `http://localhost:4000/images/${item.image}`
      : "/clothing-placeholder.png";

  const navigateToCart = () => {
    router.push("/cart");
  };

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <Header title={item.name}></Header>
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col w-full gap-2">
          <div className="w-full h-56 relative">
            <Image
              src={imageUrl}
              alt={item.name}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              onError={() => setImageError(true)}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl">{item.name}</h2>
              <span className="text-2xl">
                $
                {typeof item.price === "number"
                  ? item.price
                  : parseFloat(item.price)}
              </span>
            </div>
          </div>
          <p>
            Size: {item.size}. {item.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size={"lg"}>Add to bag</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Successfully added to the cart!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Continue shopping?
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={navigateToCart}
                  className="rounded-2xl text-white bg-black"
                >
                  No
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={navigateToHome}
                  className="bg-(--blue)"
                >
                  Yes please
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            size={"lg"}
            className="bg-(--blue) hover:bg-(--blue)/80 text-white"
          >
            {item.favorite === "YES" ? "Already" : "Add to"} favorite
            <HeartIcon
              strokeWidth="3"
              stroke="white"
              fill={item.favorite === "YES" ? "white" : "none"}
            />
          </Button>
        </div>
        <div className="flex flex-col w-full">
          <p className="pl-2 pb-1 text-sm text-muted-foreground">Owner</p>
          <Link
            href={`/profile/${item.id}`}
            className="flex justify-between w-full border border-(--lightPink) hover:bg-(--lightPink) rounded-2xl px-2 py-4"
          >
            <p>{item.seller_name}</p>
            <ArrowRight strokeWidth={1.5} size={24} className="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
