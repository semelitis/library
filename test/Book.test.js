import { iteratee } from 'lodash';
import Book from '../src/Book';

let title='the book';
let author='Anna Maria';
let isbn='2324343';
let read='yes';

//or
describe("the book constractor",()=>{
    it("returns a book object with given values",()=>{
        let bookTest= new Book(title,author,isbn,read)
        except(bookTest).toEqual("the book","Anna Maria","2324343","yes")
    })
})