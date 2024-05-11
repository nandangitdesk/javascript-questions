
const calculateDaysBetweenDates = (d1,d2)=>{
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return Math.abs(date2-date1)/(1000*60*60*24);
  }
  
  
  console.log(calculateDaysBetweenDates("2024-1-1", "2024-1-31"))