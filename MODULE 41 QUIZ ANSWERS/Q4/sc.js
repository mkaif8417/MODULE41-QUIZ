
   const books = [
    { title: "Book One", author: "john doe", year: 2005 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "alice johnson", year: 2015 },
    { title: "Book Four", author: "bob brown", year: 2008 },
    { title: "Book Five", author: "mary jane", year: 2020 }
];
const filteredBooks = books
    .filter(book => book.year >= 2010) 
    .map(book => ({
        title: book.title,
        author: book.author.toUpperCase(), 
        year: book.year
    }));


const bookList = document.getElementById("bookList");
filteredBooks.forEach(book => {
    const listItem = document.createElement("li");
    listItem.innerText = `"${book.title}" by ${book.author} (${book.year})`;
    bookList.appendChild(listItem);
});

console.log("Filtered Books:", filteredBooks);