function power(num, degree) {
    let res = 1;
    for (let i = 0; i < degree; i++) {
        res *= num;
    }
    return res;
}

document.write(`${power(2, 10)}`)