import React from 'react'
import './App.css'
import { books } from './books.js'
import { BookItem } from './components/BookItem'

function App () {
  return (
    <div className='App'>
      {books.map((book, key) =>
        <BookItem book={book} key={key} />
      )}
    </div>
  )
}

export default App
