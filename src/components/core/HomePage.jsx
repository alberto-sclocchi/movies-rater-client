import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/context/AuthContext.context'

export default function HomePage() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log("User", user);
  })
  
  return (
    <div>HomePage</div>
  )
}
