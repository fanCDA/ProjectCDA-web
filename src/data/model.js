// DATA = {                        // Global data
//   Podwojne: [                   // Tablica obiektow (podwojnych stron)
//     {                           // Obiekt reprezentujacy 2 strony
//       id: i                     // Tmp id
//       Strony: [                 // Tablica pojedynczych stron
//         {                       // Obiekt reprezentujacy pojedyncza strone
//           CzesciStrony: [       // Tablica pojedynczych czesci stron
//             {                   // Obiekt reprezentujacy czesc pojedynczej strony
//               text: ''
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

const DATA = {
  Podwojne:[]
};

for(let i=0; i<50; i++) {
  let lewa = [{bg: 0, text: '0'}];
  for(let j=0; j<i%4; j++) {
    lewa.push({
      bg: j+1,
      text: `${j+1}`
    });
  }

  DATA.Podwojne.push({
    id: i,
    Strony: [
      {
        CzesciStrony: lewa
      },
      {
        CzesciStrony: [
          {text: '0'}
        ]
      }
    ]
  });
}

export default DATA;