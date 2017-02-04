import Resources from 'Resources';

const buildingTypes = {
  "Metal Mine": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.1,
      "Aluminum": 1,
      "Iron": 1,
    })},
  "Steel Mill": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.3,
      "Iron": -1,
      "Steel": 0.5,
    })},
  "Elemental Quarry": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.1,
      "Aluminum": 1,
      "Iron": 1,
    })},
  "Solar Panel": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": 1,
    })},
  "Wind Turbine": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": 1,
    })},
  "Geothermal Plant": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": 2,
    })},
  "Water Pump": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Water": 1,
    })},
  "Greenhouse Farm": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Water": -1,
      "Food": 0.5,
    })},
  "Electrolysis Reactor": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.3,
      "Water": -1,
      "Oxygen": 0.25,
      "Fuel": 0.5,
    })},
  "Solar Condenser": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Water": 1.5,
      "Oxygen": 0.5,
      "Carbon": 0.5,
    })},
  "Electronics Factory": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Aluminum": -0.25,
      "Carbon": -0.5,
      "Silicon": -0.25,
      "Electronics": 0.25,
    })},
  "Glass Kiln": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Oxygen": -0.25,
      "Silicon": -1,
      "Glass": 0.5,
    })},
  "Chemical Refinery": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Fuel": -0.5,
      "Carbon": -0.5,
      "Chemicals": 0.5,
    })},
  "Pleasure Dome": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -1,
    })},
  "Patent Lab": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Optimization Center": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Hacker Array": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Offworld Market": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "HQ2": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Water": -0.2,
      "Food": -0.3,
      "Oxygen": -0.1,
    })},
  "HQ3": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Water": -0.4,
      "Food": -0.6,
      "Oxygen": -0.2,
    })},
  "HQ4": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Water": -0.6,
      "Food": -0.9,
      "Oxygen": -0.3,
    })},
  "HQ5": {
    toBuild: new Resources({
    }),
    toRun: new Resources({
      "Water": -0.8,
      "Food": -1.2,
      "Oxygen": -0.4,
    })},
};

export default class Buildings {
  constructor () {
    
  }
  
  // [Symbol.iterator]() {
  //   buildingTypes.map( (t) => {
  //     return {
  //       amount: this.amounts[t] || 0,
  //       name: t,
  //     };
  //   });
  // }
  map = (callback) => {
    return Object.entries(buildingTypes).map(callback);
  }
  
  static types() {
    return buildingTypes;
  }
}