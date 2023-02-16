const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ user }) {
  return (
    <Layout user={user}>

      <form id="formLog" className="container-sm w-50 p-3">
        <h1 className="mt-3">Log in</h1>
        <div className="input-group mt-5">
          <span className="input-group-text">Email and password</span>
          <input
            placeholder="Email here"
            minLength="5"
            name="email"
            type="email"
            className="form-control"
          ></input>
          <input
            placeholder="Password here"
            minLength="6"
            name="password"
            type="password"
            className="form-control"
          ></input>
        </div>
        <button id="logBtn" type="submit" className="btn btn-dark mt-3" >
          ENTER ME
        </button>
        <div id="input"></div>
      </form>
    </Layout>
  );
};
