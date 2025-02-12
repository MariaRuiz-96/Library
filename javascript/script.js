document.addEventListener("DOMContentLoaded", function(){
    console.log("cargo bien")

    const contenedor = document.querySelector("main");
    const newContentBook = document.createElement("article");
    const nameBook = document.createElement("h3");
    const nameAuthor = document.createElement("h4");

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
    }
    document.getElementById("new-book").addEventListener("click", saveNewBook)
})