const ages = (persons) => {
    const pernsAge = {};
    for (const human in persons) {
        const data = persons[human];
        pernsObj[human] = data.died - data.born;
    };
    return pernsAge;
};

/*
Example:
const personsExpl = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(ages(personsExpl));
*/