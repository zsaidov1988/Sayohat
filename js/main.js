//Price Ticket in USD
var AVIA_PRICE_DUBAI_USD = 500; //TASH-DUBAI/DUBAI-TASH
var AVIA_PRICE_MALAY_USD = 300; //TASH-MALAY/MALAY-TASH
var AVIA_PRICE_KALIF_USD = 700; //TASH-CALIF/CALIF-TASH

// Price hotels in Dubai for 1 day in USD
var HOTEL_DB_3_STAR_PRICE_USD = 100; // 3 star
var HOTEL_DB_4_STAR_PRICE_USD = 150; // 4 star
var HOTEL_DB_5_STAR_PRICE_USD = 300; // 5 star

// Price hotels in Malaysia for 1 day in USD
var HOTEL_ML_3_STAR_PRICE_USD = 80; // 3 star
var HOTEL_ML_4_STAR_PRICE_USD = 120; // 4 star
var HOTEL_ML_5_STAR_PRICE_USD = 250; // 5 star

// Price hotels in California for 1 day in USD
var HOTEL_CL_3_STAR_PRICE_USD = 200; // 3 star
var HOTEL_CL_4_STAR_PRICE_USD = 250; // 4 star
var HOTEL_CL_5_STAR_PRICE_USD = 350; // 5 star

// Called HTML elements: Form elements
var elForm = document.querySelector(".form-js"); //Form
var elInputFirstName = document.querySelector(".input-name-js"); //Input for customer first name
var elInputLastName = document.querySelector(".input-lname-js"); //Input for customer last name
var elInputDate = document.querySelector(".input-date-js"); //Input for customer born date
var elInputCountry = document.querySelector(".country-select-js"); //Input for country which customer select
var elInputDays = document.querySelector(".days-select-js"); //Input for days which customer select
var elInputHotelStar = document.querySelector(".hotel-star-select-js"); //Input for Hotel star which customer select


// Called HTML elements: Info elements
var elHeading = document.querySelector(".info__heading"); //info section h2
var elParagraph = document.querySelector(".info__message"); //info section p for message
var elTable = document.querySelector(".table-js"); //info section Table for output info
var elTbody = document.querySelector(".tbody-js"); //info section tbody in Table above

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var customerFirstName = elInputFirstName.value.trim();
  var customerLastName = elInputLastName.value.trim();
  var country = elInputCountry.options[elInputCountry.selectedIndex].value;
  var days = parseInt(elInputDays.options[elInputDays.selectedIndex].value);
  var hotelstar = elInputHotelStar.options[elInputHotelStar.selectedIndex].value;

  //Calculating Ticket Price:
  var ticketPrice = country == "db" ? AVIA_PRICE_DUBAI_USD : country == "ml" ? AVIA_PRICE_MALAY_USD : AVIA_PRICE_KALIF_USD;

  //Calculating hotel price
  var hotelPrice;
  if (country == "db") {
    hotelPrice = hotelstar == 3 ? HOTEL_DB_3_STAR_PRICE_USD : hotelstar == 4 ? HOTEL_DB_4_STAR_PRICE_USD : HOTEL_DB_4_STAR_PRICE_USD;
  }
  else if (country == "ml") {
    hotelPrice = hotelstar == 3 ? HOTEL_ML_3_STAR_PRICE_USD : hotelstar == 4 ? HOTEL_ML_4_STAR_PRICE_USD : HOTEL_ML_4_STAR_PRICE_USD;
  }
  else {
    hotelPrice = hotelstar == 3 ? HOTEL_CL_3_STAR_PRICE_USD : hotelstar == 4 ? HOTEL_CL_4_STAR_PRICE_USD : HOTEL_CL_4_STAR_PRICE_USD;
  }

  hotelPrice *= days;

  elTbody.textContent = "";
  createTableRow("1", "Avia chipta narxi", ticketPrice);
  createTableRow("2", "Mehmonxona", hotelPrice);
  createTableRow("3", "Jami", (ticketPrice + hotelPrice));
});

function createTableRow(orderNumber, name, price) {
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  var tableSellName = document.createElement('td');
  var tableSellPrice = document.createElement('td');

  tableHead.textContent = orderNumber;
  tableSellName.textContent = name;
  tableSellPrice.textContent = price;
  tableRow.append(tableHead);
  tableRow.append(tableSellName);
  tableRow.append(tableSellPrice);
  elTbody.append(tableRow);
}
