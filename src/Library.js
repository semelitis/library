//library function 
function Library(){
    return ;
}
const book_list=document.getElementById('book_list');

//for rendering the book
Library.prototype.addBookToList=function(book){
    
    let row=document.createElement('tr');
    
    console.log(row);
    //
    row.innerHTML=`<td>${book.tite}</td>
                   <td>${book.auhtor}</td>
                   <td>${book.isbn}</td>
                   <td>${book.read}</td>
                   <td><a>href="#" class="delete"<a/>X</td>`;
    
    book_list.appendChild(row);
}

Library.prototype.clear=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
    document.getElementById('read').value='';
}

Library.prototype.deleteBook=function(event){
    //if it has the classname delete we putted dynamicaly
    if(event.target.className==='delete'){
        //for remove the tr 
        target.parentElement.parentElement.remove();
    }
};
export default Library;