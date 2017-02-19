import Resources from 'Resources';

export default {
  "Solar Panel": {
    toBuild: new Resources({
      "Aluminum": 20,
      "Silicon": 100,
    }),
    toRun: new Resources({
      "Power": 1,
    })},
  "Wind Turbine": {
    toBuild: new Resources({
      "Aluminum": 20,
      "Carbon": 80,
    }),
    toRun: new Resources({
      "Power": 1,
    })},
  "Geothermal Plant": {
    toBuild: new Resources({
      Aluminum: 40,
      Steel: 60,
    }),
    toRun: new Resources({
      "Power": 2,
    })},
  "Water Pump": {
    toBuild: new Resources({
      //nothing
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Water": 1,
    })},
  "Greenhouse Farm": {
    toBuild: new Resources({
      Steel: 20,
      Glass: 10,
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Water": -1,
      "Food": 0.5,
    })},
  "Electrolysis Reactor": {
    toBuild: new Resources({
      Steel: 40,
      Aluminum: 10
    }),
    toRun: new Resources({
      "Power": -0.3,
      "Water": -1,
      "Oxygen": 0.25,
      "Fuel": 0.5,
    })},
  "Solar Condenser": {
    toBuild: new Resources({
      Glass: 5,
    }),
    toRun: new Resources({
      "Water": 1.5,
      "Oxygen": 0.5,
      "Carbon": 0.5,
    })},
  "Metal Mine": {
    toBuild: new Resources({
      //nothing
    }),
    toRun: new Resources({
      "Power": -0.1,
      "Aluminum": 1,
      "Iron": 1,
    })},
  "Steel Mill": {
    toBuild: new Resources({
      Iron: 20,
    }),
    toRun: new Resources({
      "Power": -0.3,
      "Iron": -1,
      "Steel": 0.5,
    })},
  "Elemental Quarry": {
    toBuild: new Resources({
      //nothing
    }),
    toRun: new Resources({
      "Power": -0.1,
      "Carbon": 1,
      "Silicon": 1,
    })},
  "Chemical Refinery": {
    toBuild: new Resources({
      Steel: 40,
      Carbon: 20,
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Fuel": -0.5,
      "Carbon": -0.5,
      "Chemicals": 0.5,
    })},
  "Glass Kiln": {
    toBuild: new Resources({
      Steel: 40,
      Silicon: 20,
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Oxygen": -0.25,
      "Silicon": -1,
      "Glass": 0.5,
    })},
  "Electronics Factory": {
    toBuild: new Resources({
      Iron: 40,
      Aluminum: 20,
    }),
    toRun: new Resources({
      "Power": -0.2,
      "Aluminum": -0.25,
      "Carbon": -0.5,
      "Silicon": -0.25,
      "Electronics": 0.25,
    })},
  "Patent Lab": {
    toBuild: new Resources({
      Steel: 60,
      Electronics: 40,
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Optimization Center": {
    toBuild: new Resources({
      Steel: 40,
      Electronics: 40,
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Hacker Array": {
    toBuild: new Resources({
      Steel: 60,
      Electronics: 20,
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  "Pleasure Dome": {
    toBuild: new Resources({
      Steel: 40,
      Electronics: 40,
    }),
    toRun: new Resources({
      "Power": -1,
    })},
  "Offworld Market": {
    toBuild: new Resources({
      Steel: 400,
      Glass: 100,
      Electronics: 100,
    }),
    toRun: new Resources({
      "Power": -0.5,
    })},
  //HQ toBuilds are Scientific
  "HQ2": {
    toBuild: new Resources({
      Steel: 80,
      Aluminum: 40,
      Electronics: 10,
    }),
    toRun: new Resources({
    })},
  "HQ3": {
    toBuild: new Resources({
      Steel: 160,
      Aluminum: 80,
      Electronics: 20,
    }),
    toRun: new Resources({
    })},
  "HQ4": {
    toBuild: new Resources({
      Steel: 240,
      Aluminum: 120,
      Electronics: 30,
    }),
    toRun: new Resources({
    })},
  "HQ5": {
    toBuild: new Resources({
      Steel: 320,
      Aluminum: 160,
      Electronics: 40,
    }),
    toRun: new Resources({
    })},
};