const React = require('react');

module.exports = function TableComment({ comments }) {
  return (
    <>
      {comments.map((com) => (
        <tr>
          <td>{com['User.name']}</td>
          <td>{com.comment}</td>
        </tr>
      ))}
    </>
  );
};
