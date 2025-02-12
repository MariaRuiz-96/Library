document.addEventListener("DOMContentLoaded", function(){
    console.log("cargo bien")

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

    function generalButton(classbutton, namebutton){
        const button = document.createElement("button");
        button.classList.add(classbutton);
        button.textContent = namebutton;

        return button
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
        const contenedor = document.querySelector("main");
        const newContentBook = document.createElement("article")

        const nameBook = document.createElement("h3");
        nameBook.textContent = book.title

        const nameAuthor = document.createElement("h4");
        nameAuthor.textContent = book.author
    
        const pages = generalSections("pages", "Pagues: ", book.pages);
        const statusread = generalSections("read", "Read? ", book.read);

        const upgrade = generalButton("upgrade", "Upgrade");
        const Delete = generalButton("delete", "Delete")

        /*Se agraga el evento al boton en esta seccion para que el click solo afecte el articulo individual y no todo el documento*/
        upgrade.addEventListener("click", function(){
            if (statusread.querySelector("span").textContent === "No"){
                statusread.querySelector("span").textContent = "Yes"
            } else {statusread.querySelector("span").textContent = "No"}
        })

        contenedor.appendChild(newContentBook)
        newContentBook.appendChild(nameBook)
        newContentBook.appendChild(nameAuthor)
        newContentBook.appendChild(pages)
        newContentBook.appendChild(statusread)
        statusread.appendChild(upgrade)
        newContentBook.appendChild(Delete)

        Delete.addEventListener("click", function(){
            newContentBook.remove() /* //!elimina la etiqueta y su contenido*/
        })
    }
    document.getElementById("new-book").addEventListener("click", saveNewBook)
})