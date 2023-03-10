const React = require('react');
const Layout = require('./Layout');

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
          />
          <input
            placeholder="Email here"
            name="email"
            type="email"
            className="form-control"
          />
          <input
            placeholder="Password here"
            name="password"
            type="password"
            className="form-control"
          />
        </div>
        <button id="regBtn" type="submit" className="btn mt-3">
          REG ME
        </button>
        <div id="input" />
      </form>
    </Layout>
  );
};
