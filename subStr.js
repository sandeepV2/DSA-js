
let sampleStr = "abcdaaacccddd";
let len = sampleStr.length;

function longestKSubstr(s, k) {
    let n = s.length;
    let answer = -1;
    for (let i=0;i< len; i++){
        let subStr = ''
        let distinct = new Set()
        for(var j=i; j < len;j++){
            subStr+=sampleStr.charAt(j);
            distinct.add(sampleStr.charAt(j));
        }
        if (distinct.size === k) {
            answer = Math.max(answer, j-i);
        }
    }
    console.log(answer);
}

let s = "aabacbebebe";
let k = 3;
 
// Function call
longestKSubstr(s, k);


class A{
    constructor(test){
        this.test = test;
    }
}

class B extends A{
    constructor(test, id){
        super(test);
        this.id = id;
    }
}

let obj = new B("FGH", 1);
console.log(obj.test);
