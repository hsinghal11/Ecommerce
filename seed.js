const mongoose = require("mongoose");

const Product = require("./models/Product");

const products = [
  {
    name: "KTM Enduro 390 Motercycle",
    price: 338310,
    img: "https://m.media-amazon.com/images/I/71fvH2BN9-L._SL1500_.jpg",
    desc: "Engine: Single Cylinder, Liquid Cooled, DOHC, FI Engine | Max. Torque - 39 Nm | Transmission - 6-speed | Primary Drive - 86:33 | Secondary Gear Ratio - 48:14",
  },
  {
    name: "Bajaj Avenger 220 Cruise Motorcycle",
    price: 146106,
    img: "https://m.media-amazon.com/images/I/51zNfi2-HlL._SL1000_.jpg",
    desc: "Performance: Top Speed: 113 Kmph | Max Torque: 17.5 Nm @ 7000 rpm | Motor Power: 14 kW @ 8400 rpm",
  },
  {
    name: "Bajaj Pulsar Rs 200 Motorcycle",
    price: 174419,
    img: "https://m.media-amazon.com/images/I/51Bwgp3URHL._SX522_.jpg",
    desc: "Performance: Top Speed: 135 Kmph | Max Torque: 18.7 Nm @ 8000 rpm | Motor Power: 18 kW (24.5 PS) @ 9750 rpm",
  },
  {
    name: "KTM Duke 200 Bike Electronic",
    price: 206386,
    img: "https://m.media-amazon.com/images/I/61gpcewMCEL._SX522_.jpg",
    desc: "Performance: Maximum Power - 25 PS @ 10,000 rpm | Max. Torque - 19.3 Nm @ 8,000 rpm | Top Speed - 140 km/h | Compression Ratio - 11.3:1",
  },
];

async function seedDB() {
  // await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("data seeded successfully");
}

module.exports = seedDB;
