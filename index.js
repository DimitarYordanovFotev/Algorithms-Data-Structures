import { HashTable } from './HashTable/HashTable.js'

let hashTable = new HashTable();
hashTable.insert({ key: 5, value: 'Test 5' });
hashTable.insert({ key: 10, value: 'Test 10' });
hashTable.insert({ key: 15, value: 'Test 10' });
/* hashTable.insert({ key: 15, value: 'Test 15' }); */
hashTable.insert({ key: 12, value: 'Test 12' });
console.log(hashTable.search({ key: 10, value: "Test 10" }));
console.log(hashTable.search({ key: 10, value: "Test 11" }));
console.log(hashTable.search(10));