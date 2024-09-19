function performCalculation() {
  let num1 = document.getElementById("num1").value;
  let operator = document.getElementById("operator").value;
  let num2 = document.getElementById("num2").value;
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Cannot divide by zero!";
    }
  } else {
    result = "Invalid operator";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
let library = [];

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const genre = document.getElementById("genre").value;

  const book = { title, author, year, genre };
  library.pushA(book);
  alert("Book added successfully!");
  displayBooks();
}

function searchBook() {
  const searchTitle = document.getElementById("searchTitle").value;
  const foundBook = library.find(
    (book) => book.title.toLowerCase() === searchTitle.toLowerCase()
  );

  if (foundBook) {
    document.getElementById(
      "searchResult"
    ).innerHTML = `Title: ${foundBook.title}, Author: ${foundBook.author}, Year: ${foundBook.year}, Genre: ${foundBook.genre}`;
  } else {
    document.getElementById("searchResult").innerHTML = "Book not found!";
  }
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  library.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Genre: ${book.genre}`;
    bookList.appendChild(li);
  });
}

function removeBook() {
  const removeTitle = document.getElementById("removeTitle").value;
  const bookIndex = library.findIndex(
    (book) => book.title.toLowerCase() === removeTitle.toLowerCase()
  );

  if (bookIndex !== -1) {
    library.splice(bookIndex, 1);
    alert("Book removed successfully!");
    displayBooks();
  } else {
    alert("Book not found!");
  }
}

function updateBook() {
  const updateTitle = document.getElementById("updateTitle").value;
  const newTitle = document.getElementById("newTitle").value;
  const newAuthor = document.getElementById("newAuthor").value;
  const newYear = document.getElementById("newYear").value;
  const newGenre = document.getElementById("newGenre").value;

  const bookToUpdate = library.find(
    (book) => book.title.toLowerCase() === updateTitle.toLowerCase()
  );

  if (bookToUpdate) {
    bookToUpdate.title = newTitle || bookToUpdate.title;
    bookToUpdate.author = newAuthor || bookToUpdate.author;
    bookToUpdate.year = newYear || bookToUpdate.year;
    bookToUpdate.genre = newGenre || bookToUpdate.genre;
    alert("Book updated successfully!");
    displayBooks();
  } else {
    alert("Book not found!");
  }
}

let randomNumber = Math.floor(Math.random() * 5);

function guess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  let reply = "";

  if (userGuess === randomNumber) {
    reply = `congrats! You've guessed the right number which is ${randomNumber} `;
  } else if (userGuess !== randomNumber) {
    reply = `Incorrect! Try Again`;
  }
  document.getElementById("reply").innerText = reply;
}
