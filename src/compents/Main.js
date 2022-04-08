import { useState } from "react"
import { Footer } from "./Footer"
import { RouterApp } from "./RouterApp"
import { UserContext } from "../context/UserContext"
export const Main = () => {
  const [user, setUser] = useState({})
  return (
    <>
        <UserContext.Provider value={{
          user,
          setUser
        }}> 
          
          <RouterApp/>
        
        </UserContext.Provider>
        <Footer/>
    </>
  )
}
