
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
  constructor(amounts = {}, onChange = [], defaultValue = 0) {
    amounts = amounts || {};
    this.amounts = {};
    for (const index in types) {
      const t = types[index];
      if (amounts[t] !== undefined){
        this.amounts[t] = amounts[t];
      } else {
        this.amounts[t] = defaultValue;
      }
    }
    if (typeof(onChange) === 'function')
      this.onChangeHandlers = [onChange];
    else if (typeof(onChange) === 'object')
      this.onChangeHandlers = onChange;
  }
  
  onChange = () => {
    for (const index in this.onChangeHandlers) {
      if (typeof(this.onChangeHandlers[index]) === 'function')
        this.onChangeHandlers[index]();
    }
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
      return {
        amount: this.amounts[t],
        name: t,
      };
    }).map(callback);
  }
  
  get = (resourceName) => {
    return this.amounts[resourceName];
  }
  
  set = (resourceName, value) => {
    return this.amounts[resourceName] = value;
  }
  
  setter = (resourceName) => {
    return (value) => {
      this.amounts[resourceName] = value;
      this.onChange();
      return this.amounts[resourceName];
    };
  }
  
  static types() {
    return types;
  }
  
  sumOfProducts = (otherResources) => {
    if (!otherResources){
      return 0;
    }
    let sum = 0;
    for (const index in types) {
      const t = types[index];
        sum += this.get(t) * otherResources.get(t);
    }
    return sum;
  }
}