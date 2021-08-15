import React, {useState,useContext}from 'react';
import {API, graphqlOperation } from "aws-amplify";
import {deleteBook } from '../api/mutations';
import { BookContext } from '../context/books';
function Itemdelete() {
    const [dbook, setdbook] = useState();

    const { books } = useContext(BookContext);
    const removebook = async id => {
        debugger
        try {
          const input = { id };
          const result = await API.graphql(graphqlOperation(deleteBook, {
              input:dbook
            })
          );
          const deletedTodoId = result.data.deleteBook.id;
          const updatedBook = books.filter(book => book.key !== deletedTodoId);
          setdbook(updatedBook);
        } catch (err) {
          console.log("error in deleting",err);
        }
      };


    return (
        <div>
            <section className="books">
            {books.map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                      <button onClick={() => removebook(books.id)}>X</button>
                    </div>
                    {/* <Link to={`books/${id}`} className="btn book-link">details</Link> */}
                </article>
            ))}
        </section>

       </div>
    )
}

export default Itemdelete
