import { memo } from "react";
import type { TReelItem } from "../consts";

interface ReelItemsProps {
  items: TReelItem[];
  isSpinning: boolean;
}

const ReelItems = ({ items, isSpinning }: ReelItemsProps) => {
  return (
    <div className={`reel__items ${isSpinning ? "is-out" : ""}`}>
      {items.map((item: TReelItem, i: number) => {
        const rowIndex = Math.floor(i / 5);
        const colIndex = i % 5;

        const finalTop = rowIndex * 25;
        const dropDistance = 300 + finalTop + 25;

        return (
          <div
            key={i}
            className="reel__item"
            style={
              {
                top: `${finalTop}%`,
                left: `${colIndex * 20}%`,
                animationDelay: `${i * 0.06}s`,
                "--drop-distance": `${dropDistance}%`,
              } as React.CSSProperties
            }
          >
            <img src={item.img} alt={`item-${item.id}`} />
          </div>
        );
      })}
    </div>
  );
};

export default memo(ReelItems);
