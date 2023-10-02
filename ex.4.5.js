function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("It is indeed a leap year");
    } else {
      console.log("This is not a leap year");
    }
  }
  
  
  isLeapYear(2008); 
  isLeapYear(1900); 
  isLeapYear(2000); 
  