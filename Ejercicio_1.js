
function occurences(arr, num) {
    total = 0;
    arr.forEach(element => {
        if(element === num)
            total += 1;
    });
    return total;
}