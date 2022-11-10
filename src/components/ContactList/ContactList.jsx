import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { selectVisibleContacts,  } from "redux/selectors";


export const ContactList = () => {

  const contacts = useSelector(selectVisibleContacts);


  return (
      <List >  
        {contacts.map(contact => (
          <ContactListItem
          contact={contact}  
          key={contact.id}
        />
        ))}
    </List>
    )
}

