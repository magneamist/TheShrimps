"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { StarRating } from "@/components/star-rating";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ProfileCard() {
  const [rating, setRating] = useState(3);
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // Get user's profile image or use fallback
  const profileImage = user?.imageUrl || "/blank-profile.png";

  // Get user's name or use fallback
  const userName = user?.fullName || user?.username || "User";

  return (
    <div className="flex flex-row">
      <Card className="w-36 h-52 py-2 flex items-center justify-center shadow-none border-(--lightPink)">
        <CardContent className="h-fit flex flex-col items-center gap-2 px-3">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src={profileImage}
              alt="Profile Image"
              fill
              sizes="100px"
              className="rounded-full object-cover"
              priority
            />
          </div>
          <CardTitle className="text-center font-normal leading-normal">
            {userName}
          </CardTitle>

          <StarRating
            rating={rating}
            size="small"
            onChange={(newRating) => setRating(newRating)}
          />
        </CardContent>
      </Card>
    </div>
  );
}
