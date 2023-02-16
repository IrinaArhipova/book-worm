const React = require('react');

module.exports = function CardBook({ books }) {
  return (
    <div className="card">
      <img src={books.img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{books.nameBook}</h5>
        <p className="card-text">{books.autor}</p>
      </div>
      <div className="card-body1">
        <a href={`/comment/${books.id}`} className="card-link">Comments</a>
        <button type="button" className="btn btn-warning">Add to favorites</button>
      </div>
    </div>
  );
};
