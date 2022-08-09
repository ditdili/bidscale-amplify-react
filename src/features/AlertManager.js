import { Box, Typography } from '@mui/material'
import { createSlice, nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import AlertComponent from '../components/AlertComponent'

const initialState = {
  alerts: [],
}

export const useAlertReducer = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    alertAdd: {
      reducer(state, action) {
        state.alerts.push(action.payload)
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: values.id.length === 0 ? nanoid() : values.id,
          },
        }
      },
    },
    alertDelete: {
      reducer: (state, action) => {
        const newAlerts = state.alerts.filter(
          item => action.payload !== item.id,
        )
        state.alerts = newAlerts
      },
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
