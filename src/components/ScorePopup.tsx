import React, { useEffect, useState } from "react";
import { ScorePopupProps } from "../types/ScorePopupProps";

const ScorePopup: React.FC<ScorePopupProps> = ({ score, top, left }) => {
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (score === 0) {
      setIsGameOver(true);
    }
  }, [score]);

  const color = score > 0 ? "green" : "red";
  const scoreStyle: React.CSSProperties = {
    position: "absolute",
    top,
    left,
    color,
    opacity: 1,
    transition: "opacity 4s ease-out, top 4s ease-out",
    fontFamily: '"Press Start 2P", cursive',
  };

  return (
    <div>
      <div
        style={scoreStyle}
        className={`score-popup ${score > 0 ? "positive" : "negative"}`}
      >
        {score > 0 ? `+${score}` : score}
      </div>
      {isGameOver && (
        <div style={{ ...scoreStyle, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2em' }}>
          Game Over
        </div>
      )}
    </div>
  );
};

export default ScorePopup;
