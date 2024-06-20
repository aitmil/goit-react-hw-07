import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import { selectNameFilter } from "../../redux/selectors.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };

  return (
    <div className={css.box}>
      <label htmlFor={id} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={id}
        value={filter}
        onChange={handleFilter}
        className={css.input}
      ></input>
    </div>
  );
}
