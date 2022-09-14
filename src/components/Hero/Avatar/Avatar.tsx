import clsx from 'clsx'
import React from 'react'

import avatarImage from "./danishan-profile.png";
export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        className,
       
        "mx-auto flex justify-center w-48 lg:w-56"
      )}
    >
      <img alt="Profile avatar" src={avatarImage} />
    </div>
  );
}

export default Avatar
