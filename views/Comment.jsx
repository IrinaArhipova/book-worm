const React = require('react');
const Layout = require('./Layout');
const CardBook = require('./CardBook');

module.exports = function Comment({ comments, comment, book }) {
  return (
    <Layout>
      <div className="card-comment">
        <CardBook books={book} />
        <form id="form_comment" className="card text-bg mt-5" action="comment-form" method="post">
          <div className="form-comment">
            <h6 id="text" className="mt-3">Leave your comment:</h6>
            <input type="text" name="comment" className="input mt-3" placeholder="Your comment" />
          </div>
          <button id="button-form-comment" type="submit" className="btn btn-outline-success mt-3 mb-2">Send comment</button>
        </form>
        <div className="card text-bg mb-3">
          <div className="card-header">
            <h6 id="text">
              Comment from
              {' '}
              {' '}
              { comment.User.name }
              :
              {' '}
            </h6>
          </div>
          <div className="card-body">
            {comments.map((com) => <p key={com.id} className="card-text">{com.comment}</p>)}
          </div>
        </div>
      </div>
    </Layout>
  );
};
