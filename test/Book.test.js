import { iteratee } from 'lodash';
import Book from '../src/Book';

let title='the book';
let author='Anna Maria';
let isbn='2324343';
let read='yes';

let bookTest=new Book(title,author,isbn,read);
test('a book object', () => {
    return expect(fetchData()).resolves.toBe('the boook',
                                             'Anna Maria',
                                             '2324343',
                                             'yes');
  });
//or
describe("the book constractor",()=>{
    it("returns a book object with given values",()=>{
        let bookTest2= new Book(title,author,isbn,read)
        except(bookTest2).toEqual("the book","Anna Maria","2324343","yes")
    })
})