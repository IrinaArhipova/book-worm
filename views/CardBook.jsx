const React = require('react');

module.exports = function CardBook({
  user, books, flag = false, title = false, autor = false, button = true, comment = false,
}) {

  return (
    <div className="card">
      <img src={!flag ? books.img : books['Book.img']} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{!title ? books.nameBook : books['Book.nameBook']}</h5>
        <p className="card-text">{!autor ? books.autor : books['Book.autor']}</p>
      </div>
      <div className="card-body1">
        {user && (<a href={!comment ? `/comment/${books.id}` : `/comment/${books['Book.id']}`} className="card-link">Comments</a>)}
        {user && button ? <button data-id={books.id} type="button" className="btn btn-warning button">Add to favorites</button> : <div /> }
      </div>
      {user ? (
        <form id="rateForm">
          <div className="rating" id={`div${books.id}`}>
            <select className="form-select" id="select" data-id={books.id}>
              <option selected>Choose rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </form>
      ) : (
        <p id={`div${books.id}`}></p>
      )}
    </div>
  );
};
