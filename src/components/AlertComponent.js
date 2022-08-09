import { useTimer } from 'react-timer-hook'
import { Alert, Link } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useAlertReducer } from '../features/AlertManager'
import Typography from '@mui/material/Typography'
import LinearProgressBar from './LinearProgressBar'

const AlertComponent = ({ alert }) => {
  const dispatch = useDispatch()

  const { id, alertTitle, alertType, link, text, timeLimit } = alert

  const time = new Date()
  time.setSeconds(time.getSeconds() + timeLimit)

  const { pause, resume, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      dispatch(useAlertReducer.actions.alertDelete(id))
    },
  })

  return (
    <>
      <Alert
        key={id}
        severity={alertType}
        onMouseOver={pause}
        onMouseOut={resume}
        sx={{ mt: 1 }}
      >
        {alertTitle && (
          <Typography sx={{ fontSize: 14 }} variant="h5" component="div">
            {alertTitle}
          </Typography>
        )}
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          {text}
        </Typography>
        {link && (
          <Link
            href={link}
            sx={{ fontSize: 12 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link}
          </Link>
        )}
      </Alert>
      <LinearProgressBar timeInterval={timeLimit} running={isRunning} />
    </>
  )
}

export default AlertComponent
