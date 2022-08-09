import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

const FormSelect = ({ formik, options, label, value }) => {
  const handleSelectChange = event => {
    formik.setFieldValue('alertType', event.target.value)
  }

  return (
    <FormControl
      fullWidth
      error={formik.touched[value] && Boolean(formik.errors[value])}
    >
      <InputLabel id="mui-select-label">{label}</InputLabel>
      <Select
        labelId="mui-select"
        id="mui-select"
        value={formik.values[value]}
        label={label}
        name={value}
        onChange={handleSelectChange}
      >
        {options.map(option => {
          return (
            <MenuItem key={option.id} value={option.value}>
              {option.value}
            </MenuItem>
          )
        })}
      </Select>
      {formik.touched[value] && (
        <FormHelperText>{formik.errors[value]}</FormHelperText>
      )}
    </FormControl>
  )
}

export default FormSelect
