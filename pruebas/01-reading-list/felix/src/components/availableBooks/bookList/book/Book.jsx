import './Book.scss'

const Book = ({ book }) => {
  return (
    <div className='book-container'>
      <img
        className='book'
        src={book.book.cover}
        alt='book-cover' />
    </div>
  )
}

export default Book