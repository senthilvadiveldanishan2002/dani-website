import clsx from 'clsx'
import React from 'react'

export interface Props {
  className?: string
}

const LanguageSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>LanguageSwitch</span>
    </div>
  );
};

export default LanguageSwitch;
