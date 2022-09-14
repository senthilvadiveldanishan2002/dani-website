import clsx from "clsx";
import React from "react";

export interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        "font-accent font-bold text-5xl md:text-6xl lg:text-7xl",
        "max-w-md",
        "flex justify-center","mx-auto",

        "-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10",
        "drop-shadow-2xl"
      )}
    >
      Danishan{" "}
    </div>
  );
};

export default Title;
