const React = require('react');
const TableComment = require('./TableComment');

module.exports = function MyComment({ comments }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="table">
        <TableComment comments={comments} />
      </tbody>
    </table>
  );
};
