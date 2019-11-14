import React from 'react'

import { useAuth0 } from '../react-auth0-spa'
import axios from 'axios'

const ExternalApi = () => {
  const [showResult, setShowResult] = React.useState(false)
  const [apiMessage, setApiMessage] = React.useState('')
  const { getTokenSilently, getIdTokenClaims, user } = useAuth0()

  const callApi = async () => {
    try {
      // const response = authenicatedGet('/api/external')
      const token = await getTokenSilently() 

      const response = await axios.get('/api/external', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const responseData = await response.json()

      setShowResult(true)
      setApiMessage(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  )
}

export default ExternalApi