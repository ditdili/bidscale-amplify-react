import { useFormik } from 'formik'
import AlertForm from '../components/AlertForm'
import { validationSchema } from '../utils/inputValidationSchema'
import { useDispatch } from 'react-redux'
import { addAlert } from './AlertManager'

const AlertExample = () => {
  const dispatch = useDispatch()

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
    onSubmit: (values, { resetForm }) => {
      dispatch(addAlert(values))
      resetForm()
    },
  })

  return <AlertForm formik={formik} />
}

export default AlertExample
