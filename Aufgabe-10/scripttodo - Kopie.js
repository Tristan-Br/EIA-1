window.addEventListener("load", () => {
    const eingabefeld = document.querySelector("#eingabefeld");
    const eingabe = document.querySelector("#eingabe");
    const liste_el = document.querySelector("#todos");
    document.querySelector("#eingabefeld").addEventListener("submit", (e) => {
        e.preventDefault();
        const todo = eingabe.value;
        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");
        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("inhalt");
        todo_el.appendChild(todo_inhalt_el);
        const todo_eingabe_el = document.createElement("eingabe");
        todo_eingabe_el.classList.add("text");
        todo_eingabe_el.type = "text";
        todo_eingabe_el.value = todo;
        todo_eingabe_el.setAttribute("readonly", "readonly");
        todo_content_el.appendChild(todo_eingabe_el);
        const todo_löschen_el = document.createElement("div");
        todo_löschen_el.classList.add("löschen");
        const todo_fas_el = document.createElement("button");
        todo_fas_el.classList.add("fas fa-trash-alt");
        todo_löschen_el.appendChild(todo_fas_el);
        todo_el.appendChild(todo_löschen_el);
        liste_el.appendChild(todo_el);
        eingabe.value = "";
        todo_fas_el.addEventListener("click", (e) => {
            liste_el.removeChild(todo_el);
        });
    });
});
//# sourceMappingURL=scripttodo%20-%20Kopie.js.map