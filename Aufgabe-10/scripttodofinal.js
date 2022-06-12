window.addEventListener("load", () => {
    const eingabefeld = document.querySelector("#eingabefeld");
    const eingabe = document.querySelector("#eingabe");
    const liste_el = document.querySelector("#todos");
    let clickcount = 0;
    document.querySelector("#hinzufügen").addEventListener("click", (e) => {
        e.preventDefault();
        clickcount++;
        const todo = eingabe.value;
        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");
        const todo_inhalt_el = document.createElement("div");
        todo_inhalt_el.classList.add("inhalt");
        todo_el.appendChild(todo_inhalt_el);
        const todo_häckchen_el = document.createElement("label");
        todo_häckchen_el.classList.add("häckchen");
        const todo_checkbox_el = document.createElement("input");
        todo_checkbox_el.classList.add("checkbox");
        const todo_checkmark_el = document.createElement("span");
        todo_checkbox_el.classList.add("checkmark");
        todo_el.appendChild(todo_häckchen_el);
        const todo_eingabe_el = document.createElement("input");
        todo_eingabe_el.classList.add("text");
        todo_eingabe_el.type = "text";
        todo_eingabe_el.value = todo;
        todo_eingabe_el.setAttribute("readonly", "readonly");
        todo_inhalt_el.appendChild(todo_eingabe_el);
        const todo_löschen_el = document.createElement("div");
        todo_löschen_el.classList.add("löschen");
        const todo_fas_el = document.createElement("button");
        todo_fas_el.classList.add("fas fa-trash-alt");
        todo_löschen_el.appendChild(todo_fas_el);
        todo_el.appendChild(todo_löschen_el);
        liste_el.appendChild(todo_el);
        eingabe.value = "";
    });
    document.querySelector(".fas").addEventListener("click", (e) => {
        liste_el.removeChild(todo_el);
        clickcount--;
    });
});
//# sourceMappingURL=scripttodofinal.js.map