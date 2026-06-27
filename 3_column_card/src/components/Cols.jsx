import React from "react";
import LearnMore from "./LearnMore";

const Cols = ({ id, icon, type, use }) => {
  return (
    <div
      key={id}
      className={`flex flex-col items-start p-(--space-l) gap-(--space-m) lg:justify-around ${type === "SEDANS" ? "bg-(--gold)" : type === "SUVS" ? "bg-(--cyan)" : "bg-(--green)"}`}
    >
      <img src={icon} alt="sedan-icon" width={70} height={70} />
      <h1>{type}</h1>
      <p>{use}</p>
      <LearnMore
        className={`${type === "SEDANS" ? "text-(--gold) hover:bg-(--gold) hover:text-(--gray) border border-(--gray) transition-all duration-150" : type === "SUVS" ? "text-(--cyan) hover:bg-(--cyan) hover:text-(--gray) border border-(--gray) transition-all duration-150" : "text-(--green) hover:bg-(--green) hover:text-(--gray) border border-(--gray)transition-all duration-150"}`}
      />
    </div>
  );
};

export default Cols;
