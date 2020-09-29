import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addBook } from './Actions/BookActions';


const App = (props) => {
  const [bookDetails, setBookDetails] = useState({
    bookId: '',
    bookName: '',
    bookAuthor: '',
    bookType: '',
    bookPurchaseYear: ''
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setBookDetails(bookDetails => ({ ...bookDetails, [name]: value }));
  }

  const addBook = () => {
    props.addBook(bookDetails);
    setBookDetails(bookDetails => ({
      bookId: '',
      bookName: '',
      bookAuthor: '',
      bookType: '',
      bookPurchaseYear: ''
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        WelCome To Library Management System
      </header>
      <div className="input-container">
        <div>Book Id</div>
        <div><input type="text" name="bookId" value={bookDetails.bookId} onChange={handleChange} /></div>
      </div>
      <div className="input-container">
        <div>Book Name</div>
        <div><input type="text" name="bookName" value={bookDetails.bookName} onChange={handleChange} /></div>
      </div>
      <div className="input-container">
        <div>Book Author</div>
        <div><input type="text" name="bookAuthor" value={bookDetails.bookAuthor} onChange={handleChange} /></div>
      </div>
      <div className="input-container">
        <div>Book Type</div>
        <div><input type="text" name="bookType" value={bookDetails.bookType} onChange={handleChange} /></div>
      </div>
      <div className="input-container">
        <div>Book Purchase Year</div>
        <div><input type="text" name="bookPurchaseYear" value={bookDetails.bookPurchaseYear} onChange={handleChange} /></div>
      </div>
      <div className='side-by-side'>
        <button onClick={addBook}>Add Book</button>
      </div>
      {props.books && props.books.length >0 &&
        <>
          <div className='table-heading'>Added list of Books are:</div>
          <div className="table-center">
            <table>
              <thead>
                <tr>
                  <th>Book Id</th>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Book Type</th>
                  <th>Book Purchase Year</th>
                </tr>
              </thead>
              <tbody>
                {props.books.map(book => {
                  return (<tr key={book.bookId}>
                    <td>{book.bookId}</td>
                    <td>{book.bookName}</td>
                    <td>{book.bookAuthor}</td>
                    <td>{book.bookType}</td>
                    <td>{book.bookPurchaseYear}</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: (bookDetails) => { dispatch(addBook(bookDetails)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
