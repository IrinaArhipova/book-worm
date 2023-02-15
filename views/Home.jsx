const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

module.exports = function Home({ users, email }) {
  return (
    <Layout email={email}>
      <form>
        <div className="container w-50">
          <h3 className="mt-2">Mafiozniki</h3>
          <ol className="list-group list-group-numbered mt-2">
            {users.length ? (
              users.map((user) => (
                <li key={user.id} id="user.id" className="list-group-item">
                  {user.email}
                </li>
              ))
            ) : (
              <li className="list-group-item">Nobody playing mafia</li>
            )}
          </ol>
        </div>
      </form>
    </Layout>
  );
};
