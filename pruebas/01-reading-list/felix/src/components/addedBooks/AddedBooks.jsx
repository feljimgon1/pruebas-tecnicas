import './AddedBooks.scss'

const AddedBooks = ({ books }) => {
  return (
    <div className='added-books-container'>
      <div className="title">
        <h1>Lista de lectura</h1>
      </div>
      <div className="added-books">
        {books.map((book, index) =>
          <div className="cover-container" key={index}>
            <img
              src={book.book.cover}
              alt='book-cover' />
          </div>
        )}
      </div>
    </div>
  )
}

export default AddedBooks