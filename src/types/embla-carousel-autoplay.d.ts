declare module 'embla-carousel-autoplay' {
  import { EmblaCarouselType } from 'embla-carousel-react';
  
  export default function Autoplay(options?: {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    rootNode?: (emblaRoot: HTMLElement) => HTMLElement | null;
  }): EmblaCarouselType;
} 