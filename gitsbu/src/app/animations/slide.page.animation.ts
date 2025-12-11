import { animate, style, transition, trigger } from '@angular/animations';

export const slidePageAnimation = trigger('slidePage', [
  // Entering view → slide up from bottom
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate('400ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
  ]),

  // Leaving view → slide down
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('400ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })),
  ]),
]);
22;
