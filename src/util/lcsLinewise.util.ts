function findMissingIndex(len:number, foundIndex:Set<number>){
    const missingIndex=new Set<number>();
    for(let i=0;i<len;i++){
        if(!foundIndex.has(i))
            missingIndex.add(i);
    }
    return missingIndex;
}

export default function diffFunction(str1:string[], str2:string[]){

    const len_str1=str1.length+1, len_str2=str2.length+1;
    const memo:number[][]=[];

    for (let i = 0; i < len_str1; i++) {
        const res = [];
        for (let j = 0; j < len_str2; j++)
            res.push(-1);
        memo.push(res);
    }

    for(let i=0;i<len_str1;i++){
        for(let j=0;j<len_str2;j++){
            if(i==0||j==0)
                memo[i][j]=0;
            else if(str1[i-1]===str2[j-1])
                memo[i][j]=1+memo[i-1][j-1];
            else memo[i][j]=Math.max(memo[i-1][j] || memo[i][j-1]);       
        }
    }

    let i=len_str1-1, j=len_str2-1;
    const indexPresentInStr1=new Set<number>();
    const indexPresentInStr2=new Set<number>();
    while(i>0 && j>0){
        if(str1[i-1]===str2[j-1]){
            i--;
            j--;
            indexPresentInStr1.add(i);
            indexPresentInStr2.add(j);
        }
        else if(memo[i-1][j]>memo[i][j-1]) i--;
        else j--;
    }

    const indexRemovedFromStr1= findMissingIndex(str1.length, indexPresentInStr1);
    const indexaddedInStr2=findMissingIndex(str2.length, indexPresentInStr2);

    return {indexRemovedFromStr1, indexaddedInStr2};
}