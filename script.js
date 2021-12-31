// save reference to important DOM elements
var textEl = $('.description');
var saveBtns = $(".saveBtn");
var dayDisplayEl = $('#currentDay');
var hour9am = $('#hour-9am');
var hour10am = $('#hour-10am');
var hour11am = $('#hour-11am');
var hour12pm = $('#hour-12pm');
var hour1pm = $('#hour-1pm');
var hour2pm = $('#hour-2pm');
var hour3pm = $('#hour-3pm');
var hour4pm = $('#hour-4pm');
var hour5pm = $('#hour-5pm');
var nowHour = moment().format('h a')

// handle displaying the time
function displayTime() {
    var today = moment().format('dddd, MMMM Do, h:mm:ss a');
    dayDisplayEl.text(today);
}

// compare hours
function compareHour() {
    if (nowHour == '9 am') {
        hour9am.addClass('present');
        $('#hour-10am, #hour-11am, #hour-12pm, #hour-1pm, #hour-2pm, #hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '10 am') {
        hour10am.addClass('present');
        hour9am.addClass('past');
        $(' #hour-11am, #hour-12pm, #hour-1pm, #hour-2pm, #hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '11 am') {
        hour11am.addClass('present');
        $('#hour-10am, #hour-9am').addClass('past')
        $('#hour-12pm, #hour-1pm, #hour-2pm, #hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '12 pm') {
        hour12pm.addClass('present');
        $('#hour-11am,#hour-10am, #hour-9am').addClass('past')
        $('#hour-1pm, #hour-2pm, #hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '1 pm') {
        hour1pm.addClass('present');
        $('#hour-12pm,#hour-11am,#hour-10am, #hour-9am').addClass('past')
        $('#hour-2pm, #hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '2 pm') {
        hour2pm.addClass('present');
        $('#hour-1pm,#hour-12pm,#hour-11am,#hour-10am, #hour-9am').addClass('past')
        $('#hour-3pm, #hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '3 pm') {
        hour3pm.addClass('present');
        $('#hour-2pm,#hour-1pm,#hour-12pm,#hour-11am,#hour-10am, #hour-9am').addClass('past')
        $('#hour-4pm, #hour-5pm').addClass('future')
    }
    if (nowHour == '4 pm') {
        hour4pm.addClass('present');
        $('#hour-3pm,#hour-2pm,#hour-1pm,#hour-12pm,#hour-11am,#hour-10am, #hour-9am').addClass('past')
        $('#hour-5pm').addClass('future')
    }
    if (nowHour == '5 pm') {
        hour5pm.addClass('present');
        $('#hour-9am,#hour-10am, #hour-11am, #hour-12pm, #hour-1pm, #hour-2pm, #hour-3pm, #hour-4pm').addClass('past')

    }

}
// handle events saving
function handleSubmit(event) {
    for (var j = 0; j < 9; j++) {
        event.preventDefault();
        var saveInfo = textEl.eq(j).val();
        localStorage.setItem('plan' + j, saveInfo);
    }
}


// get stored infomation from localStorage
function init() {
    for (var i = 0; i < 9; i++) {
        var getInfo = localStorage.getItem('plan' + i);
        textEl.eq(i).text(getInfo);

    }
}
// Call init to retrieve data and render it to the page on load
init();
compareHour();
setInterval(displayTime, 1000);
// Add click event to save button
saveBtns.on('click', handleSubmit)