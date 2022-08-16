function insertSort(arr){
    const len = arr.length
    for(let i=0;i<len;i++){
        let temp = arr[i]
        let prev = i-1
        while(prev>=0 && arr[prev]>temp){
            arr[prev+1] = arr[prev]
            prev--
        }
        arr[prev+1] = temp
    }
    return arr
}