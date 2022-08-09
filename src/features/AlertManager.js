import { Box, Typography } from '@mui/material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from 'aws-amplify'
import { useSelector } from 'react-redux'
import AlertComponent from '../components/AlertComponent'
import { createAlarmNotification } from '../graphql/mutations'
import { listAlarmNotifications } from '../graphql/queries'

const initialState = {
  alerts: [],
}

export const addAlert = createAsyncThunk('mutation/addAlert', async values => {
  const { id, ...rest } = values

  var t = new Date()
  t.setSeconds(t.getSeconds() + rest.timeLimit)

  const response = await API.graphql({
    query: createAlarmNotification,
    variables: { input: { ...rest, timeLimitDateTime: t.toISOString() } },
    authMode: 'AMAZON_COGNITO_USER_POOLS',
  })

  return response
})

export const listAlerts = createAsyncThunk('query/getAlerts', async () => {
  const date = new Date()

  const response = await API.graphql({
    query: listAlarmNotifications,
    variables: {
      filter: {
        timeLimitDateTime: { ge: date.toISOString() },
      },
    },
    authMode: 'AMAZON_COGNITO_USER_POOLS',
  })

  return response
})

// Alerts Slice
export const useAlertReducer = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    alertDelete: {
      reducer: (state, action) => {
        const newAlerts = state.alerts.filter(
          item => action.payload !== item.id,
        )
        state.alerts = newAlerts
      },
    },
  },
  extraReducers: {
    [addAlert.fulfilled]: (state, action) => {
      state.alerts.push(action.payload.data.createAlarmNotification)
    },
    [addAlert.rejected]: (state, action) => {
      console.log('Could not add data')
    },
    [listAlerts.fulfilled]: (state, action) => {
      const currentDate = new Date()

      const { items } = action.payload.data.listAlarmNotifications

      const modified = items.map(item => {
        const newDate = new Date(item.timeLimitDateTime)
        const diff = (newDate.getTime() - currentDate.getTime()) / 1000

        return { ...item, timeLimit: diff }
      })

      state.alerts = modified
    },
    [listAlerts.rejected]: (state, action) => {
      console.log('Could not fetch data')
    },
  },
})

export const selectAllAlerts = state => state.alerts.alerts

const AlertManager = () => {
  const alerts = useSelector(selectAllAlerts)

  return (
    <Box sx={{ mt: 2 }}>
      {alerts.length ? (
        alerts.map(alert => {
          return <AlertComponent alert={alert} key={alert.id} />
        })
      ) : (
        <Typography color="text.secondary" variant="h5" align="center">
          Alerts
        </Typography>
      )}
    </Box>
  )
}

export default AlertManager
