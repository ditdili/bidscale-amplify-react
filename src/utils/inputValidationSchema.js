import * as yup from 'yup'

export const validationSchema = yup.object({
  timeLimit: yup.number().required('Time limit is required'),
  text: yup.string().required('Text is required'),
  link: yup.string(),
  alertType: yup.string().required('Text is required'),
  alertTitle: yup.string(),
})
