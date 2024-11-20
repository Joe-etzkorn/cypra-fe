import { cn } from "@utils/cn"

const FieldItem = ({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) => {
  return (
    <div className={cn("py-2", className)}>
      <div className="text-sm">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  )
}

export default FieldItem
