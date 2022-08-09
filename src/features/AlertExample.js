import { useFormik } from 'formik'
import AlertForm from '../components/AlertForm'
import { validationSchema } from '../utils/inputValidationSchema'

const AlertExample = () => {
  const formik = useFormik({
    initialValues: {
      id: '',
      timeLimit: 10,
      text: '',
      link: '',
      alertType: '',
      alertTitle: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values)
    },
  })

  return <AlertForm formik={formik} />
}

export default AlertExample
