//A function is merely an Object
// .call(), .apply() & .bind() are methods on every fn Object


console.log("---- Doug Object ----")
var doug = {
    name: "Doug",
    printThis: function(){console.log("From doug object", this.name)}
}

doug.printThis();

//nested function ("this = window" unless use .call .apply or .bind)
console.log("---- Sierra Object ----")
var sierra = {
    name: "Sierra",
    printThis: function(){
        doug.printThis();
        var that = this;
        var nestedFn = function(){
            console.log("From sierra object nested function", this);
            doug.printThis()
        };
        nestedFn.call(this);
     }
};
sierra.printThis();

//.bind()  this = savvy
console.log("---- Savvy Object ----")
var savvy = {
    name: "Savvy",
    printThis: function(){
        doug.printThis();
        var nestedFn = function(){
            console.log("From savvy object", this);
            doug.printThis();
            sierra.printThis();
        }.bind(this);
        nestedFn();
     }
};
savvy.printThis();
console.log("---- Bind this to sierra object");
sierra.printThis.call(1);     //bind "this" to sierra object

//change "this" for doug.printThis
//cannot do this on savvy.printThis as we cannot directly access nestedFn
doug.printThis.call(sierra);
