import { useSelector } from "react-redux";
import { ContactListItem } from "components/ContListItem/ContactListItem"
import { List } from "./ContactList.styled"
import { getContacts, getStatusFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filter) => {
  if (filter.status === "") {
    // console.log(contacts);
    // console.log(filter);
    return contacts.userContacts
  }
  if (filter.status !== "") {
     return contacts.userContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.status.toLowerCase())
  );
  }
}


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getStatusFilter);
  // console.log(filter);
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

