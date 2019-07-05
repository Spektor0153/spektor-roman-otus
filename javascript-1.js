
var sum = (number, iter = 0) => {
    if (number === undefined) return iter;
    return x => sum(x, iter + number);
}

sum(5)(10)(15)(); 

/* 2 вариант */
var sum = a => num => num? sum(a + num) : a;
sum(5)(10)(15)();
