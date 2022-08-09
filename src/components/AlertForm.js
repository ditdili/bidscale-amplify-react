import { Box, Button } from '@mui/material'
import FormSelect from './FormSelect'
import TextInput from './TextInput'

const alertOptions = [
  { id: 1, value: 'error' },
  { id: 2, value: 'warning' },
  { id: 3, value: 'info' },
  { id: 4, value: 'success' },
]

const AlertForm = ({ formik }) => {
  return (
    <Box
      sx={{
        margin: '0px auto',
        maxWidth: 'sm',
        mt: 2,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormSelect
          formik={formik}
          options={alertOptions}
          label="Alert Type"
          value="alertType"
        />
        <TextInput formik={formik} label="Alert Title" value="alertTitle" />
        <TextInput
          formik={formik}
          label="Time Limit"
          value="timeLimit"
          type="number"
        />
        <TextInput formik={formik} label="Text" value="text" />
        <TextInput formik={formik} label="Link" value="link" />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 1,
            pr: 0,
          }}
        >
          <Button variant="outlined" onClick={formik.handleReset}>
            Clear
          </Button>
          <Button sx={{ ml: 1 }} variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default AlertForm
