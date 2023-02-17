const React = require('react');
const Layout = require('./Layout');
const AddBookForm = require('./AddBookForm');
const CardBook = require('./CardBook');

module.exports = function MyBooks({ books, user }) {
  return (
    <Layout user={user}>
      <h1>Мои книги</h1>
      <AddBookForm />
      <div id="allBooks">
      {books ? books.map((book) => <CardBook key={book.id} books={book} />).reverse() : <h3 id="noBookesAdded">Вы не добавили ни одной книги</h3>
        }
      </div>
    </Layout>
  );
};
