/* (function timeTracker(){
    var arr = ['item 1','item 2','item 3', 'item 4' ]
    console.time("MyTimer1");
    console.log('<ul>')
    for (let index = 0; index < arr.length; index++) {
        console.log(`<li>${arr[index]}</li>`);        
    }

    console.log('</ul>')
    console.timeEnd("MyTimer1")
})();
var arr2 = ['item 1' , 'item 2','item 3','item 4'];

(function timeTracker2(){
    
    console.time("MyTimer2");
    var list = '<ul><li>' + arr2.join('</li><li>') + '</li></ul>'
    console.log(list)
    console.timeEnd("MyTimer2")
})(); */


(function timeTracker3(){
    
    console.time("MyTimer3");
    const array1 = [1,2,3,4];
    let sum =array1.reduce(function(a,b){
        return a + b;
    });
    console.log(sum)
    console.timeEnd("MyTimer3")
})();

(function timeTracker4(){
    
    console.time("MyTimer4");
    const array1 = [1,2,3,4];
    let sum =array1.reduce((a,b) =>
        a + b 
    );
    console.log(sum)
    console.timeEnd("MyTimer4")
})();