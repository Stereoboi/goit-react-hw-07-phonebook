import { FormContact } from "../Form/Form";
import { Filter } from "../Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Title } from "components/Title/Title";
import { Wrapper } from "./App.styled";

export const App = () => {

    return (
      <Wrapper>
        <Title title={'Phonebook' } />
        <FormContact />
        <Filter/>
        <Title title={'Contacts' }/>
        <ContactList/>
      </Wrapper>
    )
  }


