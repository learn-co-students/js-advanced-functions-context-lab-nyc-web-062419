/* Your Code Here */

function createEmployeeRecord (array){
    const employee = {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: [] }
    return employee
}
function createEmployees (array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(date){
    let dateArray = date.split(" ")
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(dateArray[1]), date: dateArray[0]})
    return this
}

function createTimeOutEvent (date){
    let dateArray = date.split(" ")
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateArray[1]), date: dateArray[0]})
    return this
}

function hoursWorkedOnDate (date){
    let timeIn = this.timeInEvents.find(function(object) {return object.date === date})
    let timeOut = this.timeOutEvents.find(function(object) {return object.date === date})
    let hours = timeOut.hour - timeIn.hour
    return hours/100
}

function wagesEarnedOnDate (date){
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeebyFirstName (srcArray, firstName){
    return srcArray.find(function(object) {return object.firstName === firstName})
}

function createEmployeeRecords (array){
    return array.map(createEmployeeRecord)
}

function calculatePayroll (array){
    return array.reduce (function(a,b){
        return a + allWagesFor.call(b)
        }, 0)
}