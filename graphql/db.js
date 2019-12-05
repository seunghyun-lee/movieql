export const people = [
    {
        id: "1",
        name: "seunghyun",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "kevin",
        age: 20,
        gender: "male"
    },
    {
        id: "3",
        name: "lina",
        age: 30,
        gender: "female"
    },
    {
        id: "4",
        name: "reed",
        age: 50,
        gender: "male"
    },
    {
        id: "5",
        name: "soin",
        age: 10,
        gender: "male"
    },
    {
        id: "6",
        name: "Mike",
        age: 28,
        gender: "male"
    },
    {
        id: "7",
        name: "zelda",
        age: 20,
        gender: "female"
    },
    {
        id: "8",
        name: "link",
        age: 22,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};