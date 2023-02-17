const React = require('react');
const Layout = require('./Layout');
const AddBookForm = require('./AddBookForm');
const CardBook = require('./CardBook');

module.exports = function MyBooks({ books }) {
  return (
    <Layout>
      <h1>Мои книги</h1>
      <AddBookForm />
      {
          books
            ? books.map((book) => <CardBook key={bookId} books={book} />)
            : <h3 id="noBookesAdded">Вы не добавили ни одной книги</h3>
        }
    </Layout>
  );
};
