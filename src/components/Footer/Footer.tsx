import clsx from 'clsx'
import React from 'react'


import SocialMedia from "./SocialMedia/SocialMedia";
import Yarlithublogo from"./Yarlithublogo/Yarlithublogo"
import Ukilogo from "./Ukilogo/Ukilogo";
import UkiAddress from "./UkiAddress/UkiAddress";

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
 return (
   <div
     className={clsx(
       className,
       "bg-yellow-300",
       "flex flex-nowrap justify-between",
       "py-7"
     )}
   >
     <div className="flex">
       <Yarlithublogo />
    
       <Ukilogo />
       <UkiAddress />
     </div>
     <SocialMedia />
   </div>
 );
}


export default Footer
