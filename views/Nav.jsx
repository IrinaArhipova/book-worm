const React = require('react');

module.exports = function Nav({ user }) {
  return (
    <nav
      id="Nav"
      className="navbar navbar-expand-lg bg-body-tertiary bg-primary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand">Bookworm</a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a id="home" className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a id="trends" className="nav-link" href="/trend">
                Trends
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <a id="emailNav" className="nav-link">
                    Hi, {user.name}!
                  </a>
                </li>
                <li className="nav-item">
                  <a id="LK" className="nav-link " href="/my-books">
                    My books
                  </a>
                </li>
                <li className="nav-item">
                  <a id="LK" className="nav-link " href="/favorite">
                    Favourites
                  </a>
                </li>
                <li className="nav-item">
                  <a id="LK" className="nav-link " href="#">
                    My comments
                  </a>
                </li>

                <li className="nav-item">
                  <a id="logOut" className="nav-link" href="/auth/logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a id="login" className="nav-link" href="/auth/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a id="reg" className="nav-link" href="/auth/reg">
                    Registration
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
