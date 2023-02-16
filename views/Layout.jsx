const React = require('react');
const Nav = require('./Nav');

module.exports = function Layout({ children, user }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <script defer src="/js/bootstrap.bundle.min.js"></script>
        <script defer src="/js/application.js"></script>
        <title>sKeLeToN</title>
      </head>
      <body style={{ backgroundColor: '#DCFFE7' }}>
        <Nav user={user}></Nav>
        {children}
      </body>
    </html>
  );
};
