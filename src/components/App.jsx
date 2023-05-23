import { React } from "react";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Filter from "./Filter/Filter.jsx";
import css from "./App.module.css";


const App = () => {
  return (
    <div className={css.section}>
      <h1 className={css.sectionTitle}>Phonebook</h1>
      <ContactForm/>

      <h2 className={css.sectionTitle}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  )
}

export default App;