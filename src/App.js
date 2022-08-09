import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Container, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import AlertExample from './features/AlertExample'
import AlertManager, { listAlerts } from './features/AlertManager'
import { useEffect, useRef } from 'react'

function App({ signOut }) {
  const dispatch = useDispatch()
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      dispatch(listAlerts())
    }
  }, [dispatch])

  return (
    <Container maxWidth="md">
      <Navbar signOut={signOut} />

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={7}>
          <AlertExample />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <AlertManager />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withAuthenticator(App)
