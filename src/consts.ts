import blue from "./assets/slots/blue.webp";
import crown from "./assets/slots/crown.webp";
import cup from "./assets/slots/cup.webp";
import golden from "./assets/slots/golden.webp";
import green from "./assets/slots/green.webp";
import ring from "./assets/slots/ring.webp";
import ruby from "./assets/slots/ruby.webp";
import sun from "./assets/slots/sun.webp";
import triangle from "./assets/slots/triangle.webp";

export type TReelItem = {
  id: number;
  img: string;
  range: Array<{ min: number; max: number; value: number }>;
};

export type WinResult = {
  id: number;
  count: number;
  prize: number;
  img: string;
  range: Array<{ min: number; max: number; value: number }>;
};

export const REEL_ITEMS: TReelItem[] = [
  {
    id: 1,
    img: blue,
    range: [
      { min: 5, max: 9, value: 250 },
      { min: 10, max: 11, value: 750 },
      { min: 12, max: 30, value: 2000 },
    ],
  },
  {
    id: 2,
    img: crown,
    range: [
      { min: 5, max: 9, value: 10000 },
      { min: 10, max: 11, value: 25000 },
      { min: 12, max: 30, value: 50000 },
    ],
  },
  {
    id: 3,
    img: cup,
    range: [
      { min: 5, max: 9, value: 1500 },
      { min: 10, max: 11, value: 2000 },
      { min: 12, max: 30, value: 12000 },
    ],
  },
  {
    id: 4,
    img: golden,
    range: [
      { min: 5, max: 9, value: 500 },
      { min: 10, max: 11, value: 1000 },
      { min: 12, max: 30, value: 5000 },
    ],
  },
  {
    id: 5,
    img: green,
    range: [
      { min: 5, max: 9, value: 400 },
      { min: 10, max: 11, value: 900 },
      { min: 12, max: 30, value: 4000 },
    ],
  },
  {
    id: 6,
    img: ring,
    range: [
      { min: 5, max: 9, value: 2000 },
      { min: 10, max: 11, value: 5000 },
      { min: 12, max: 30, value: 15000 },
    ],
  },
  {
    id: 7,
    img: ruby,
    range: [
      { min: 5, max: 9, value: 1000 },
      { min: 10, max: 11, value: 1500 },
      { min: 12, max: 30, value: 10000 },
    ],
  },
  {
    id: 8,
    img: sun,
    range: [
      { min: 5, max: 9, value: 1000 },
      { min: 10, max: 11, value: 1500 },
      { min: 12, max: 30, value: 10000 },
    ],
  },
  {
    id: 9,
    img: triangle,
    range: [
      { min: 5, max: 9, value: 800 },
      { min: 10, max: 11, value: 1200 },
      { min: 12, max: 30, value: 8000 },
    ],
  },
];
