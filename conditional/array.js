const namaHewan = ["kucing", "semut", "kambing", "ayam"]; //Membuat sebuah Array

// namaHewan.forEach(function (item, index, array) {
//     console.log(item, index); //Perulangan pada Array
// });

namaHewan.push("kelinci");


// const namaHewanLama = namaHewan.slice();

// namaHewan.pop();

// console.log("Nama Hewan: ", namaHewan);

// console.log("Nama Hewan Lama:", namaHewanLama);

// for (let index = 0; index < namaHewan.length; index++) {
//     const element = namaHewan[index];
//     console.log(element);
// }

// let index = 0
// while (index < namaHewan.length) {
//     const element = namaHewan[index];
//     console.log(element);
//     index++
// }

console.log(
    namaHewan
    .filter( function(hewan, ke){
        return hewan == "semut";
    })
    .map( function(hewan, ke) {
        return `${hewan} adalah hewan ke ${ke + 1}`;
    })
); 

