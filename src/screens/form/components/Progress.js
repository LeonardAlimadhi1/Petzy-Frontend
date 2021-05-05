import React from "react";

const Progress = ({ sections, small, current, isDone }) => {
  const nr = sections.length;
  // const progress = `${current + 1}/${nr}`;
  const progress = isDone ? 100 : (current / nr) * 100;

  return (
    <div className={`progress-paws`}>
      <div style={{ width: `${progress}%` }}>
        <span className={progress === 0 && "initial"}>
          {Math.floor(progress) + "%"}
        </span>
      </div>
    </div>
  );
};

export default Progress;
