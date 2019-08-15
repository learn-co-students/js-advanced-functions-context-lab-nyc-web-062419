
function createEmployeeRecord(bullshit){
  return {
    firstName: bullshit[0],
    familyName: bullshit[1],
    title: bullshit[2],
    payPerHour: bullshit[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployees(aPileOfBullshit)
{
  return aPileOfBullshit.map(bullshit => {
    return createEmployeeRecord(bullshit)
  });
}

function createTimeInEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    })

    return this
}

function createTimeOutEvent(dateStamp){
  let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    })

    return this
}

function hoursWorkedOnDate(soughtDate){
  let inEvent = this.timeInEvents.find(function(e){
    return e.date === soughtDate
})

let outEvent = this.timeOutEvents.find(function(e){
    return e.date === soughtDate
})
return (outEvent.hour - inEvent.hour) / 100
}




function wagesEarnedOnDate(soughtDate){
return hoursWorkedOnDate.call(this , soughtDate) * this.payPerHour
}

let allWagesFor = function(){
  let eligibleDates = this.timeInEvents.map(function(e){
      return e.date
  })

  let payable = eligibleDates.reduce(function(memo, d){
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0)

  return payable
}

let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
}

let createEmployeeRecords = function(src) {
  return src.map(function(row){
    return createEmployeeRecord(row)
  })
}

let findEmployeebyFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

