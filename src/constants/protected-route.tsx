import { COOKIE_ITEM } from "@constants/common"
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get(COOKIE_ITEM.ACCESS_TOKEN)

  if (!token) {
    return <Navigate to={`/signin`} replace />
  }

  return children
}

export default ProtectedRoute
