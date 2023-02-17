const React = require('react');

module.exports = function CardBook({ books, user }) {
  return (
    <div className="card">
      <img src={books.img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{books.nameBook}</h5>
        <p className="card-text">{books.autor}</p>
      </div>
      <div className="card-body1">
        <a href={`/comment/${books.id}`} className="card-link">
          Comments
        </a>
        {user && (
          <button type="button" className="btn btn-warning">
            Add to favorites
          </button>
        )}
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
