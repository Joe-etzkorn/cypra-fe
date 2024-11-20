import { Button } from "antd"
import FieldItem from "./field-item"

const APIIntegration = () => {
  return (
    <div className="px-6 pt-16 pb-4 flex flex-col justify-between h-full">
      <div className="h-full">
        <FieldItem label="Client ID" value="fasdf dsfasdfs " />
        <FieldItem label="Secret" value="••••••••••" />
      </div>
      <div className="flex justify-end gap-4 px-2 md:px-6">
        <Button className="!bg-[#F4F6F6]">Update Credentials</Button>
      </div>
    </div>
  )
}

export default APIIntegration
