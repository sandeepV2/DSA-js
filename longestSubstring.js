//https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/


let s = 'GEEKSFORGEEKS';
let res = 0;

for (let i=0;i<s.length;i++){

    let visited = new Array(256)
    for(let j=i;j<s.length;j++){

        if(visited[s[j]] === true){
          break;
        } else {
            res = Math.max(res, j-i+1);
            visited[s[j]] = true;
        }
    }
}

console.log(res);