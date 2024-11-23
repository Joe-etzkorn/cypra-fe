import { httpMethod } from "@utils/api"

async function login(data: { email: string; password: string }) {
  const response = await httpMethod.POST({
    url: "/auth/login",
    data: data,
  })

  return response
}

export const AuthService = {
  login,
}
