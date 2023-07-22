import { useEffect } from "react"
import Book from './book/Book'

import './BookList.scss'

const BookList = ({ books }) => {
  return (
    <div className='book-list-container'>
      {books.map((book, index) =>
        <Book
          key={index}
          book={book} />)}
    </div>
  )
}

export default BookList