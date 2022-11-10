import { FormContact } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Title } from "components/Title/Title";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

    return (
      <Wrapper>
        <Title title={'Phonebook' } />
        <FormContact />
        <Filter/>
        <Title title={'Contacts'} />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList/>
      </Wrapper>
    )
  }


