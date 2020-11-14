import React from 'react'
import { books } from './books.js'
import '../App.css'

export const BookPreview = () => {
  return (
    <div className='book-container'>
      {books.map((book, key) => {
        return (
          <div className='book' key={key}>
            <div className='book-words'>
              <h2 className='title'> {book.title} </h2>
              <div className='author'> {book.author} </div>
              <div className='description'> {book.shortDescription} </div>
            </div>
            <div className='extraInfo'>
              <div className='url'> {book.url} </div>
              <div className='publisher'> {book.publisher} </div>
              <div className='publicationDate'> {book.publicationDate} </div>
              <div className='detailedDescription'> {book.detailedDescription} </div>
            </div>
            <div className='book-picture'>
              <img className='coverUrl' src={book.coverImageUrl} alt='book cover' width='150' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

/*
export const BookDetail = () => {
  return (
    <div className='book-container'>
      {books.map((book, key) => {
        return (
          <div className='book' key={key}>
            <div className='extraInfo'>
              <div className='url'> {book.url} </div>
              <div className='publisher'> {book.publisher} </div>
              <div className='publicationDate'> {book.publicationDate} </div>
              <div className='detailedDescription'> {book.detailedDescription} </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import react usestate

const [showMoreInfo, setShowMoreInfo] = useState(false)
let showHideInfo = 'Show more information'
if (showMoreInfo) {
  showHideInfo = 'Hide more information'
}

<div className='button'>
              <button onClick={() => setShowMoreInfo(!showMoreInfo)}>
                {showHideInfo}
              </button>
            </div>
            */
