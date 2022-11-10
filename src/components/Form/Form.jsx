import { Label, Input, Button, FormWrapper } from "./Form.styled";
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts} from "redux/selectors";
export const FormContact = () => {

  const initialValues = {
    name: '',
    phone: '',
  }

  const contacts = useSelector(getContacts);
  

  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
  if (contacts.some(el => el.name.toLowerCase() === values.name.toLowerCase())) {
    alert("this contact are alredy in your phonebook")
    return
  }
    dispatch(addContact(values))
    resetForm();
  }
  
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().min(6).required(),
  })
 
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrapper  >
            <Label>
              Name
                <Input
                  type="text"
                  name="name"
                />
                <ErrorMessage name="name" />
                
            </Label>
            <Label>
              Phone
                <Input
                  type="text"
                  name="phone"
                />
                <ErrorMessage name="phone" />
            </Label>
            <Button type='submit'>Add contact</Button>
          </FormWrapper>
        </Formik>
    )
  }



