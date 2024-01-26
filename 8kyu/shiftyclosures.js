// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

// My Solution
const greetAbe = () => {
  let name = 'Abe';
  return 'Hello, ' + name + '!'; 
}

const greetBen = () => {
  let name = 'Ben';
  return 'Hello, ' + name + '!';
}