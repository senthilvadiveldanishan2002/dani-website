import clsx from 'clsx'

export interface Props {
  className?: string
}

const UkiAddress = ({ className }: Props) => {
  return (
    <div className={clsx(className, "ml-10")}>
      <div>Uki Coding School - Kilinochchi Center</div>
      <div>423 Thirunagar Rd</div>
      <div>Class of 2022</div>
    </div>
  );
}

export default UkiAddress
