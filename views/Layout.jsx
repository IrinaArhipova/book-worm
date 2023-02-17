const React = require('react');
const Nav = require('./Nav');
const Footer = require('./Footer');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="/js/application.js" />
        <script defer src="/js/favorite.js" />
        <script defer src="/js/addBook.js" />
        <script defer src="/js/rate.js" />
        <script defer src="/js/trends.js" />
        <script defer src="/js/comment.js" /> 
        <title>Bookworm</title>
      </head>
      <body style={{ backgroundColor: '#DCFFE7' }}>
        <Nav user={user} />
        {children}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        />
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </html>
  );
};
