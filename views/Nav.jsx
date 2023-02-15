const React = require('react');

module.exports = function Nav({ email }) {
  return (
    <>
      {email ? (
        <nav id="Nav" className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Mafia
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    id="home"
                    className="nav-link active"
                    aria-current="page"
                    href="http://localhost:3000"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="emailNav"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Hi, `${email}`!
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="emailNav"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Logout
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Pizza</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav id="Nav" className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Mafia
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    id="home"
                    className="nav-link active"
                    aria-current="page"
                    href="http://localhost:3000"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="login"
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a id="reg" className="nav-link" href="/reg">
                    Registration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Pizza</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
