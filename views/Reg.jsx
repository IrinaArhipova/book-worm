const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

module.exports = function Reg() {
  return (
    <Layout>
      <form id="formReg" className="container-sm w-50 p-3">
        <h1 className="mt-3">Registration</h1>
        <div className="input-group mt-5">
          <input
            placeholder="Name here"
            name="name"
            type="text"
            className="form-control"
          ></input>
          <input
            placeholder="Email here"
            name="email"
            type="email"
            className="form-control"
          ></input>
          <input
            placeholder="Password here"
            name="password"
            type="password"
            className="form-control"
          ></input>
        </div>
        <button id="regBtn" type="submit" className="btn btn-primary mt-3">
          REG ME
        </button>
      </form>
    </Layout>
  );
};
