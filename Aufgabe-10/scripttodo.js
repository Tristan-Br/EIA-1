console.log("Hallo Erde C-137");
const liste = document.querySelector("#liste");
const eingabefeld = document.querySelector("#eingabefeld");
const eingabe = document.querySelector("eingabe");
document.querySelector("#eingabefeld").addEventListener("submit", e => {
    e.preventDefault();
    if (eingabe.value == "")
        return;
    const todo = {
        titel: eingabe.value,
        komplett: false
    };
    addListItem(todo);
});
function addListItem(newtodo) {
}
//# sourceMappingURL=scripttodo.js.map