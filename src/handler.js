const {nanoid} = require('nanoid');
const books = require('./books');

const addBook = (request, h) => {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;
  
    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
    }
  
    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
    }
    const id = nanoid(16);
    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished: readPage === pageCount,
      reading,
      insertedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  
    books.push(newBook);
  
    if (books.find((book) => book.id === id)) {
      return h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      }).code(201);
    }
  
    return h.response({
      status: 'error',
      message: 'Buku gagal ditambahkan',
    }).code(500);
};

const getBooks = (request, h) => {
  const { name, reading, finished } = request.query;
  const filteredBooks = [...books].filter((book) => {
    const nameMatch =!name || book.name.toLowerCase().includes(name.toLowerCase());
    const readingMatch = reading === undefined || book.reading === (reading === '1');
    const finishedMatch = finished === undefined || book.finished === (finished === '1');
    return nameMatch && readingMatch && finishedMatch;
  });

  const responseBooks = filteredBooks.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return h.response({
      status: 'success',
      data: {
        books: responseBooks,
      },
    })
  .code(200);
};

const getBookId = (request, h) => {
  const {id} = request.params;
  const book = books.find((book) => book.id === id);

  if (book) {
    return h.response({
      status: 'success',
      data: {book},
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

const editBookId = (request, h) => {
  const { id } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (!name) return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Mohon isi nama buku',
  }).code(400);

  if (readPage > pageCount) return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
  }).code(400);

  const book = books.find((book) => book.id === id);

  if (!book) return h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  }).code(404);

  const updatedBook = {
  ...book,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt: new Date().toISOString(),
  };

  books.splice(books.indexOf(book), 1, updatedBook);

  return h.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  }).code(200);
};

const deleteBookId = (request, h) => {
  const { id } = request.params;

  const book = books.find((book) => book.id === id);

  if (!book) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    }).code(404);
  }

  books.splice(books.indexOf(book), 1);

  return h.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  }).code(200);
};

module.exports = {
  addBook,
  getBooks,
  getBookId,
  editBookId,
  deleteBookId,
};