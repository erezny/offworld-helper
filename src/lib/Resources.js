
const types= [
  "Power",
  "Water",
  "Food",
  "Oxygen",
  "Fuel",
  "Aluminum",
  "Iron",
  "Steel",
  "Carbon",
  "Silicon",
  "Chemicals",
  "Glass",
  "Electronics",
];

export default class Resources {
  constructor(amounts) {
    this.amounts = amounts;
  }
  
  // * [Symbol.iterator]() {
  //   for (const t in types) {
  //     if (this.amounts[t] !== undefined){
  //       yield this.amounts[t];
  //     } else {
  //       yield 0;
  //     }
  //   }
  // }
  //
  map(callback) {
    return types.map( (t) => {
      if (this.amounts[t] === 1){
        console.log(t);
        }
      return {
        amount: this.amounts[t],
        name: t,
      };
    }).map(callback);
  }
  
  static types() {
    return types;
  }
}