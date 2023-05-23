import {useDispatch, useSelector} from "react-redux";
import { getFilterValue, filteredContacts } from "redux/slice";
import css from "./Filter.module.css";


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleChangeFilter = event => {
    dispatch(filteredContacts(event.currentTarget.value));
  };

  return (<div className={css.filter}>
      <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Enter search name"
        onChange={handleChangeFilter}
        value={filter}
        className={css.filterInput}
      />
      </label>
    </div>)
}


export default Filter;