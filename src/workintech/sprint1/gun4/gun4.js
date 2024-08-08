//Görev 4: Cümledeki En Uzun Kelime
// function getLongestWord(str) {
//     let arr = str.split(' ');
//     let uzunluk = 0;
//     let kelime = '';
//     for (let i of arr) {
//       if (i.length > uzunluk) {
//         uzunluk = i.length;
//         kelime = i;
//       }
//     }
//     return kelime;
//   }
//   let uzunKelime = getLongestWord('ÖTV matrah artırımı ile arabalar ucuzlayacak');
//   console.log(uzunKelime);

//   const word = 'ÖTV matrah artırımı ile arabalar ucuzlayacak';

/////////////////////////////////////////////////////////////////////////////////////////

function tutarHesapla(arr) {
    const bagisci = 'Ahmet';
    const bagisci1 = bagisci.toLowerCase().split('');
    let arr1 = [];
    
    for (let i of arr) {
        arr1.push(i.toLowerCase().split(""));
    }
    console.log(arr1);
    let toplam = 0;
    for (let i of arr1) {
        for (let j of i) {
            for (let k of bagisci1) {
                if (k === j) {
                    toplam = toplam + 1;
                }
            }
        }
    }
    console.log(toplam * 1000);
    return toplam * 1000 ;
}
const yardimYapanlar = [
    'Leyla Mert',
    'Fevzi Kaya',
    'Aysel Hataylı',
    'Furkan Menekşe',
    'Zeliha Aydın',
];

tutarHesapla(yardimYapanlar);