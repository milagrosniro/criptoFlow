import { IErrorMsgProps } from "./errorMsg.types"

const ErrorMsg = ({children}:IErrorMsgProps) => {
  return (
    <p className=" text-center my-4 bg-red-600 text-white font-bold uppercase text-sm">

      {children}
    </p>
  )
}

export default ErrorMsg