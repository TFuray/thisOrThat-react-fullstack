export const getSundays = (year) => {
  const sundays = []
  const date = new Date(year, 0, 1) // January 1st of the year
  while (date.getFullYear() === year) {
    if (date.getDay() === 0) {
      // Sunday
      sundays.push(new Date(date.getTime())) // add a new Date object to the array
    }
    date.setDate(date.getDate() + 1) // move to the next day
  }
  return sundays
}
// console.log(getSundays(2023))

export const getNextSunday = () => {
  date.setDate(date.getDate() - )
  return sunday

}


console.log(getNextSunday())