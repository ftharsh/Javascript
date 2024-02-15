## JavaScript Object Example: Exploring Properties and Key-Value Pairs

This repository contains a JavaScript code snippet demonstrating the creation, modification, and properties of a JavaScript object. It highlights key features such as mutability and reference types.

### Code Explanation:

1. The code defines an object named `item` with four key-value pairs:
   - `name`: "harsh" (string)
   - `male`: true (boolean)
   - `height`: 170 (number)
   - `age`: 33 (number)
2. It shows accessing the object's initial state using `console.log`.
3. The `age` property is changed to 44.
4. The `name` property is modified to "harry".
5. The updated object is logged again.

### Understanding Objects:

- **Key-Value Pairs:** Objects store data in key-value pairs, where keys act as unique identifiers for their corresponding values.
- **Unordered Collections:** The order in which key-value pairs are stored is not guaranteed. Accessing data happens by key, not position.
- **Mutability:** Objects are mutable, meaning you can change their properties after creation, as demonstrated with `item.age` and `item.name`.
- **Reference Types:** When you assign an object to a variable, you're not copying the object itself, but rather a reference to its location in memory. Changes made through one variable affect all other variables referencing the same object.

### Modifying Key-Value Pairs:

- You can modify existing key-value pairs using dot notation (`item.age`) or bracket notation (`item['age']`).
- You cannot directly change keys themselves. To effectively "reassign" a key, create a new key-value pair and delete the old one.
- Attempting to access a nonexistent key will result in `undefined`.

### Example:

```javascript
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
```
### Key Takeaways:

- **Objects in JavaScript**: Objects offer a powerful way to manage complex data structures in JavaScript. They allow for the organization and manipulation of data through key-value pairs, providing flexibility and scalability in code design.

- **Understanding Mutability and Reference Types**: Grasping mutability and reference types is crucial for writing clear and maintainable code. In JavaScript, objects are mutable, meaning their properties can be changed after creation. Additionally, when assigning an object to a variable, you're working with a reference to the object's location in memory, rather than a copy of the object itself. This understanding helps in avoiding unintended side effects and managing data effectively.

- **Considerations for Key Modification**: It's important to be aware of the limitations and implications of modifying keys in JavaScript objects. While values within an object can be easily modified using dot notation or bracket notation, directly changing keys themselves can lead to unexpected behavior. Instead, it's recommended to create new key-value pairs or utilize appropriate methods for key manipulation to maintain code clarity and integrity.
