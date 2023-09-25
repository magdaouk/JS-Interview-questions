function someLength(n, str){
        var newStr = "";
        let i = 0, j = 0;
        while(j < str.length){
            while (i < n){
                newStr += str.charAt(j);
                i++;
                j++
            }
            i = 0;
            newStr+= "\n";
        }
        console.log(newStr);
}
someLength(3, "abcdefghi");


function smallDiff(someArr){
    var smallest = someArr[0];
    for(let i = 0; i < someArr.length; i++){
        if(someArr[i] < smallest){
            smallest = someArr[i]; 
        }
    }
    
    for(let i = 0; i < someArr.length; i++){
        if(someArr[i] === smallest){
            someArr.splice(i, 1);
        }
    }
    
    var secSmallest = someArr[0];
    for(let i = 0; i < someArr.length; i++){
        if(someArr[i] < secSmallest){
            secSmallest = someArr[i]; 
        }
    }
    var diff = secSmallest - smallest; 
    console.log(diff);
}


var arr = [30,45,55];
smallDiff(arr);
