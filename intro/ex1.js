function centuryFromYear(year) {
    if (year >= 1  && year <= 2005) {
        console.log(Math.floor(20.05));
        return Math.round(year/100);
    }
}

// centuryFromYear(2005)

console.log(Math.ceil(20.05));