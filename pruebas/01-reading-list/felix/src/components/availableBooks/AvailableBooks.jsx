import { useState } from 'react'
import BookFiltering from './bookFiltering/BookFiltering'
import BookList from './bookList/BookList'
import './AvailableBooks.scss'

const AvailableBooks = ({ books }) => {
  
  const [numBooks, setNumBooks] = useState(books.length)
  
  return (
    <div className='available-books-container'>
      <div className="title">
        <h1>{numBooks} libros disponibles</h1>
      </div>
      <BookFiltering />
      <BookList books={books} />
    </div>
  )
}

export default AvailableBooks