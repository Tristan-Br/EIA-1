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
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
}
//# sourceMappingURL=scripttodo.js.map