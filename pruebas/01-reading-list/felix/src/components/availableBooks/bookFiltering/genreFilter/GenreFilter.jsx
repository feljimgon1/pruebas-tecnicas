import { useState } from 'react'
import arrowDown from '../../../../assets/down-arrow.svg'
import './GenreFilter.scss'

const GenreFilter = ({books}) => {

  var genres = [...new Set(books.map((book)=>{
    return book.book.genre
  }))]

  const [displaySelectionMenu, setDisplaySelectionMenu] = useState(false)

  const handleToggleMenu = () => {
    setDisplaySelectionMenu(!displaySelectionMenu)
  }

  return (
    <div className="genre-filter-container">
      <div className='genre-filter-selector' onClick={handleToggleMenu}>
        <div className='current-value'>test</div>
        <div className='dropdown'>
          <img
            src={arrowDown}
            alt='dropdown-arrow' />
        </div>
      </div>
      <div className={`selection-menu ${displaySelectionMenu ? 'open' : 'closed'}`}>
        {genres.map((genre, index)=>
          <div key={index} 
          className="selection-item"
          >{genre}</div>)}
      </div>
    </div>
  )
}

export default GenreFilter