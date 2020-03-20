module.exports = 
function transform(arr) {
    let result=[];
    if (!Array.isArray(arr)) throw new Error;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            i++;
        }
        else if (arr[i] == '--discard-prev') {
            if(result.length) result.pop();
        }
        else if (arr[i] == '--double-next') {
            if(arr[i+1]!=null) result.push(arr[i+1]);
        }
        else if (arr[i] == '--double-prev') {
            if(arr[i-1]!=null) result.push(arr[i-1]);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
};