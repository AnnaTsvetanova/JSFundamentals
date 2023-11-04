function meetings (arr) {
    let meetingCalendar = {};

    for (let entry of arr){
        let [day, name] = entry.split(' ');
        
        
        if (meetingCalendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
            continue;
        } 
        
        meetingCalendar[day] = name;
        console.log(`Scheduled for ${day}`);  
        
    }
   
    for (let [day, name] of Object.entries(meetingCalendar))
    console.log(day, '->', name);



}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

// meetings(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George'] );