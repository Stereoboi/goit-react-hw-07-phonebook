import PropTypes from 'prop-types';
import { Button, ListItem } from '../ContactList/ContactList.styled'
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ListItem >
    <span>{contact.name}:</span><span>{contact.phone}</span>
      <Button
      type="button"
      onClick={handleDelete}
      >
      <BsTrash size="20" />
      </Button>
  </ListItem>
  )
}


ContactListItem.propTypes = {
  contact: PropTypes.object,
}
  





