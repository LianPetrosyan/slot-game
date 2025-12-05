import { REEL_ITEMS } from "../consts";

export function makeRandomItems() {
  return Array.from({ length: 20 }).map(
    () => REEL_ITEMS[Math.floor(Math.random() * REEL_ITEMS.length)]
  );
}
