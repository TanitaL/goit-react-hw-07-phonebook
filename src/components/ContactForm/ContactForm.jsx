import { React} from "react";
import { useAddContact } from "hooks/useAddContact";
import css from "./ContactForm.module.css";


const ContactForm = () => {
    const { name, number, formSubmitHandler, handleChangeInput } = useAddContact();

    return (
        <form onSubmit={formSubmitHandler} className={css.form}>
            <label className={css.formLabel}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    className={css.formInput}
                />
            </label>
            <label className={css.formLabel}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChangeInput}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    className={css.formInput}
                />
            </label>
                
            <button type="submit" className={css.formButton}>Add contact</button>
        </form>
    )
}

export default ContactForm;
