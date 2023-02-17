const React = require('react');
const Layout = require('./Layout');

module.exports = function Trends({ booksArr }) {
  return (
    <Layout>
      {' '}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {booksArr.map((el) => (
            <tr>
              <td>{el.Title}</td>
              <td>{el.Author}</td>
              <td>{el.Amazon_Link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};
