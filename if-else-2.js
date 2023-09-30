let nilai = 70

if (nilai >= 80 && nilai <= 100) {
    nilai = "A"
} else if (nilai >= 70 && nilai < 80) {
    nilai = "B"
} else if (nilai >= 60 && nilai < 70) {
    nilai = "C"
} else {
    nilai = "D"
}


console.log(nilai)


console.log()
// && semua kondisi harus terpenuhi lali dia akan menghasilkan nilai true
// or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true

nilai = 80

let banding = nilai >= 80 && nilai <= 100; // antara true or false
console.log (banding, "&&")

let banding2 = nilai >= 80 || nilai <= 100; // antara true or false
console.log (banding2, "||")

let banding3 = nilai != 50 // selain nilai ini
console.log (banding3, "&&")

console.log()

// apa bedanya == dengan ===
let x = 50; // tipe data integer
let y = "50" // tipe data string

let banding4 = x == y;
console.log(banding4, "4"); // Kalo ini tipe datanya boleh sama boleh engga
let banding5 = x === y;
console.log(banding5, "5"); // Kalo ini tipe datanya HARUS SAMA

console.log()

// if else bisa dibuat bercabang
let number = 6;
if (number > 5) {
    if (number % 2 === 0) {
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan dari 5 dan genap")
    } else {
        console.log("lebih kecil atau sama dengan dari 5 dan ganjl")
    }
}