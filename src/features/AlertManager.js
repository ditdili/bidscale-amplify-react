import { createSlice, nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

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
  },
})

export const selectAllAlerts = state => state.alerts.alerts

const AlertManager = () => {
  const alerts = useSelector(selectAllAlerts)
  console.log(alerts)

  return <div>AlertManager</div>
}

export default AlertManager
