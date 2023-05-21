function formatterTime(startTime = '', endTime = '', separator = ':')
{
  startTime = startTime.split(separator).map(Number)
  endTime = endTime.split(separator).map(Number)

  let hourTime = endTime[0] - startTime[0]
  let minutesTime = endTime[1] - startTime[1]

  if(minutesTime < 0) {
    hourTime--
    minutesTime = 60 + minutesTime
  }

  const minutes = hourTime * 60 + minutesTime


  return {
    time: `${correct(hourTime)}:${correct(minutesTime)}`,
    decimal: Math.floor((minutes / 60) * 100) / 100
  }
}

function correct(time = 0){
  if(time === 0) return `00`
  return time < 10 ? `0${time}` : time
}