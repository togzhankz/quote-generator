//Write a JavaScript program to calculate days left until next Christmas.

// const currentDate = new Date()
// const christmasDate = new Date(2022,11,25)
// const dateChristmas =christmasDate.getDate()
// const dateCurrent = currentDate.getDate()
// const monthChristmas = christmasDate.getMonth()
// const monthCurrent = currentDate.getMonth()

// const calculate = (monthChristmas - monthCurrent)*30 + (dateChristmas- dateCurrent)
// console.log(dateChristmas)
// console.log(dateCurrent)
// console.log(monthChristmas)
// console.log(monthCurrent)
// console.log(calculate)


today=new Date();
const cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);