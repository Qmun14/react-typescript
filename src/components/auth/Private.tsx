import React from "react"
import { Login } from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
  isLoggedIn: boolean,
  component: React.ComponentType<ProfileProps>                //Todo : Jika Anda harus meneruskan component prop React.ComponentType yang komponen itu sendiri menerima props maka tentukan jenis prop tersebut dalam angelBracket<>
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Ma'mun" />
  } else {
    return <Login />
  }
}
