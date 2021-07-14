function shapeArea(n) {
    // if(n < 1 || n > Math.pow(10,4)) return false
    // if (n=1) return 1;
    return 2*n*(n-1) +1
}

console.log(shapeArea(Math.pow(10,100)))