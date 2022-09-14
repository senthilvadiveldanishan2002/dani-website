import clsx from 'clsx'
import Typed from "react-typed";

export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className, "px-2")}>
      <Typed
        className="flex justify-center text-2xl font-semibold"
        strings={["Hardware developer", "Explorer", "Cricket player "]}
        typeSpeed={30}
        loop
      />
    </div>
  );
}

export default Subtitle
