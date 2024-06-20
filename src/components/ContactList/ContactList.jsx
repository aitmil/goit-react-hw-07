import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/selectors";
import { selectNameFilter } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) => {
    if ("id" in contact && "name" in contact && "number" in contact) {
      if (
        typeof contact.id === "string" &&
        typeof contact.name === "string" &&
        typeof contact.number === "string"
      ) {
        return contact.name.toLowerCase().includes(filters.toLowerCase());
      }
    }
    return false;
  });

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
