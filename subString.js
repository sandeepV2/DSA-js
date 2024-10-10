    function printSubStrings( str) {
 
        // First loop for starting index
        for (i = 0; i < str.length; i++) {
            var subStr = "";
 
            // Second loop is generating sub-String
            for (var j = i; j < str.length; j++) {
                subStr += str.charAt(j);
                console.log(subStr);
            }
        }
    }
 
    // Driver Code
     
        var str = "abcd";
        printSubStrings(str);
 
