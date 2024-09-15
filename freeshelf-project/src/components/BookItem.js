import React, { useState } from 'react'

export const BookItem = (props) => {
  const { book } = props
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  return (
    <div className='book'>
      <div className='bookInfo'>
        <div className='book-words'>
          <div className='title'>
            {book.title && <h2> {book.title} </h2>}
          </div>
          <div className='author'>
            {book.author && <h3>Author: {book.author}</h3>}
          </div>
          <div className='description'>
            {book.shortDescription && <p>{book.shortDescription}</p>}
          </div>
        </div>
        <button className='button' onClick={() => setShowMoreInfo(!showMoreInfo)}>
          Show {showMoreInfo ? 'Less' : 'More'} information
        </button>
        {showMoreInfo && (
          <div className='extraInfo'>
            <div className='url'> <a href={book.url}>Visit the book site</a> </div>
            <div className='publisher'>
              {book.publisher && <h5>Publisher: {book.publisher}</h5>}
            </div>
            <div className='publicationDate'>
              {book.publicationDate && <h5>Publication Date: {book.publicationDate}</h5>}
            </div>
            <div className='detailedDescription'>
              {book.detailedDescription && <p>{book.detailedDescription}</p>}
            </div>
          </div>
        )}
      </div>
      <div className='book-picture'>
        {book.coverImageUrl && <img className='coverUrl' src={book.coverImageUrl} alt='book cover' width='150' />}
      </div>
    </div>
  )
}
