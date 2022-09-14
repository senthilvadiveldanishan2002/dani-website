import clsx from 'clsx'

import yarlItHubLogo from "./yarl-it-hub-logo.png";
export interface Props {
  className?: string
}

const Yarlithublogo = ({ className }: Props) => {
  return (
    <div className={clsx(className, "pl-64")}>
      <img alt="Yarl IT Hub Logo" src={yarlItHubLogo} className="h-24" />
    </div>
  );
}

export default Yarlithublogo
