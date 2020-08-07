const students = [
    {id:22, name:'said'},
    {id:42, name:'ali'},
    {id:52, name:'topo'},
    {id:44, name:'raju'},
];
const name = students.map(element => element.id);
const bigger = students.find(element => element.id > 40);
console.log(bigger);


