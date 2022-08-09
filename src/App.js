import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Container, Grid } from '@mui/material'
import Navbar from './components/Navbar'
import AlertExample from './features/AlertExample'
import AlertManager from './features/AlertManager'

function App({ signOut }) {
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
