const React = require('react');
const Layout = require('./Layout');

function AddBook() {
  return (
    <Layout>
      <form id="addBookForm" class="container" method="post" action="/book">
        <div className="mb-3">
          <input type="text" className="form-control" id="InputBookName" name="nameBook" placeholder="Название книги" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="InputBookAuthor" name="autor" placeholder="Автор" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="InitComment" name="comment" placeholder="Оставьте ваш комментарий" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="InputBookPhoto" name="img" placeholder="Вставьте фото обложки" />
        </div>

        <button type="submit" className="btn btn-primary">Добавить книгу</button>
      </form>
    </Layout>
  );
}
