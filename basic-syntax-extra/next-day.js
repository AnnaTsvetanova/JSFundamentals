function nextDay(year, month, day) {
  let currentDate = new Date(year, month - 1, day);

  currentDate.setDate(currentDate.getDate() + 1);

  let nextYear = currentDate.getFullYear();
  let nextMonth = currentDate.getMonth() + 1;
  let nextDay = currentDate.getDate();

  console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 12, 31);
