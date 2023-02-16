const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

module.exports = function Home({ users, user }) {
  return (
    <Layout user={user}>
      <form>
        <div className="container w-50">
          <h3 className="mt-2">Mafiozniki</h3>
          <ol className="list-group list-group-numbered mt-2">
            {users.length ? (
              users.map((user1) => (
                <li key={user1.id} id="user.id" className="list-group-item">
                  {user1.name}
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