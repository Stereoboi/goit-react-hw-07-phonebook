import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { getContacts, getStatusFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filter) => {
  if (filter.status === "") {

    return contacts
  }
  if (filter.status !== "") {
     return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.status.toLowerCase())
  );
  }
}


export const ContactList = () => {

  const contacts = useSelector(getContacts);

  const filter = useSelector(getStatusFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
      <List >  
        {visibleContacts.map(contact => (
          <ContactListItem
          contact={contact}  
          key={contact.id}
        />
        ))}
    </List>
    )
}

