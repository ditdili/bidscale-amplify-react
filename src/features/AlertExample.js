import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import AlertForm from '../components/AlertForm'
import { validationSchema } from '../utils/inputValidationSchema'
import { useAlertReducer } from './AlertManager'

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
      dispatch(useAlertReducer.actions.alertAdd(values))
      resetForm()
    },
  })

  return <AlertForm formik={formik} />
}

export default AlertExample
