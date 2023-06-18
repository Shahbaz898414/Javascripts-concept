// //////////////////// H1 /////////////

// const H1 = document.createElement("h1");
// const textnode = document.createTextNode("I am H1 Tag");
// H1.appendChild(textnode);

// H1.style.color='red';
// H1.style.fontFamily='sans-serif';
// H1.style.fontWeight = 'bold';
// H1.id="newh1";
// H1.className="newh1classname";

// document.body.appendChild(H1);

// /////////////// p /////////////

// const p = document.createElement("p");
// const textnodeP = document.createTextNode("I am Tag P");
// p.appendChild(textnodeP);

// p.style.color='yellow';
// p.style.fontFamily='sans-serif';
// p.style.fontWeight = 'bold';
// p.id="newp";
// p.className="newpclassname";
// p.style.fontSize='50px'

// document.body.appendChild(p);

// //////////////////// li /////////////////
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const textnodeLi = document.createTextNode("I am li Tag ");
// li.appendChild(textnodeLi);

// ul.appendChild(li);

// li.style.color='pink';
// li.style.fontFamily='sans-serif';
// li.style.fontWeight = 'bold';
// li.id="newli";
// li.className="newliclassname";
// li.style.fontSize='50px'

// document.body.appendChild(ul);

// //////////////// a ////////////////
// const a = document.createElement("a");
// const textnodeA = document.createTextNode("I am A Tag ");
// a.appendChild(textnodeA);

// document.body.appendChild(a);

// /////////////////// BR  ///////////////////

// const br = document.createElement("br");

// document.body.appendChild(br);

// ///////////////// small //////////////////

// const small = document.createElement("small");
// const textnodeSmall = document.createTextNode("I am small Tag ");
// small.appendChild(textnodeSmall);

// document.body.appendChild(small);

// const a = [1, 2, 3, 4, 5, 6];

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

// console.log("using forEach for number");

// a.forEach((num) => {
//   console.log(num);
// });

// console.log("\n");
// const b = ["shahbaz", "dfgvb", "dfgvcv", "sdcfvb", "erfdswe"];

// console.log("using forEach for char");

// b.forEach((num) => {
//   console.log(num);
// });
// console.log("\n");

// const c = [1, "dfgvb", "dfgvcv", 3424, "erfdswe"];

// console.log("using forEach ");

// c.forEach((num) => {
//   console.log(num);
// });

// console.log("\n");

// const d = [14533, 3245, 98721, 3424, 78654];

// console.log("using forEach ");

// d.forEach((num) => {
//   console.log(num);
// });

// console.log("\n");

// const e = [null, true, false, false, true];

// console.log("using forEach ");

// e.forEach((num) => {
//   console.log(num);
// });

// filter

// odd and even

// const f1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];

// const odd = f1.filter((num) => {
//   return num % 2 != 0;
// });

// console.log("odd", odd);

// const even = f1.filter((num) => {
//   return num % 2 != 0;
// });

// console.log("even", even);

// const f2 = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "aa",
//   "ab",
//   "ac",
//   "ad",
//   "ae",
//   "af",
//   "ag",
//   "ah",
//   "ai",
//   "aj",
//   "ak",
//   "al",
//   "am",
//   "an",
//   "ao",
//   "ap",
//   "aaa",
//   "aab",
//   "aac",
//   "aad",
//   "aae",
//   "aaf",
//   "aag",
//   "aah",
//   "aai",
//   "aaj",
//   "aak",
//   "aal",
//   "aam",
//   "aan",
//   "aao",
//   "aap",
//   "aba",
//   "abb",
//   "abc",
//   "abd",
//   "abe",
//   "abf",
//   "abg",
//   "abh",
//   "abi",
//   "abj",
//   "abk",
//   "abl",
//   "abm",
//   "abn",
//   "abo",
//   "abp",
//   "aaaa",
//   "aaab",
//   "aaac",
//   "aaad",
//   "aaae",
//   "aaaf",
//   "aaag",
//   "aaah",
//   "aaai",
//   "aaaj",
//   "aaak",
//   "aaal",
//   "aaam",
//   "aaan",
//   "aaao",
//   "aaap",
//   "erdfg",
//   "erdsf",
//   "erfdf",
//   "erdfg",
//   "rfgdv",
//   "rtfgf",
// ];

// console.log(f2);
// console.log(f2.length);

// const word1 = f2.filter((word) => {
//   return word.length === 1;
// });

// console.log("word1", word1);

// const word2 = f2.filter((word) => {
//   return word.length === 2;
// });

// console.log("word2", word2);

// const word3 = f2.filter((word) => {
//   return word.length === 3;
// });

// console.log("word3", word3);

// const word4 = f2.filter((word) => {
//   return word.length === 4;
// });

// console.log("word4", word4);

// const word5 = f2.filter((word) => {
//   return word.length === 5;
// });

// console.log("word5", word5);

/////////////////////////////////////////////// map array method///////////////////////////////////////////////////////////////////////////////////////////

// const asd = ["shahbaz", "dfgvb", "dfgvcv", "sdcfvb", "erfdswe"];

// const d1 = asd.map((num) => {
//   return num.toLowerCase();
// });

// console.log(d1);

// console.log("\n");

// const df = ["shahbaz", "dfgvb", "dfgvcv", "sdcfvb", "erfdswe"];

// const d2 = df.map((num) => {
//   return num[0];
// });

// console.log(d2);

// const vb = ["shahbaz", "dfgvb", "dfgvcv", "sdcfvb", "erfdswe"];

// const d3 = vb.map((num) => {
//   return num.toUpperCase();
// });

// console.log(d3);

///////////////////////     Find   /////////////////////////////////////////////////////////

// const a = [9,1,,8, 2, 3, 4, 5, 6];

// const ab=a.find((num)=>{
//   return num%2===0;
// })

// const ba=a.find((num)=>{
//   return num%2!==0;
// })

// const sa=a.find((num)=>{
//   return num===4;
// })

// console.log(ab);

// console.log("\n");
// console.log(ba);
// console.log(sa);

///////////////  findIndex  //////////////////////////////////

// const a = [9, 1, , 8, 2, 3, 4, 5, 6];

// const fI = a.findIndex((num) => {
//   return num === 1;
// });

// const f1 = a.findIndex((num) => {
//   return num === 2;
// });

// const f2 = a.findIndex((num) => {
//   return num === 0;
// });

// const f3 = a.findIndex((num) => {
//   return num === 4;
// });

// const f4 = a.findIndex((num) => {
//   return num === 6;
// });

// console.log(fI);
// console.log(f1);
// console.log(f2);
// console.log(f3);
// console.log(f4);
console.log("\n");

//////////////// includes  ////////////////////////////////

// const b = [9, 1, , 8, 2, 3, 4, 5, 6];

// console.log(b.includes(9));
// console.log(b.includes(0));
// console.log(b.includes(2));
// console.log(b.includes(1));
// console.log(b.includes(20));

///////////////////////////////// slice  //////////////////////////////////////////////

// const sliceArray = [9, 1, , 8, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16];

////////////////////////////// Ifelse  ///////////////////////////////////////////////

// const a1 = 10;
// const b1 = 13;
// const c = 12;

// if (a1 > b1 && a1 > c) {
//   console.log("a1 is");
// } else if (b1 > c && b1 > a1) {
//   console.log("b1 is");
// } else {
//   console.log("c is");
// }

/////////////////// loop ////////////////////

const loop = [9, 1,  8, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16];


for(let i=0;i<(loop.length-3);i++){
  console.log(i);
}

console.log("\n");
let i=0
while(i<loop.length){
  console.log(i);
  i++
}

