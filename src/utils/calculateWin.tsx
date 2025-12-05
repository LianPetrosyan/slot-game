/* eslint-disable @typescript-eslint/no-unused-vars */
import { REEL_ITEMS, type TReelItem, type WinResult } from "../consts";

export function calculateWin(items: TReelItem[]): WinResult | null {
  const counts: Record<number, number> = {};

  for (const it of items) {
    counts[it.id] = (counts[it.id] || 0) + 1;
  }

  const qualifying: WinResult[] = Object.entries(counts)
    .filter(([_, count]) => count >= 5)
    .map(([id, count]) => {
      const symbol = REEL_ITEMS.find((x) => x.id === Number(id));
      if (!symbol) return null;

      const prizeTier = symbol.range.find(
        (r) => count >= r.min && count <= r.max
      );

      return {
        id: Number(id),
        count,
        prize: prizeTier ? prizeTier.value : 0,
        img: symbol.img,
        range: symbol.range,
      };
    })
    .filter((x): x is WinResult => x !== null && x.prize > 0);

  if (qualifying.length === 0) return null;

  qualifying.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return b.prize - a.prize;
  });

  return qualifying[0];
}
