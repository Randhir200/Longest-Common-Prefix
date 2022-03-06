var longestCommonPrefix = function(strs) {
    str=strs[0];
    prefix="";
    for(let i=1;i<strs.length;i++){
        for(let j=0;j<strs[i].length;j++){
            if(str[j]==strs[i][j]){
             prefix=prefix+str[j];
            }else{
                break
            }
        }
         str=prefix;
         prefix="";
    }
    console.log(str);
};

longestCommonPrefix(["flower","flow","flight","fsl"]);