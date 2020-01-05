const getActualSleepHours = () => 5+7+4+4+6+7+4;
let getIdealSleepHours = (idealHours) => {
  return idealHours*7;
}
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(6);  
  if(actualSleepHours === idealSleepHours){
    console.log(`You are getting the perfect amount of sleep`);
  }else if(actualSleepHours > idealSleepHours){
    console.log(`You are getting over ${actualSleepHours-idealSleepHours} hours of extra sleep`);
  }else if(actualSleepHours < idealSleepHours){
    console.log(`You are getting ${idealSleepHours-actualSleepHours} hours less than you need. You should rest more.`);
  }  
}
calculateSleepDebt();