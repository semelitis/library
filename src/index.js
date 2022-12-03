//the main index javascript file
import _ from 'lodash';
import Book from './Book'
import Library from './Library';

const book_form=document.getElementById('book_form');
const title=document.getElementById('title');
const author=document.getElementById('auhtor');
const isbn=document.getElementById('isbn');
const read=document.getElementById('read');
const book_list=document.getElementById('book_list');

const library=new Library();
book_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let book_title=title.value;
    let book_author=author.value;
    let book_isbn=isbn.value;
    let book_read=read.value;

    let book=new Book(book_title,book_author,book_isbn,book_read);
    console.log(book);
    library.addBookToList(book);
    
} )

book_list.addEventListener('onclick',(event)=>{
    event.preventDefault();
    //if clicking the x class delete we put dynamicaly
    library.deleteBook(event.target);
})