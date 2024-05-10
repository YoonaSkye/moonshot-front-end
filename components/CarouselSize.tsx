import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card1 } from './cards/card-1';
import { Card2 } from './cards/card-2';
import { Card3 } from './cards/card-3';
import { Card4 } from './cards/card-4';
import './style.css';

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: 'end',
      }}
      className="w-full relative mx-4"
    >
      <CarouselContent className="ml-6 gap-[52px] mr-6">
        <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/3">
          <Card1 />
        </CarouselItem>
        <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/3 p-0">
          <Card2 />
        </CarouselItem>
        <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/3 p-0">
          <Card3 />
        </CarouselItem>
        <CarouselItem key={4} className="md:basis-1/2 lg:basis-1/3 p-0">
          <Card4 />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="pre absolute left-[50px] bottom-1/2 translate-y-1/2 w-12 h-12" />
      <CarouselNext className="next absolute right-[50px] bottom-1/2 translate-y-1/2 w-12 h-12" />
    </Carousel>
  );
}
