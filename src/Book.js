function Book(title,author,isbn,read){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
    if(read){
        this.read='yes';
    }else{
        this.read='no';
    }
};
export default Book;