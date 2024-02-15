let item = { name: 'harsh', age: 33 };

// Modifying existing property
item.age = 44;
console.log(item); // { name: 'harsh', age: 44 }

// Accessing nonexistent property
console.log(item.occupation); // undefined

// Attempting to change key directly (will not work)
item['name'] = 'alice'; // This will create a new property 'name'
console.log(item); // { name: 'harsh', age: 44, name: 'alice' }

// Correct way to "reassign" a key
item.nickName = 'alice';
delete item.name;
console.log(item); // { age: 44, nickName: 'alice' }
=========================================================================================================================================
  let item = {
  name: ' harsh',
  male: true,
  height: 170,
  age: 33,
};

console.log(item);
item['coder'] = true; // added a new value

item['name'] = 'harry'; // reassigned the value of name
console.log(item);
console.log(item['name']) // points harsh
