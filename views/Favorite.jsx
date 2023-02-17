const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');

module.exports = function Favorite({ user, books }) {
  const flag = true;
  const title = true;
  const autor = true;
  const button = false;
  const comment = true;
  console.log(books);
  return (
    <Layout user={user}>
      <form>
        <div id="card-list">
          {books.map((book) => (
            // eslint-disable-next-line max-len
            <CardBook key={book.id} flag={flag} books={book} title={title} autor={autor} button={button} comment={comment} />
          ))}
        </div>
      </form>
    </Layout>
  );
};
