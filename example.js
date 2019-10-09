const items = [
  {
    name: 'Bike',
    price: 100
  },
  {
    name: 'TV',
    price: 200
  },
  {
    name: 'Album',
    price: 10
  },
  {
    name: 'Book',
    price: 5
  },
  {
    name: 'Computer',
    price: 1000
  }
];
// 6
const filteredItems = items.filter(item => {
  return item.price <= 100;
});

console.log(filteredItems);

//7
const itemName = items.map(item => {
  return item.name;
});

console.log(itemName);

//8
const foundItem = items.find(item => {
  return item.name === 'Bike';
});

console.log(foundItem);

//9
items.forEach(item => {
  console.log(item.price);
});

//10

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

//11

const list = [1, 2, 3, 4];

const includetwo = list.includes(2);
