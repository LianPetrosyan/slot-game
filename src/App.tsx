import "./App.css";
import character from "./assets/character.webp";
import bg from "./assets/bg.webp";
import reelBase from "./assets/reel_base.webp";
import reelFrame from "./assets/reel_frame.webp";
import btn from "./assets/btn.webp";

import { LogoIcon } from "./assets/icons/LogoIcon";
import { SpinItem } from "./assets/icons/SpinIcon";
import { useCallback, useEffect, useState } from "react";
import { makeRandomItems } from "./utils/makeRandomItems";
import { calculateWin } from "./utils/calculateWin";
import ReelItems from "./ReelItems/ReelItems";
import type { WinResult } from "./consts";

function App() {
  const [currentItems, setCurrentItems] = useState(() => makeRandomItems());
  const [isSpinning, setIsSpinning] = useState(false);
  const [winData, setWinData] = useState<WinResult | null>(null);
  const [showModal, setShowModal] = useState(false);

  const generateItems = useCallback(() => makeRandomItems(), []);

  useEffect(() => {
    if (!isSpinning && winData) {
      const t = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(t);
    }
  }, [isSpinning, winData]);

  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    const nextItems = generateItems();
    setIsSpinning(true);

    const durationMs = 1000;
    const staggerMs = 60;
    const totalWait = durationMs + (20 - 1) * staggerMs + 80;

    setTimeout(() => {
      setCurrentItems(nextItems);
      setIsSpinning(false);

      const win = calculateWin(nextItems);
      setWinData(win);
      setShowModal(false);
    }, totalWait);
  }, [isSpinning]);

  return (
    <div className="container">
      <img className="container__image--bg" alt="background" src={bg} />
      <img className="container__image" alt="character" src={character} />
      <h1 className="container__title" title="Bet and You">
        <LogoIcon />
      </h1>

      <div className="reel__image">
        <div className="reel__image-wrapper">
          <img className="reel__image--base" alt="background" src={reelBase} />

          <ReelItems items={currentItems} isSpinning={isSpinning} />

          <div className="reel__grid">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="reel__grid-cell"></div>
            ))}
          </div>

          <img className="reel__image--frame" alt="frame" src={reelFrame} />
        </div>

        <button type="button" className="reel__button" onClick={handleSpin}>
          <SpinItem />
        </button>
      </div>

      {showModal && winData && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal__content">
              <h1 className="container__title" title="Bet and You">
                <LogoIcon />
              </h1>
              <h2 className="modal__title">YOU WIN!</h2>
              <p className="modal__prize">{winData.prize}</p>
              <p className="modal__desc">DEPOSIT BONUS</p>
            </div>

            <button
              type="button"
              className="modal__button"
              onClick={() => setShowModal(false)}
            >
              <img
                src={btn}
                className="modal__button--decoration"
                alt="decoration"
              />
              CLAIM NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
