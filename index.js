// Code your solution here
drivers = ['steve', 'ryan', 'dillan', 'dustin', 'jody', 'zach', 'brandon']

function findMatching(drivers, name) { 
  return drivers.filter(function (driverName) { 
    return driverName.toLowerCase() === name.toLowerCase();
  });
} 

function fuzzyMatch(list, partialname) {
  let lengthOfName = partialname.length 
  return drivers.filter(function (driverName) { 
    return driverName.slice() 
} 

function matchName() {
}