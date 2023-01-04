import { useState} from 'react';
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector} from '../../../../app/hooks';
import { useClipboard } from 'use-clipboard-copy';
import { setSearch } from '../../../../reducers/filterReducer';
import './Search.scss';


const Search = () => {
  const input = document.querySelector('input') as HTMLInputElement;
  const clipboard = useClipboard();
  const dispatch = useAppDispatch();

  const {search} = useAppSelector((state) => state.filters)

  const [buttonState, setButtonState] = useState('Copy filtres');
  const [searchParams, setSearchParams] = useSearchParams();

  const copy = () =>{
    clipboard.copy(window.location.href);
    setButtonState('Copied');
    setTimeout(()=>setButtonState('Copy filtres'),1000)
  }
  
  const clearFiltres = () => {
    if(localStorage.getItem('filtersForSearch'))localStorage.removeItem('filtersForSearch');
    if(localStorage.getItem('filtersForbrand'))localStorage.removeItem('filtersForbrand');
    if(localStorage.getItem('filtersForprice'))localStorage.removeItem('filtersForprice');
    if(localStorage.getItem('filtersForhuman'))localStorage.removeItem('filtersForhuman');
    if(localStorage.getItem('filtersForcategory'))localStorage.removeItem('filtersForcategory');
    if(localStorage.getItem('filtersForrating'))localStorage.removeItem('filtersForrating');
    setSearchParams('');
    window.location.reload();
  }

  const setParams = (event : React.ChangeEvent<HTMLInputElement>) =>{
    const params = searchParams;
    params.set('search' , input.value);
    setSearchParams(params);
    localStorage.setItem('filtersForSearch' , input.value);

    dispatch(setSearch(input.value));
  }
  
  return (
    <div className="filtres__search search">
      <div className="search__buttons">
        <button className="search__button" onClick={copy}>{buttonState}</button>
        <button className="search__button" onClick={clearFiltres}>Reset filtres</button>
      </div>
      <input type="search" 
            onChange={setParams} 
            placeholder='Search...'  
            className="search__input" 
            value={search}
      />
    </div>
  )
}

export default Search