const express=require("express")
const app=express();
app.use(express.json());

port=911;//my own port

let books=[//the array you use instead of a database
    //json
    
   { id:1,bookname:"sherlock holmes",author:"Conan Doyle"},//--> comma after each array
   //: means id is an integer
//but sherlock is string cuz of the quotation
//same goes for author
   { id:2,bookname:"No longer human",author:"Osamu Dazai "},

   {id:3,bookname:"good girl bad blood",author:"Holly Jackson"},                                                   
   
];

//API 

//like my title api
app.get("/",(req,res) => {
    res.send("welcome to the bookstore");//backend sends sth to frontend
});
// get all books
app.get("/books", (req, res) => {
    res.json(books);
});

//get  one book by ID
app.get("/books/:id",(req,res)=>{
    const book=books.find(u=>u.id==parseInt(req.params.id));
    res.json(book)
});
//adding new book name and its author and id is automatically iterating

app.post("/books", (req, res) => {
    
    const newbook = {
        id: books.length + 1, // iterative
        bookname: req.body.bookname, 
        author: req.body.author 
    };

    
    books.push(newbook);//add

    
    res.json(newbook);
});


//update book (the name and also the author) using id
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id)); // find the book by id
    book.bookname = req.body.bookname; // update bookname
    book.author = req.body.author; // update the author
    res.json(book); 
});
//delete book using id


app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id)); 
    const deleteBook = books.splice(bookIndex, 1); 
    res.json(deleteBook[0]); 
});

app.listen(port,()=>console.log(" The server is running"))//i put port because i made my own port already up there if you want to put numbers here then remove port up there