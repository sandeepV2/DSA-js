function* Add(x) {
    yield x + 1;
    var y = yield(null);
    y = 6
    console.log("test")
    return x + y;
 }

 function* loop(){
    for(let i=0;i<5;i++){
        let x=i+2;
        yield x;
    }
    x = x-1;
    console.log("test")
    return x;
 }
 
 var gen = Add(5);

 let t1 = gen.next();
 console.log(t1)
 let t2 = gen.next(); 
 console.log(t2)
 let t3 = gen.next(); 
 console.log(t3)

//  let gen2 = loop();
//  let t_1 = gen2.next();
//  console.log(t_1)
//  let t_2 = gen2.next(); 
//  console.log(t_2)
//  let t_3 = gen2.next(); 
//  console.log(t_3)

let inp1 = process.stdout.in("Enter the message");

console.log(inp1);

let arg = process.argv();

console.log(arg);