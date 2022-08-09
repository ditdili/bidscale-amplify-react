import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Container, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar'
import AlertExample from './features/AlertExample'
import AlertManager, {
  listAlerts,
  useAlertReducer,
} from './features/AlertManager'
import { useEffect, useRef } from 'react'
import { API } from 'aws-amplify'
import { onCreateAlarmNotification } from './graphql/subscriptions'

function App({ signOut }) {
  const dispatch = useDispatch()
  const ref = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      dispatch(listAlerts())
    }
  }, [dispatch])

  useEffect(() => {
    API.graphql({
      query: onCreateAlarmNotification,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }).subscribe({
      next: result => {
        dispatch(
          useAlertReducer.actions.listUpdate(
            result.value.data.onCreateAlarmNotification,
          ),
        )
      },
    })
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
