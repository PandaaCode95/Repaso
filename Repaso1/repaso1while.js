function compareLet(arr) {
    var siono = true;
    var i = 0;
    while (i < arr.length && siono) {
        if (arr[i][0] != "M") {
            siono = false;
        }
        i++;
    }
    return siono;
}
