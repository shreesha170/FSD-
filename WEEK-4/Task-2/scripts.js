let library = [];

function addBook(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = parseInt(document.getElementById('pages').value);
    let genre = document.getElementById('genre').value;

    if (title && author && pages && genre) {
        let book = {
            title: title,
            author: author,
            pages: pages,
            genre: genre
        };
        library.push(book);
        displayBooks();
        document.getElementById('add-book-form').reset();
        document.getElementById('error-message').textContent = '';
    } else {
        document.getElementById('error-message').textContent = 'Please fill in all fields.';
    }
}

function searchBooks() {
    let searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    let searchResult = library.filter(book => book.title.toLowerCase().includes(searchTitle));
    
    if (searchResult.length === 0) {
        document.getElementById('search-message').textContent = 'No books found!';
    } else {
        document.getElementById('search-message').textContent = '';
    }
    displayBooks(searchResult);
}

function displayBooks(books = library) {
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book-item');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

// Initial display of books
displayBooks();
