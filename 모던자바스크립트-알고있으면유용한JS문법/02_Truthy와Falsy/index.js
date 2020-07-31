// Truthy and Falsy
function print(person) {
    if (person === undefined || person === null) {
        return;
    }
    console.log(person.name);
}
const person = null
print();
  
function print1(person1) {
    if (!person1) {
        return;
    }
    console.log(person1.name);
}
const person1 = null
print1();
  
// falsy한 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);
  
// truthy한 값
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{})
  
const value = { a: 1};
if (value) {
    console.log('value 가 Truthy 하네요');
}
  
const truthy = value ? true : false;
console.log(truthy);
  
const truthy1 = !!value;
console.log(truthy1);