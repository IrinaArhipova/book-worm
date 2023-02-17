const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');
const MyComment = require('./MyComment');

module.exports = function Comment({
  comments, book, user,
}) {
  return (
    <Layout user={user}>
      <div className="card-comment">
        <table id="tableForm">
          {' '}
          <tbody>
            <tr>
              <th>
                <CardBook books={book} />
              </th>
              <th>
                <MyComment comments={comments} />
              </th>
            </tr>
          </tbody>
        </table>
        <div id="div">
          <form id="form_comment" data-id={book.id} className="card text-bg mt-5" action="/comment" method="post">
            <div className="form-comment">
              <h6 id="text" className="mt-3">Leave your comment:</h6>
              <input type="text" name="comment" className="input mt-3" placeholder="Your comment" />
            </div>
            <button type="submit" className="btn btn-outline-success mt-3 mb-2">Send comment</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
