import clsx from 'clsx'
import React from 'react'

import { ReactComponent as GithubLogo } from "./github-logo.svg";
import { ReactComponent as FacebookLogo } from "./facebook-logo.svg";
import { ReactComponent as InstagramLogo } from "./instagram.svg";

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, "flex gap-2 fill-current mr-7 my-5")}>
      <li className="w-8">
        <a href="https://www.github.com/senthilvadiveldanishan2002">
          <GithubLogo />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.facebook.com/senthilvadiveldanishan">
          <FacebookLogo />
        </a>
      </li>

      <li className="w-8">
        <a href="https://www.instagram.com/senthilvadiveldanishan">
          <InstagramLogo />
        </a>
      </li>

     
    </ul>
  );
  
}

export default SocialMedia
