import './SortBy.scss';
import { setSortDirection, setSortBy } from '../../../../reducers/filterReducer';
import { useState} from 'react';
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector} from '../../../../app/hooks';

const SortBy = () => {
  const {sortBy} = useAppSelector((state) => state.filters);
  const {isSortDESC} = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('options')
  const showValue = (e : React.ChangeEvent<HTMLSelectElement>) =>{
    setValue(e.target.value);
    if(e.target.value === 'priceASC'){
      dispatch(setSortBy('price'));
      dispatch(setSortDirection(true));
    } else if (e.target.value === 'priceDESC'){
      dispatch(setSortBy('price'));
      dispatch(setSortDirection(false));
    } else if (e.target.value === 'ratingASC'){
      dispatch(setSortBy('rating'));
      dispatch(setSortDirection(true));
    } else if (e.target.value === 'ratingDESC'){
      dispatch(setSortBy('rating'));
      dispatch(setSortDirection(false));
    }
  }
  const values = { sortBy : sortBy, sortDirection: isSortDESC};
  localStorage.setItem('sortOptions', JSON.stringify(values));
  return (
    <div className='filters__sort sort'>
      <select defaultValue={value} name="sort" id="sort" className='sort__select' onChange={showValue}>
        <option value="options" className="sort__option" disabled >Sort options</option>
        <option value="priceASC" className="sort__option">Sort by price ASC</option>
        <option value="priceDESC" className="sort__option">Sort by price DESC</option>
        <option value="ratingASC" className="sort__option">Sort by rating ASC</option>
        <option value="ratingDESC" className="sort__option">Sort by rating DESC</option>
      </select>
    </div>
  )
}

export default SortBy