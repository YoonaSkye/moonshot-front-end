import { CarouselSize } from '@/components/CarouselSize';

export default function Home() {
  return (
    <main className="mt-11">
      <h2 className="catelogue text-white mb-10 ml-4">{`< / Trending Now >`}</h2>
      <CarouselSize />
    </main>
  );
}
