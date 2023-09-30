const book1 = {
  name: "Eragon",
  author: "Christopher Paolini",
  year: 2003,
};
const book2 = {
  name: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
};
const book3 = {
  name: "maktub",
  author: "Paulo Coelho",
  year: 1994,
};
const bookUtils = {
  getFirstPublished: function (item1, item2) {
    if (item1.year < item2.year) {
      return item1.name;
    } else {
      return item2.name;
    }
  },
  setNewEdition: function (book, newYear) {
    book.newestEdition = newYear;
  },
  setlanguage: function (book, lang) {
    book.language = lang;
  },
  setTranslation: function (book, lang, translator) {
    book.translation = {
      lang,
      translator,
    };
  },
  setPublisher: function (book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher: function (bookone, booktwo) {
    if (bookone.publisher.name === booktwo.publisher.name){
        if(bookone.publisher.location === booktwo.publisher.location){
            console.log("is same publisher");
            return;
        }

    }
    console.log("is not same publisher");
  },
};
console.log(bookUtils.getFirstPublished(book1, book2));

bookUtils.setNewEdition(book1, 2006);
bookUtils.setlanguage(book1, "italian");
bookUtils.setTranslation(book2, "Italian", "Fabiano Rochello");
bookUtils.setPublisher(book2, "Paulo Coelho", "Venice");
bookUtils.setPublisher(book3, "Paulo Coelho", "Venice");
bookUtils.setPublisher(book1, "Christopher Paolini", "Luc");
console.log(book1);
console.log(book2);
console.log(book3);
bookUtils.isSamePublisher(book1, book2);
bookUtils.isSamePublisher(book2, book3);
