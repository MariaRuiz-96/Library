document.addEventListener("DOMContentLoaded", function(){
    console.log("cargo bien")

    const contenedor = document.querySelector("main");
    const newContentBook = document.createElement("article");
    const nameBook = document.createElement("h3");
    const nameAuthor = document.createElement("h4");
    const buttonUpgrade = document.createElement("button");
    const buttonDelete = document.createElement("button");

    function generalSections(clase, titletext, contenttext){
        const section = document.createElement("section");
        section.classList.add(clase);

        const title = document.createElement("h5");
        title.textContent = titletext;
        section.appendChild(title)

        const text =  document.createElement("span");
        text.textContent = contenttext;
        section.appendChild(text);

        return section;
    }

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
        buttonUpgrade.textContent = "Upgrade"
        buttonDelete.textContent = "Delete"
    
        const pages = generalSections("pages", "Pagues: ", book.pages);
        const statusread = generalSections("read", "Read? ", book.read);

        contenedor.appendChild(newContentBook)
        newContentBook.appendChild(nameBook)
        newContentBook.appendChild(nameAuthor)
        newContentBook.appendChild(pages)
        newContentBook.appendChild(statusread)
    }

    document.getElementById("new-book").addEventListener("click", saveNewBook)
})