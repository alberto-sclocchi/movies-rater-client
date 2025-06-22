import React, { useContext, useEffect } from 'react'
import AuthContext from '../auth/context/AuthContext.context'

export default function HomePage() {
  const { user, errorMessage, setErrorMessage} = useContext(AuthContext);

  useEffect(() => {
    setErrorMessage((prevState) => !!prevState ? null : prevState);
  }, [])
  
  return (
    <div>
      <h3>HomePage</h3>
      {!!errorMessage && errorMessage}
    </div>
  )
}
