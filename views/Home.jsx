const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');
const Comment = require('./Comment');

module.exports = function Home({ user, books }) {
  return (
    <Layout>
      <form>
        <div id="card-list">
          {books.map((book) => (
            <CardBook key={book.id} books={book} />
          ))}
        </div>
      </form>
    </Layout>
  );
};
