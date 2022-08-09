import { Box, LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'

const LinearProgressHolder = props => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  )
}

const LinearProgressBar = ({ timeInterval, running }) => {
  const [progress, setProgress] = useState(100 - 100 / timeInterval)

  useEffect(() => {
    const timer = setInterval(() => {
      if (running) {
        setProgress(prevProgress =>
          prevProgress >= 100
            ? 100 - 100 / timeInterval
            : prevProgress - 100 / timeInterval,
        )
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timeInterval, running])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressHolder value={progress} />
    </Box>
  )
}

export default LinearProgressBar
