document.addEventListener("DOMContentLoaded", function(){
    console.log("cargo bien")

    const contenedor = document.querySelector("main");
    const newContentBook = document.createElement("article");
    const nameBook = document.createElement("h3");
    const nameAuthor = document.createElement("h4");
    const section= document.createElement("section");
    const namePagesRead = document.createElement("h5");
    const contentPagesRead = document.createElement("span");
    const button = document.createElement("button");

    function newBook (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = "No"
    }

    function saveNewBook (){
        document.getElementById("new-book").addEventListener("click", () => {
            let title = document.getElementById("Title").value;
            let author = document.getElementById("Author").value;
            let pages = document.getElementById("Pages").value;
    
            const booknew = new newBook (title, author, pages)
            console.log(booknew)
        })
    }

    saveNewBook()
})