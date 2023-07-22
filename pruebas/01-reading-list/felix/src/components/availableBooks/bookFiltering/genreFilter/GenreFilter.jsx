import arrowDown from '../../../../assets/down-arrow.svg'
import './GenreFilter.scss'

const GenreFilter = () => {
  return (
    <div className="genre-filter-container">
      <div className='genre-filter-selector'>
        <div className='current-value'>test</div>
        <div className='dropdown'>
          <img src={arrowDown} alt='dropdown-arrow' />
        </div>
      </div>
      <div className='selection-menu'>
        <div className="test">item</div>
        <div className="test">item</div>
        <div className="test">item</div>
        <div className="test">item</div>
        <div className="test">item</div>
        <div className="test">item</div>
        <div className="test">item</div>
      </div>
    </div>
  )
}

export default GenreFilter