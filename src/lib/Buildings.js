import Resources from 'Resources';
import ExpansiveBuildings from './buildingResources/Expansive';
import RoboticBuildings from './buildingResources/Robotic';
import ScavengerBuildings from './buildingResources/Scavenger';
import ScientificBuildings from './buildingResources/Scientific';

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
  
  static types() {
    return ExpansiveBuildings;
  }
  
  forHqType = (hqType) => {
    switch (hqType) {
      case "Scientific": console.log({hqType});
                         return {
                           map: (cb) => {return Object.entries(ScientificBuildings).map(cb);},
                           types: () => {return ScientificBuildings;}
                         };
      case "Robotic": console.log({hqType});
                         return {
                           map: (cb) => {return Object.entries(RoboticBuildings).map(cb);},
                           types: () => {return this.type();}
                         };
      case "Scavenger": console.log({hqType});
                         return {
                           map: (cb) => {return Object.entries(ScavengerBuildings).map(cb);},
                           types: () => {return this.type();}
                         };
      case "Expansive": console.log({hqType});
                         return {
                           map: (cb) => {return Object.entries(ExpansiveBuildings).map(cb);},
                           types: () => {return this.type();}
                         };
      default: console.log({hqType});
               return {
                 map: (cb) => {return Object.entries(ExpansiveBuildings).map(cb);},
                 types: () => {return this.type();}
               };
    }
  }
}