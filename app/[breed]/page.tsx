import { PossibleFavoriteImage } from "@/components/PossibleFavoriteImage";

interface Props {
  params: {
    breed: string;
  };
}

export default async function BreedPage({ params: { breed } }: Props) {
  const { message: images } = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`).then((res) => res.json() as Promise<{ message: string[] }>);

  return (
    <section className="bg-blue-500 min-h-screen grid grid-cols-3 gap-3 p-3">
      {images.map((image) => (
        <PossibleFavoriteImage src={image} key={image} />
      ))}
    </section>
  );
}
