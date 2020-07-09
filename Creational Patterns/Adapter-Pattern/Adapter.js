// Old Interface
function TicketPrice(){
    this.request = function ( start, end, overweightLug ){
        // Price calculation
        return "Rs.500";
    }
}



// New Interface
function NewTicketPrice(){
    this.login = function (credentials) {
        // For login process
    }
    this.setStart = function (start) {
        // set the starting location
    }
    this.end = function (end){
        // set the end location
    }
    this.calculate = function(overweightLug){
        // price calculation

        return "Rs.550";
    }
}

// Adaper Interface

function TicketAdapter(credentials){
    var pricing = new NewTicketPrice();

    pricing.login(credentials);

    return {
        request: function( start, end, overweightLug ){
            pricing.setStart(start);
            pricing.end(end);
            return pricing.calculate(overweightLug);
        }
    }
}

var pricing = new TicketPrice();
var credentials = { token: "asdnkjadkjasd" };
var adapter = new TicketAdapter(credentials);

// Old Interface Call
var price = pricing.request("chennai", "madurai", 50);
console.log("Old Pricing "+ price);

// New Interface Call

var newPrice = adapter.request("chennai", "madurai", 50);
console.log("New Pricing "+ newPrice);