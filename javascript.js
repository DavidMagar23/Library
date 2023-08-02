// let myLibrary = [];

// function Book (title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.sayinfo = () => `${this.title} by ${this.author}, ${this.pages} pages, ${read}.`;
// }

// const harryPotter = new Book ('Harry Potter', 'J.K. Rowling', '879', 'not read yet');
// const theHouse = new Book ('The House', 'Rowan Smith', '56', 'read');
// const redBlue = new Book ('RedBlue', 'Tron R.M', '799', 'not read yet');

// function addBookToLibrary () {
//     myLibrary.push(harryPotter);

    
// }

// addBookToLibrary();
// console.log(myLibrary);


// Initialize add button
let add = document.querySelector('.add');
let bookAdd = document.querySelector('.add-book-button');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');

add.addEventListener('click', (e) => {
    showPopup();
})

overlay.addEventListener('click', (e) => {
    showPopup();
})

function showPopup () {
    overlay.classList.toggle('active');
    modal.classList.toggle('active');
}

let addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener("click", (e) => {
    addBook();
    showPopup();
})
    
let bookContainer = document.querySelector('.book-container');
function addBook () {
    let title = document.querySelector('#add-title').value,
        author = document.querySelector('#add-author').value,
        page = document.querySelector('#add-page').value,
        choice1 = document.querySelector('#readYes');

    let newBook = document.createElement('div');
    newBook.classList.add('book');
    bookContainer.appendChild(newBook);

    let newTitle = document.createElement('div');
    newTitle.classList.add('title-container');
    newTitle.innerHTML = `Title: ${title}`;
    newBook.appendChild(newTitle);

    let newAuthor = document.createElement('div');
    newAuthor.classList.add('author-container');
    newAuthor.innerHTML = `Author: ${author}`;
    newBook.appendChild(newAuthor);

    let newPage = document.createElement('div');
    newPage.classList.add('page-container');
    newPage.innerHTML = `Pages: ${page}`;
    newBook.appendChild(newPage);

    let newFinished = document.createElement('div');
    newFinished.classList.add('read-container');
    newBook.appendChild(newFinished);
    let finished = document.createElement('button');
    finished.innerHTML = `Finished`;
    newFinished.appendChild(finished);

    let newClose = document.createElement('button');
    newClose.classList.add('close');
    let newX = document.createElement('span');
    newX.innerHTML = 'X';
    newClose.appendChild(newX);
    newBook.appendChild(newClose);

    if (choice1.checked) {
        newBook.classList.add('finished');
    }

    finished.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle('finished');
    })

    newClose.addEventListener('click', (e)=> {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    })
}