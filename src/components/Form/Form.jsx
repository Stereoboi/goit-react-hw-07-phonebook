import { Label, Input, Button, FormWrapper } from "./Form.styled";
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { addContact } from "redux/contactsSlice";
export const FormContact = () => {

  const initialValues = {
    name: '',
    number: '',
  }

  const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
    resetForm();
  }
  
    const schema = yup.object().shape({
      name: yup.string().required(),
      number: yup.string().min(6).required(),
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
              Number
                <Input
                  type="text"
                  name="number"
                />
                <ErrorMessage name="number" />
            </Label>
            <Button type='submit'>Add contact</Button>
          </FormWrapper>
        </Formik>
    )
  }



