function Customer(firstname, lastname, status){
    this.firstname = firstname;
    this.lastname = lastname;
    this.status = status;

    this.show = function(){
        console.log("Firstname: " + this.firstname + "Lastname: "+ this.lastname + " Status: " + this.status)
    }
}

function CustomerPrototype(proto){
    this.proto = proto;

    this.clone = function(){
        var customer = new Customer();

        customer.firstname = proto.firstname;
        customer.lastname = proto.lastname;
        customer.status = proto.status;

        return customer;
    }
}

var proto = new Customer("Sankar", "Naveen", "Completed");
var prototype = new CustomerPrototype(proto);


var customer = prototype.clone();
var customer2 = prototype.clone();

customer.show();
customer2.show();