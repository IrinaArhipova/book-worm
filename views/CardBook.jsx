const React = require('react');

module.exports = function CardBook({
  books, flag = false, title = false, autor = false, button = true, comment = false,
}) {
  return (
    <div className="card">
      <img src={!flag ? books.img : books['Book.img']} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{!title ? books.nameBook : books['Book.nameBook']}</h5>
        <p className="card-text">{!autor ? books.autor : books['Book.autor']}</p>
      </div>
      <div className="card-body1">
        <a href={!comment ? `/comment/${books.id}` : `/comment/${books['Book.id']}`} className="card-link">Comments</a>
        {button ? <button data-id={books.id} type="button" className="btn btn-warning button">Add to favorites</button> : <div /> }
      </div>
    </div>
  );
};
