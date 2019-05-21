// let Gena = {
//     name: "Gena",
//     age: 33,
//     gender: "male",
//     height: 178,
//     weight: 70
// };


// let Boris = {
//     name: "Boris",
//     age: 17,
//     gender: "male",
//     height: 198,
//     weight: 90
// };

// let Vitalii = {
//     name: "Vitalii",
//     age: 20,
//     gender: "male",
//     height: 178,
//     weight: 70
// };

let candidats = [];

candidats[0] = {
    name: "Gena",
    age: 33,
    gender: "male",
    height: 178,
    weight: 70
}


candidats[1] = {
    name: "Boris",
    age: 17,
    gender: "male",
    height: 198,
    weight: 90
}

candidats[2] = {
    name: "Vitalii",
    age: 20,
    gender: "male",
    height: 178,
    weight: 70
}


candidats[3] = {
    name: "Petya",
    age: 22,
    gender: "male",
    height: 171,
    weight: 60
}


let new_array = [];
let  new_array_counter = 0;

// cycle on array


document.write("<b>List of candidats: </b><br>");
for(let i in candidats){
    // alert(candidats[i].name);

    document.write( 
       "name: " + candidats[i].name + " age: " + candidats[i].age + 
       " gender: " + candidats[i].gender + 
       " height: " + candidats[i].height + " weight: " + candidats[i].weight + " <br>"
        );


}

document.write("<b>Sorting by age: </b><br>");
for(let j in candidats){
    if(candidats[i].age > 20){
        new_array[new_array_counter] = candidats[i];
        new_array_counter++;     
    }

}

for( let j in new_array){
    document.write(new_array[j].name);
}