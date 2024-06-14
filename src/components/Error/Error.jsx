import { GiTerror } from "react-icons/gi";
import { IoReload } from "react-icons/io5";
import css from "./Error.module.css";

export default function Loader() {
  return (
    <div className={css.errorBox}>
      <GiTerror />
      <div className={css.error}>
        <p className={css.text}>
          Ooops...Something went wrong! Try to reload this page
        </p>
        <IoReload />
      </div>
    </div>
  );
}
