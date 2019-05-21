

// let Gena = {
//     name: "Gena",
//     age: 33,
//     gender: "male",
//     height: 178,
//     weight: 70
// }


// let Boris = {
//     name: "Boris",
//     age: 17,
//     gender: "male",
//     height: 198,
//     weight: 90
// }

// let Vitalii = {
//     name: "Vitalii",
//     age: 20,
//     gender: "male",
//     height: 178,
//     weight: 70
// }


// let Petya = {
//     name: "Petya",
//     age: 22,
//     gender: "male",
//     height: 171,
//     weight: 60
// }

// let candidats = [
    
// ];


let candidats = [
    {
        name: "Gena",
        age: 33,
        gender: "male",
        height: 178,
        weight: 70
    },
    {
        name: "Boris",
        age: 17,
        gender: "male",
        height: 198,
        weight: 90
    },
    {
        name: "Vitalii",
        age: 20,
        gender: "male",
        height: 178,
        weight: 70
    },
    {
        name: "Petya",
        age: 22,
        gender: "male",
        height: 171,
        weight: 60
    }
];




document.write("<b>List of candidats: </b><br>");

for(let i in candidats){
    // alert(candidats[i].name);

    document.write( 
       "name: " + candidats[i].name + " age: " + candidats[i].age + 
       " gender: " + candidats[i].gender + 
       " height: " + candidats[i].height + " weight: " + candidats[i].weight + " <br>");
}

let  new_array_counter = 0;
let new_array = [];

document.write("<b>Sorting by age(younger than 21): </b><br>");

for(let j in candidats){
    if(candidats[j].age <= 20){
        new_array[new_array_counter] = candidats[j];
        new_array_counter++;     
    }
}

for( let j in new_array){
    document.write(new_array[j].name + '<br>');
}