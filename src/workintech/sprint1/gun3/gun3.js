// const liste = {
//     yas: 2,
//     dogumYili: 1995,
//     isim: 4,
//     soyisim: 5,
// }

// const liste1 = [1,2,3,4,5,89,6,8]

// console.log(liste1.find((x) => x === liste.yas));

////////////////////////////////////////////////////////////////////////

// const cumle = ["Tren", "kaçtı", "bir", "kere"]

// console.log(cumle.join("").length);

//////////////////////////////////////////////////////////////////////
// Görev 3: Derece Bursları

// function calTuition(arr, ogr) {
//     if (arr.indexOf(ogr) < 0) {
//       return 150000;
//     } else if (arr.indexOf(ogr) < 3) {
//       return 0;
//     } else if (arr.indexOf(ogr) < 6) {
//       return 75000;
//     } else if (arr.indexOf(ogr) < 10) {
//       return 105000;
//     } else {
//       return 150000;
//     }
//   }

//   let ogrenciler = [
//     'Emre',
//     'Erdem',
//     'Hatice',
//     'Fatih',
//     'Ayşe',
//     'Selen',
//     'Alp',
//     'Mehmet',
//     'Turan',
//     'Melis',
//     'Gamze',
//   ];

//   console.log(calTuition(ogrenciler,'Alp'));
/////////////////////////////////////////////////////////////////////
//Görev 4: Arrayden eleman çıkarmak 
// function removeItems(arr) {
//   arr.pop();
//   arr.pop();
//   arr.shift();
//   arr.shift();
//   let uzun = arr.length;
//   if (uzun % 2 !== 0) {
//     let uzun1 = Math.floor(uzun / 2 );
//     let arr1 = arr.slice(0, uzun1);
//     let arr2 = arr.slice(uzun1, uzun);
//     arr2.shift();
//     let arr3 = arr1.concat(arr2);
//     console.log(arr3);
//   }
//   console.log(arr);
// }

// let liste = [1, 5, 9, 12, 17, 14 , 16 , 18 ,21];
// removeItems(liste);

///ikinci yöntem

// function removeItems(arr) {
//   arr.splice(0, 2);
//   arr.splice(-2, 2);
//   if (arr.length % 2 === 1) {
//     const indeks = Math.floor(arr.length / 2);
//     arr.splice(indeks, 1);   // eleman çıkarma
//     arr.splice(-1,0,42);     // eleman ekleme
//     console.log(arr);
//     return arr;
//   }
//   return arr;
// }

// let liste = [1, 5, 9, 12, 17, 14, 16, 18, 21];
// removeItems(liste);

/////////////////////////////////////////////////////////////////////////////////////
//Görev 5: Tiyatro biletleri
// function groupEvenAndOdds(arr) {
//   let ciftNo = [];
//   let tekNo = [];

//   if (arr[0] % 2 === 0) {
//     ciftNo.push(arr[0]);
//   } else {
//     tekNo.push(arr[0]);
//   }
//   if (arr[1] % 2 === 0) {
//     ciftNo.push(arr[1]);
//   } else {
//     tekNo.push(arr[1]);
//   }
//   if (arr[2] % 2 === 0) {
//     ciftNo.push(arr[2]);
//   } else {
//     tekNo.push(arr[2]);
//   }
//   if (arr[3] % 2 === 0) {
//     ciftNo.push(arr[3]);
//   } else {
//     tekNo.push(arr[3]);
//   }
//   if (arr[4] % 2 === 0) {
//     ciftNo.push(arr[4]);
//   } else {
//     tekNo.push(arr[4]);
//   }
//   if (arr[5] % 2 === 0) {
//     ciftNo.push(arr[5]);
//   } else {
//     tekNo.push(arr[5]);
//   }

//   let bilet1 = ciftNo.concat(tekNo);
//   let bilet2 = [];
//   bilet2 = [...bilet2 , ...bilet1]
//   let bilet3 = [];
//   bilet3 = [...bilet3 , ...ciftNo , ...tekNo];
//   console.log(bilet3);
// }

// const biletNo = [1, 5, 9, 12, 14, 17];
// groupEvenAndOdds(biletNo);


/////////////////////////////////////////////////////////////////////////////////////
//Gün Projesi: Elektrikli Araba Çekilişi

// function lottery(arr) {
//   let arr1 = arr.slice(0, 5);
//   arr1.push(arr[9]);
//   arr1.push(arr[19]);
//   arr1.push(arr[29]);
//   arr1.push(arr[39]);
//   arr1.push(arr[49]);
//   let indeks = Math.floor(Math.random() * 50);
//   console.log(arr1.indexOf("Ayşe"));
//   if (
//     arr1.indexOf(arr[indeks]) !== -1
//   ) {
//     indeks = Math.floor(Math.random() * 50);
//     console.log(indeks);
//   } else {
//     arr1.push(arr[indeks]);
//     console.log(arr1);
//   }
//   return arr1;
// }

// let names = [
//   "Ali", "Ayşe", "Fatma", "Ahmet", "Mehmet", "Zeynep", "Emre", "Elif", "Hüseyin", "Merve",
//   "Okan", "Selin", "Gökhan", "Ceren", "Kaan", "Burcu", "Deniz", "Canan", "Mustafa", "Seda",
//   "Kadir", "Serap", "Onur", "Sibel", "Mert", "Eda", "Emine", "Tuna", "Gülcan", "Aliye",
//   "Aykut", "Fatih", "Ceyda", "Burak", "Gülden", "Melis", "Murat", "Seda", "Tayfun", "Gizem",
//   "Yasin", "Neslihan", "Alper", "Özge", "Ersin", "Hande", "Emel", "Samet", "Derya", "Turgut",
//   "Esra", "Ferhat", "Cansu", "Veli", "Aysun"
// ]
// lottery(names);

/////////////////////////////////////////////////////////////////////////////////
// ikinci yol - (ilk yapılan yol tam olarak doğru çalışmaz).
function lottery(arr) {
  let arr1 = arr.slice(0, 5);
  arr1.push(arr[9]);
  arr1.push(arr[19]);
  arr1.push(arr[29]);
  arr1.push(arr[39]);
  arr1.push(arr[49]);
  let arr2 = [];
  for(let i of arr){
    if(arr1.find((e) => e === i )){
      continue;
    } else {
      arr2 = [...arr2 , i];
    }
  }
  const indeks = Math.floor(Math.random() * 40);
  arr1 = [...arr1 , arr2[indeks]];
  console.log(arr1);
}

let names = [
  "Ali", "Ayşe", "Fatma", "Ahmet", "Mehmet", "Zeynep", "Emre", "Elif", "Hüseyin", "Merve",
  "Okan", "Selin", "Gökhan", "Ceren", "Kaan", "Burcu", "Deniz", "Canan", "Mustafa", "Seda",
  "Kadir", "Serap", "Onur", "Sibel", "Mert", "Eda", "Emine", "Tuna", "Gülcan", "Aliye",
  "Aykut", "Fatih", "Ceyda", "Burak", "Gülden", "Melis", "Murat", "Tayyib", "Tayfun", "Gizem",
  "Yasin", "Neslihan", "Alper", "Özge", "Ersin", "Hande", "Emel", "Samet", "Derya", "Turgut",
  ]
lottery(names);






