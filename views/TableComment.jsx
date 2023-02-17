const React = require('react');

module.exports = function TableComment({ comments }) {
  return (
    <>
      {comments.map((com) => (
        <tr>
          <td>
            {com['User.name']}
            :
          </td>
          <td id="text-comment">{com.comment}</td>
        </tr>
      ))}
    </>
  );
};
