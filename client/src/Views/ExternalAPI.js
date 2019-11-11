import React from "react";

import { useAuth0 } from "../react-auth0-spa";

const ExternalApi = () => {
  const [showResult, setShowResult] = React.useState(false);
  const [apiMessage, setApiMessage] = React.useState("");
  const { getTokenSilently, getIdTokenClaims } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      // response is not valid or returns nothing
      const response = await fetch("/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response)

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi}>Ping API</button>
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi