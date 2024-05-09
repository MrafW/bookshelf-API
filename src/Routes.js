const {
  addBook,
  getBooks,
  getBookId,
  editBookId,
  deleteBookId,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookId,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookId,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookId,
  },
];
module.exports = routes;