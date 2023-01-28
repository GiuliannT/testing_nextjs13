"use client";

import { useState } from "react";
import { Nunito } from "@next/font/google";
import Link from "next/link";
import "./globals.css";
import { PossibleFavoriteImage } from "@/components/PossibleFavoriteImage";
import { FavoriteProvider, useFavorite } from "@/state/favorite";

const nunito = Nunito({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  const [favorites] = useFavorite();

  return (
    <html className={`bg-gray-400 ${nunito.className}`}>
      <head />
      <body className="max-w-screen-lg m-auto p-4">
        <main>
          <Link className="text-3xl font-bold" href="/">
            Dog Breeds
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/affenpinscher">Affenpinscher</Link>
              </li>
              <li>
                <Link href="/poodle">Poodle</Link>
              </li>
              <li>
                <Link href="/airedale">Airedale</Link>
              </li>
            </ul>
          </nav>
        </main>
        <article>{children}</article>
        <article>
          <h2 className="text-2xl font-bold my-2">Favorites</h2>
          <section className="grid grid-cols-3 gap-3">
            {favorites.length === 0 ? <p className="text-xl">No favorites yet</p> : favorites.map((image) => <PossibleFavoriteImage src={image} key={image} />)}
          </section>
        </article>
      </body>
    </html>
  );
}

export default function RootLayoutContainer({ children }: Props) {
  return (
    <FavoriteProvider>
      <RootLayout>{children}</RootLayout>
    </FavoriteProvider>
  );
}
