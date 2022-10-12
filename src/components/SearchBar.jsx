'use strict';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function SearchBar(props) {
  const { action } = props.action
  return (
    <div className="input-container border-main-green">
      <input type="text" placeholder="Search" className="grow"></input>
      <button className="-m8" onClick={action}>
        <FontAwesomeIcon color="white" icon={faSearch}></FontAwesomeIcon>
      </button>
      
    </div>
    
  )
}