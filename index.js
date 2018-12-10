// Code your solution in this file!

function logDriverNames (drivers) {
  return drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown (drivers, arg) {
  return drivers.forEach(driver => driver.hometown === arg ? console.log(driver.name) : null);
}

function driversByRevenue (drivers) {
  let newDrivers = [...drivers];
  newDrivers.sort((d1, d2) => {
    return d1.revenue - d2.revenue;
  })
  return newDrivers;
}

function driversByName (drivers) {
  let newDrivers = [...drivers];
  newDrivers.sort((d1, d2) => {
    return d1.name.localeCompare(d2.name);
  })
  return newDrivers;
}

function totalRevenue (drivers) {
  return drivers.reduce((agg, driver) => {
    return agg + driver.revenue
  }, 0)
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
