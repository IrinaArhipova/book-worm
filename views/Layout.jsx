const React = require('react');
const Nav = require('./Nav');

module.exports = function Layout({ children, email }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" />
        <script defer src="/js/application.js" />
        <script defer src="/js/comment.js" />
        <title>sKeLeToN</title>
      </head>
      <body>
        <Nav email={email} />
        {children}
      </body>
    </html>
  );
};
