// let yas = 35;

// function hesapla() {
//     let yas = 45
//     console.log(yas)
//     if (yas > 35) {
//         let yas = 55
//         console.log(yas)
//     }
//     return yas
// }

// let yas1 = hesapla();

// console.log(yas);
// console.log(yas1);

//................................................................................................................................
//Gün2 Görev 4: Sayı tahmin oyunu

// function tahminEt(mod, sayi) {
//     if (mod === 'kolay') {
//         let randomSayi = Math.floor(Math.random() * 3);
//         if (randomSayi === sayi) {
//             console.log('Kazandın!' + randomSayi);
//         } else if (sayi < 3 && sayi >= 0 && sayi !== randomSayi) {
//             console.log('Kaybetttin (kullanıcı: ' + sayi + ' bilgisayar: ' + randomSayi + ")");
//         } else {
//             console.log('0-3 aralığında seçim yapmalısın');
//         }
//     } else if (mod === 'orta') {
//         let randomSayi = Math.floor(Math.random() * 5);
//         if (randomSayi === sayi) {
//             return 'Kazandın!';
//         } else if (sayi < 5 && sayi >= 0 && sayi !== randomSayi) {
//             return 'Kaybetttin (kullanıcı: ' + sayi + ' bilgisayar: ' + randomSayi + ")";
//         } else {
//             return '0-5 aralığında seçim yapmalısın';
//         }
//     } else if (mod === 'zor') {
//         let randomSayi = Math.floor(Math.random() * 7);
//         if (randomSayi === sayi) {
//             console.log('Kazandın!');
//         } else if (sayi < 7 && sayi >= 0 && sayi !== randomSayi) {
//             console.log('Kaybetttin (kullanıcı: ' + sayi + ' bilgisayar: ' + randomSayi + ")");
//         } else {
//             console.log('0-7 aralığında seçim yapmalısın');
//         }
//     }
// }

// tahminEt('zor', -0.5);

//................................................................................................................................
//Gün2 Görev 5: Taş Kağıt Makas



function tasKagitMakas(kullanici) {
    let oyun = ["taş", "kağıt", "makas"];
    let index = Math.floor(Math.random() * 3);
    let bilgisayar = oyun[index];

    if (kullanici === bilgisayar) {
        return `Senin seçimin: ${kullanici}. Bilgisayarın seçimi: ${bilgisayar}. Beraberlik!`;
    } else if (kullanici === "taş" && bilgisayar === "kağıt"
        || kullanici === "kağıt" && bilgisayar === "makas"
        || kullanici === "makas" && bilgisayar === "taş") {
        return `Senin seçimin: ${kullanici}. Bilgisayarın seçimi: ${bilgisayar}. Kaybettin!`;
    } else {
        return `Senin seçimin: ${kullanici}. Bilgisayarın seçimi: ${bilgisayar}. Kazandın!`;
    }
}

let tas = tasKagitMakas("makas");
console.log(tas);

