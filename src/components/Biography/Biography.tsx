import clsx from 'clsx'
import React from 'react'

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  
  return (
    <div
      className={clsx(
        className,
        "flex justify-center",
        " bg-white-900",
        "flex container my-8 mx-auto p-28 max-w-lg",
        "border-solid border-1 border-black-900",
        "shadow-2xl",
        "w-66 h-98 bg-sky-400",
        "rounded-md",
        "w-80",
        "mx-auto",
        "p-2"
      )}
    >
      <span>
        My name danishan, Iam studying in UKI codding college.
        <br />I love to play  Cricket & Volley ball
        <br />
        I have completed my intermediate education in my home town kilinochchi
      </span>
    </div>
  );
}

export default Biography
