// Code your solution in this file!
const logDriverNames = (driver) =>{
  driver.forEach(d => console.log(d.name))
}

const logDriversByHometown = (driver, location) =>{
  const a = driver.filter(d => d.hometown === location)
  logDriverNames(a)
}


const driversByRevenue = (driver) => {
const drivers = driver.slice()
return drivers.sort(function (a, b) {
  return a.revenue - b.revenue;
});
}

const driversByName = (driver) => {
const drivers = driver.slice()
return drivers.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
}

const totalRevenue = (driver) => {
  var initialValue = 0;
  var sum = driver.slice().reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
},initialValue)
return sum
}

const averageRevenue = (driver) => {
  const total = totalRevenue(driver)
  return total/(driver.length)
}
