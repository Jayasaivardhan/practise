let fixed_date = '2020 08 22'
let {addDays} = require('date-fns')
let accept_days = days => {
  let dates = addDays(new Date(fixed_date), days)
  return `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`
}
module.exports = accept_days
