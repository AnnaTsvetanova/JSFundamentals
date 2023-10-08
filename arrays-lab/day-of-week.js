function dayOfWeek(day) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if(day > 0 && day <= 7) {
        let weekDay = days[day - 1];
        console.log(weekDay);
    } else {
        console.log('Invalid day!');
    }

}
dayOfWeek(11);
dayOfWeek(6);
dayOfWeek(3);