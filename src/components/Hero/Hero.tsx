import clsx from 'clsx'
import React from 'react'


import Avatar from "./Avatar/Avatar"
import Subtitle from './Subtitle/Subtitle'
import Title from "./Title/Title"
export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex flex-col ')}>
      <Avatar />
      <Title />
      <Subtitle/>
    </div>
  );
}

export default Hero
