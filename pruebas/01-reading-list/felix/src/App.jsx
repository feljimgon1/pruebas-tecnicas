import './App.scss'
import AvailableBooks from './components/availableBooks/AvailableBooks'
import AddedBooks  from './components/addedBooks/AddedBooks'
import * as bookRepo from './assets/books.json'
import {useEffect} from 'react'

function App() {

  const books = bookRepo.library

  return (
    <div className='app-container'>
      <AvailableBooks books={books} className='available-books'/>
      <AddedBooks books={books}/>
    </div>
  )
}

export default App
