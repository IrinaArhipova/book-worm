const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');

module.exports = function Home({ user, books }) {
  return (
    <Layout user={user}>
      <form>
        <div id="card-list">
          {books.map((book) => (
            <CardBook key={book.id} books={book} user={user} />
          ))}
        </div>
      </form>
    </Layout>
  );
};
