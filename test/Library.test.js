import Library from '../src/Library';
import Book from '../src/Book';

let author='Alex Peter';
let title='Hunger Games';
let isbn='123456789';
let read='yes';

let libraryTest=new Library();

it('add a book data to to the list', () => {
    let bookTest=new Book(title,author,isbn,read);
    expect(libraryTest.addBookToList(bookTest)).toBe('')
});

