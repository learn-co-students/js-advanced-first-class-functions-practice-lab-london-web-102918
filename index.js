function logDriverNames(drivers){
   return drivers.forEach(driver => console.log(driver.name))
};

function logDriversByHometown(drivers, location) {
    return drivers.forEach(driver => driver.location ? console.log(driver.name) : null);
}

function logDriversByHometown(drivers, location) {
    return drivers.forEach(function(driver){
        if (driver.hometown === location) {
            console.log(driver.name);
        } 
    })
}

function driversByRevenue(drivers) {
    let sortedRev = [...drivers];
    sortedRev.sort((driver1, driver2) => {
        return driver1.revenue - driver2.revenue;
    });
    return sortedRev;
} 

function driversByName(drivers) {
    let sortedNames = [...drivers];
    sortedNames.sort((driver1, driver2) => {
        return driver1.name.localeCompare(driver2.name);
    });
    return sortedNames;
}

function totalRevenue(drivers) {
    return drivers.reduce((total, value) => {
         return total+ value.revenue
    }, 0);
}

// function averageRevenue(drivers) {
//     const total = drivers.reduce((total, value) => {
//         return total + value.revenue
            
//    }, 0);
//     return total/drivers.length
// }

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}

// const average = euros.reduce((total, amount, index, array) => {
//     total += amount;
//     if( index === array.length-1) { 
//       return total/array.length;
//     }else { 
//       return total;
//     }
//   });
