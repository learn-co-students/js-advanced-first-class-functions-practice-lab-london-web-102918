// Code your solution in this file!
const drivers = [
  { name: "Bobby", hometown: "Pittsburgh", revenue: 3000 },
  { name: "Sally", hometown: "New York", revenue: 2000 },
  { name: "Sammy", hometown: "Pittsburgh", revenue: 2500 },
  { name: "Annette", hometown: "Los Angeles", revenue: 6000 },
  { name: "Bobby", hometown: "Tampa Bay", revenue: 5000 }
];

function logDriverNames(drivers) {
  drivers.forEach(driver => {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    driver.hometown === location && console.log(driver.name);
  });
}

function driversByRevenue(drivers) {
  let driversToSort = [...drivers];
  return driversToSort.sort((a, b) => {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  let driversToSort = [...drivers];
  driversToSort.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(driversToSort);
  return driversToSort;
}

function totalRevenue(drivers) {
  return drivers.reduce((sum, driver) => {
    console.log({ sum: sum, driver: driver });
    return sum + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  totalRevenue = totalRevenue(drivers);
  return totalRevenue / drivers.length;
}

// logDriverNames(drivers);
// logDriversByHometown(drivers, "Pittsburgh");
// driversByRevenue(drivers);
// driversByName(drivers);
totalRevenue(drivers);
