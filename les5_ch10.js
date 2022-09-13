// 1

let today = new Date();

// console.log(today);

//2


//5

function dateSuffix(dayOfMonth) {
  // if its 1st, 2nd, 3rd except for 11, 12, 13 are all th, otherwise th
  let suffix;
  let lastDigit = String(dayOfMonth)[0]
  if (dayOfMonth >= 11 && dayOfMonth <= 13) {
    suffix = 'th';
  } else if (lastDigit === '1') {
    suffix = 'st';
  } else if (lastDigit === '2') {
    suffix = 'nd';
  }else if (lastDigit === '3') {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
  return `${dayOfMonth}${suffix}`;
}

function formattedMonth(month) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[month]; 
}

function formattedDay(day) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

return daysOfWeek[day]; 
}

function formattedDate(date) {
  let day =  formattedDay(date.getDay())
  let month = formattedMonth(date.getMonth());
  let dayNumber = dateSuffix(date.getDate());
  
  console.log(`Today's date is ${day}, ${month} ${dayNumber}.`);
}



// formattedDate(today);



// console.log(today.getFullYear());

// console.log(today.getYear());

// console.log(today.getTime());



// 11

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
// formattedDate(tomorrow);

// 12

let nextWeek = new Date(today.getTime());

nextWeek.setDate(today.getDate() + 35);


console.log(nextWeek.toDateString());


function formatTime(dateObj) {
  let hours = String(dateObj.getHours());
  let minutes = String(dateObj.getMinutes());
  hours = hours.length === 1 ? ('0' + hours) : hours
  minutes = minutes.length === 1 ? ('0' + minutes) : minutes
  
  return hours + ':' + minutes;
}



console.log(formatTime(today));