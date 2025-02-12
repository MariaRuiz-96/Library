document.addEventListener("DOMContentLoaded", function(){
    console.log("cargo bien")

    const contenedor = document.querySelector("main");
    const newContentBook = document.createElement("article");
    const nameBook = document.createElement("h3");
    const nameAuthor = document.createElement("h4");
    const section= document.createElement("section");
    const namePages = document.createElement("h5");
    const nameread = document.createElement("h5");
    const contentPages = document.createElement("span");
    const contentRead = document.createElement("span");
    const button = document.createElement("button");

    function newBook (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = "No"
    }

    function saveNewBook (){
        
            let title = document.getElementById("Title").value;
            let author = document.getElementById("Author").value;
            let pages = document.getElementById("Pages").value;
    
            const booknew = new newBook (title, author, pages)
            console.log(booknew)
            createNewBook(booknew) /*se debe de poner aqui adentro ya que debe de pedir datos y despues rellenar*/
    }

    function createNewBook(book){
        nameBook.textContent = book.title
        nameAuthor.textContent = book.author
        namePages.textContent = "Pagues: "



        contenedor.appendChild(newContentBook)
        newContentBook.appendChild(nameBook)
        newContentBook.appendChild(nameAuthor)
        section.classList.add("pages")
        newContentBook.appendChild(section)

    }


    document.getElementById("new-book").addEventListener("click", saveNewBook)
})