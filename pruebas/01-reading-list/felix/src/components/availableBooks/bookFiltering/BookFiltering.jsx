import './BookFiltering.scss'
import GenreFilter from './genreFilter/GenreFilter'

const BookFiltering = () => {
  return (
    <div className='book-filtering'>
      <div className='filter-pages'>
        <h2>Filtrar por páginas</h2>
        <input
          type='range'
          min='1'
          max='100'
          defaultValue='50'
          className='slider' />
      </div>
      <div className='filter-genre'>
        <h2>Filtrar por género</h2>
        <GenreFilter />
      </div>
    </div>
  )
}

export default BookFiltering