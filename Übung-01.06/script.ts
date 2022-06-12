
interface Studi {
    name: string;
    age: number;
    hair: string;
    clothes: string [];
}

let Studis: Studi[

    {
        name: "Robert",
        age: 22,
        hair: "blonde",
        clothes: ["glasses", "cap", "jacket"]
    },
    
    {
        name: "Atze",
        age: 20,
        hair: "red",
        clothes: ["T-shirt", "chain", "cap"]
    },
    
    {
        name: "Sasikia",
        age: 21,
        hair: "brown",
        clothes: ["hoodie", "cap", "glasses"]
    };
]



for (let index: number = 0; index < Studi.length; index++)

console.log(Studi[index].name);