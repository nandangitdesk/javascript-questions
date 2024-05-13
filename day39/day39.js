
const calculateAge = (birthDate)=>{
    const todayDate = new Date();
    birthDate = new Date(birthDate);
  
    let age = todayDate.getFullYear() - birthDate.getFullYear()
    let monthDiff = todayDate.getMonth() - birthDate.getMonth()
  
    if(monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())){
      age--
    }
    return age
  }
  
  
  
  console.log(calculateAge("2003-09-30"))