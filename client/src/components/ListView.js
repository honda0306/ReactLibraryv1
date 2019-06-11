import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const ListView = props => {
    return (
        <div>
            {props.books.map(book => (
                <Link to={`/${book.title}`} key={book.title}>
                    <Card onClick={() => props.selectBook(book.title)}>
                        <h4>Title: {book.title}</h4>
                        <h4>Author: {book.author}</h4>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

export default ListView;