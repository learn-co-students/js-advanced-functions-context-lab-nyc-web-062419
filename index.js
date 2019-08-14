/* Your Code Here */

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

let hoursWorkedOnDate = function (dateRecord) {
    let inEvent = this.timeInEvents.find(function (e) {
        return e.date === dateRecord
    })
    let outEvent = this.timeOutEvents.find(function (e) {
        return e.date === dateRecord
    })
    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function (dateRecord) {
    let wage = hoursWorkedOnDate.call(this, dateRecord) * this.payPerHour
    return wage
}

let createEmployeeRecord = function (info) {
    return {
        firstName: info[0],
        familyName: info[1],
        title: info[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployees = function (employee) {
    return employee.map(function (info) {
        return createEmployeeRecord(info)
    })
}

let createTimeInEvent = (function (dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return this
})

let createTimeOutEvent = (function (dateStamp) {
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this
})

let createEmployeeRecords = function (info) {
    return info.map(function (info) {
        return createEmployeeRecord(info)
    })
}

let calculatePayroll = function (allEmployeeRecords) {
    return allEmployeeRecords.reduce(function (mem, rec) {
        return mem + allWagesFor.call(rec)
    }, 0)
}

let findEmployeebyFirstName = function (employeeArray, firstName) {
    return employeeArray.find(function (employee) {
        return employee.firstName === firstName
    })
}