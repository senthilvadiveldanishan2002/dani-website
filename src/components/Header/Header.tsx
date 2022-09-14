import clsx from 'clsx'
import LanguageSwitch from './LanguageSwitch'
import ThemeSwitch from './ThemeSwitch'
export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'text-red-700' ,"flex justify-between","py-5")}>
     <ThemeSwitch />
      <LanguageSwitch />
      
    </div>
  );
}

export default Header







