const namaHewan = ["kucing", "semut", "kambing", "ayam"]; //Membuat sebuah Array
namaHewan.forEach(function (item, index, array) {
    console.log(item, index, array); //Perulangan pada Array
});

// namaHewan.push("kelinci"); //Menambahkan elemen pada bagian akhir sebuah Array
// console.log(namaHewan);

// namaHewan.pop(); //Menghapus elemen di akhir sebuah Array
// console.log(namaHewan);

// namaHewan.shift(); //Menghapus elemen di awal sebuah Array
// console.log(namaHewan);

// namaHewan.splice(pos, 1);
// console.log(namaHewan);

// namaHewan.push("kelinci"); //Mencari (nomor) index elemen pada sebuah Array
// console.log(namaHewan.indexOf("semut") + 1);

namaHewan.push("kelinci");


// const indexKambing = namaHewan.indexOf("kambing");
// console.log(indexKambing)
// namaHewan.splice(indexKambing, 2);

// console.log(namaHewan); //Mencari (nomor) index elemen pada sebuah Array

const namaHewanLama = namaHewan.slice();

namaHewan.pop();
console.log("Nama Hewan: ", namaHewan);
console.log("Nama Hewan Lama:", namaHewanLama);
