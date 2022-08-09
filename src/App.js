import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App({ signOut, user }) {
  console.log(user)
  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default withAuthenticator(App)
