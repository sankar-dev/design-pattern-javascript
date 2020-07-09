class Course{
    constructor(name, sales, price, isFree = false, isCampaign = false){
        this.name = name;
        this.sales = sales || 0;
        this.price = price || 0;
        this.isFree = isFree;
        this.isCampaign = isCampaign;
    }

    toPrint(){
        return console.log(JSON.stringify(this.name))
    }
}

module.exports = Course;