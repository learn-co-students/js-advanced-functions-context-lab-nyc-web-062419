/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function() {
  let eligibleDates = this.timeInEvents.map(function(e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function(memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

let createEmployeeRecord = arr => {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

let createEmployees = arr => {
  return arr.map(createEmployeeRecord);
};

let createTimeInEvent = function(timestamp) {
  let date_time = timestamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(date_time[1]),
    date: date_time[0]
  });
  return this;
};

let createTimeOutEvent = function(timestamp) {
  let date_time = timestamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(date_time[1]),
    date: date_time[0]
  });
  return this;
};

let hoursWorkedOnDate = function(date) {
  let timeIn = this.timeInEvents.find(time => time.date === date);
  let timeOut = this.timeOutEvents.find(time => time.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
};

let wagesEarnedOnDate = function(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
};

let calculatePayroll = function(employees) {
  return employees.reduce(function(acc, curr) {
    return acc + allWagesFor.call(curr);
  }, 0);
};

let createEmployeeRecords = function(arr) {
  return arr.map(createEmployeeRecord);
};

let findEmployeebyFirstName = function(collection, firstName) {
  return collection.find(employee => employee.firstName === firstName);
};
