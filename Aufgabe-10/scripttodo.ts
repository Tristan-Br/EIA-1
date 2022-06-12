console.log("Hallo Erde C-137");

type Listenelement = {
    titel: string
    komplett: boolean
};

const liste = document.querySelector<HTMLUListElement>("#liste");
const eingabefeld = document.querySelector<HTMLFormElement>("#eingabefeld");
const eingabe = document.querySelector<HTMLUListElement>("eingabe");

document.querySelector("#eingabefeld").addEventListener<keyof ElementEventMap>("submit", e => {
    e.preventDefault();

    if (eingabe.value == "") return;

    const todo: Listenelement = {
        titel: eingabe.value,
        komplett: false
    };

    addListItem(todo);
});

function addListItem(newtodo: Listenelement){
}