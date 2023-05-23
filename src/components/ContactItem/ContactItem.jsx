import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import PropTypes from 'prop-types';
import css from "./ContactItem.module.css";

const ContactItem = ({ name, id, number }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <li className={css.contactsItem}>
            <p className={css.contactsName}>{name}:</p> 
            <p className={css.contactsNumber}>{number}</p> 
            <button type="button" onClick={() => handleDeleteContact(id)} className={css.contactsBtn}>Delete</button>
        </li>)
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactItem;