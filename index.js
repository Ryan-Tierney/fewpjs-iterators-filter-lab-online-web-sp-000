// Code your solution here
drivers = ['steve', 'ryan', 'dillan', 'dustin', 'jody', 'zach', 'brandon']

function findMatching(drivers, name) { 
  return drivers.filter(function (driverName) { 
    return driverName.toLowerCase() === name.toLowerCase();
  });
} 

function fuzzyMatch(drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) { 
    return driverName.slice(0, lengthOfName) === partialName;
  });
} 

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName() {
}