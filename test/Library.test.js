import Library from '../src/Library';
import Book from '../src/Book';

let author='Alex Peter';
let title='Hunger Games';
let isbn='123456789';
let read='yes';

let libraryTest=new Library();
//the most function of this module dosent return anything

test('add a book data to to the list', () => {
    let bookTest=new Book(title,author,isbn,read);
    return expect(new Promise(libraryTest.addBookToList(bookTest)))
    .resolves.toBe('made a book').catch(console.error('not made the expected book')
    )});

//here the for parameter the event object...
test('remove a book form the list', () => {
        return expect(new Promise(libraryTest.deleteBook()))
        .resolves.toBe('book deleted succesfully').catch(console.error('the book hasnt beeb deleted ,still exists')
        )});