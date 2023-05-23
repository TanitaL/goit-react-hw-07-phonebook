import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContactsItems, getFilterValue } from "../../redux/slice";
import { getContacts } from '../../redux/operations';
import ContactItem from "components/ContactItem/ContactItem";
import css from "./ContactList.module.css";


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactsItems)
    const filter = useSelector(getFilterValue);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);
    
    const filteredContacts = () => {
        const normalizeFilter = filter.toLowerCase();

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizeFilter)
        );
    };
    
    const visibleContacts = filteredContacts();

    return (
        <ul className={css.contactList}>
            {visibleContacts.length !== 0 ? (visibleContacts.map(({ id, name, number }) => {
                return (
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        id={id}
                    />
                )
            })
            ) : (
                    <li className={css.noContact}>No contacts</li>
                )
            } 
        </ul>
    )
};

export default ContactList;