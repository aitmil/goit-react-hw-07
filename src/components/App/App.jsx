import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { fetchContacts } from "../../redux/operations";
import { error, loading } from "../../redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ContactList />
    </div>
  );
}
