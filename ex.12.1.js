const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];
   
function readIfTrue(library) {
    for (let i = 0; i < library.length; i++) {
      const book = library[i];
      if (book.readingStatus === true) {
        console.log(`Book Name: ${book.title}`);
        console.log(`Author Name: ${book.author}`);
        console.log(`Reading Status: ${book.readingStatus}`);
      }
    }
  }
  
  readIfTrue(library);