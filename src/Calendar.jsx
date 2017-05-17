import React from 'react'

export default React.createClass({
  render() {
    return <div>Calendar</div>
  }
})
import React from 'react'

class CalendarGrid extends React.Component {

  render() {
    return (
      <div className="calendar-grid">
      <CalendarDays numOfDaysInMonth={30}  />
      </div>
      )
  }
}

class CalendarDays extends React.Component {
  render() {
    const days = this.props.numOfDaysInMonth;
    const arrayOfDays = []
    let i = 1;
    for (i = 1; i < days; i ++) {
      arrayOfDays.push(i)
    }
console.log(arrayOfDays)

    return(
      <div className="calendar-day">

{ arrayOfDays.map((day) =>
  <div>{day}</div>
  )
}


      </div>
      )
  }
}

export default CalendarGrid;




// class CalendarDays extends React.Component {
//   render() {
//     const days = this.props.numOfDaysInMonth;

//     let i = 0;

//     for (i = 0; i < days; i++) {
//       console.log(i)
//     }

//     return(
//       <div className="calendar-day">{days}</div>
//       )
//   }
// }
