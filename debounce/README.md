# Debounce

A debounce function is a rate limiter for any target function's invocation. A quick example:  you have a resize listener on the window which does some element dimension calculations and (possibly)  repositions a few elements.  That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your site down.  Why not limit the rate at which the function can fire?

There are lot of libraries that provide this implementation, such as

  - Lodash
  - Underscore
  - and so on. 

But mujhe khujli thi, so maine khud se implement kiya ! (I got itched, that's why this code i stiched.)

### Usage

```sh
function print() {
    console.log("Print function");
}

var debouncedPrint = debounce(print, 3000);
print();
print();
print();
print();
print();
print();
print();
print();
print();
print();
print();

// Will print the message only once, for no matter how many invocations are done in 3 seconds. 

```

### Todos
 - Write MORE Tests
 - Add Night Mode
 - 
 ReadME written using: https://dillinger.io/