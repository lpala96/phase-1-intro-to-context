// Your code here
const createEmployeeRecord = (recordArray) => {
    return {
        firstName: recordArray[0],
        familyName: recordArray[1],
        title: recordArray[2],
        payPerHour: recordArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map(rec => createEmployeeRecord(rec))
}


const createTimeInEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(" ")

    const inEvent = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    }

    this.timeInEvents.push(inEvent)

    return this
}

const createTimeOutEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(" ")

    const outEvent = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    }

    this.timeOutEvents.push(outEvent)

    return this
}

const hoursWorkedOnDate = function(targetDate){
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const outEvent = this.timeOutEvents = this.timeEvents.find(oEvent => oEvent.date === targetDate)
    return(outEvent.hour - inEvent.hour)/100
}

const wagesEarnedOnDate = function(targetDate){
    return hoursWorkedOnDate.call(this, [targetDate]) * this.payPerHour
}

const allWagesFor = function () {
    const ElegibleDates = this.timeInEvents.map(function(e) {
        return e.date
    })


    const payable = elegibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this.d)
    }.bind(this), 0)

    return payable

}

const findEmployeebyFirstName = function(srcArray, firstName){
    return srcArray.find(rec => rec.firstName === firstName)
}

const calculatePayroll =  function(recsArray){
    return recsArray.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)
}