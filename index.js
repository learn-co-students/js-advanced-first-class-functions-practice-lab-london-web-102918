const logDriverNames = function (driver) {
    driver.forEach(function (array) {
      console.log(array.name);
    });
  };
  
  const logDriversByHometown = function (driver, hometown) {
    driver.forEach(function (array) {
      if(array.hometown === hometown){
        console.log(array.name);}
    });
  };
  
  const driversByRevenue = function (driver){
    return driver.slice().sort(function (driver1, driver2){
  return driver1.revenue - driver2.revenue;
  
    });
  };
  
  const driversByName = function (driver){
    return driver.slice().sort(function (name1, name2){
  return name1.name.localeCompare(name2.name);
  
    });
  };
  
  const totalRevenue = function (driver) {
    return driver.reduce(function (total, array) {
      return total + array.revenue;}, 0);
    };
  
    const averageRevenue = function (driver) {
      return driver.reduce(function (total, array) {
        return (total + array.revenue / driver.length);}, 0);
      };