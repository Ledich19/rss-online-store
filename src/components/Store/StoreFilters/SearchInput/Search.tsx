import React , {useState} from 'react';
import './Search.scss'
import { useClipboard } from 'use-clipboard-copy';


const Search = () => {
  const clipboard = useClipboard();
  const [buttonState, setButtonState] = useState('Copy filtres');

  const copy = () =>{
    clipboard.copy(window.location.href);
    setButtonState('Copied');
    setTimeout(()=>setButtonState('Copy filtres'),1000)
  }
  
  return (
    <div className="filtres__search search">
      <div className="search__buttons">
        <button className="search__button" onClick={copy}>{buttonState}</button>
        <button className="search__button">Reset filtres</button>
      </div>
      <input type="search" placeholder='Search...'  className="search__input" />
    </div>
  )
}

export default Search