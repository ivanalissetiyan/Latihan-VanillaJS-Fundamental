const nomor = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return "Salak";

        case 2:
            return "jeruk";

        case 3:
            return "Durian";

        case 4:
            return "Apel";
    
        default:
            return "Semangka";
    }
}

console.log(pilihBuah());