//DOM Selection

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
var ticketPrice = +movieSelect.value;
var screenChange = document.querySelector('.screen');

//Functions---------


//change image on select

function CaangeScrrenImage() {
    if (ticketPrice === 5) {
        screenChange.style.backgroundImage = "url('media/giphy2.gif')"
    } else if (ticketPrice === 10) {
        screenChange.style.backgroundImage = "url('media/giphy3.gif')"
    } else if (ticketPrice === 15) {
        screenChange.style.backgroundImage = "url('media/giphy4.gif')"

    } else if (ticketPrice === 20) {
        screenChange.style.backgroundImage = "url('media/giphy5.gif')"
    }
};



function updateSelectedCount() {

    //select selected seats
    const selectedSeats = document.querySelectorAll('.row .seat.selected');





    // add up cost and total seats
    const selectedSeatsCount = selectedSeats.length;
    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;
};


//Movie Change -Event

movieSelect.addEventListener('change', function (e) {
    ticketPrice = +e.target.value;
    updateSelectedCount();
    CaangeScrrenImage();
})





// Seat click -Event
container.addEventListener('click', function (e) {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

        // select chair toggle
        e.target.classList.toggle('selected');


        updateSelectedCount();
    }




});



// btn Reserve click -Event

document.getElementById('btn').addEventListener('click', function () {

    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    const bookedSeat = [...selectedSeat]
    
    //Booking btn

    if (selectedSeat.length < 1) {
        alert('You must select a chair')
    } else {
            bookedSeat.forEach(function (chair) {
            chair.classList = "seat booked";

           // Get payment to show
            document.querySelector('.payment').setAttribute("style", "width: 100%;height: 100%; opacity: 1");  
           
        })
    }

         

})
