"use client";

import Image from "next/image";
import { useFavorite } from "@/state/favorite";

export const PossibleFavoriteImage = ({ src }: { src: string }) => {
  const [favorites, toggleFavorite] = useFavorite();
  const isFavorite = favorites.includes(src);

  return (
    <div className="bg-gray-200 p-2 relative flex items-center justify-center">
      <Image className="w-auto h-auto object-cover" src={src} alt="dog_image" width="256" height="256" priority />
      <button
        className={`absolute w-8 h-8 text-2xl flex items-center justify-center bottom-2 right-2 bg-white rounded-full shadow-lg ${isFavorite ? "text-yellow-500" : "text-black"}`}
        onClick={() => toggleFavorite(src)}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
};
