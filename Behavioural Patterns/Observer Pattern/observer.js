function Subject(){
    this.observers = []; // Array of observer functions
}

Subject.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
    },
    unsubscribe: function(fnToRemove){
        this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove )
                return fn;
        })
    },
    fire: function(){
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}

const subject = new Subject();

function observer1(){
    console.log("Observer 1 is firing...");
}

function observer2(){
    console.log("Observer 2 is firing...")
}

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.unsubscribe(observer1);
subject.unsubscribe(observer2);

subject.fire();
