
var sum = (number, a = 0) => {
    if (number === undefined) return a;
    return x => sum(x, a + number);
}

sum(5)(10)(15)(); 

/* 2 вариант */
var sum = a => num => num!=undefined? sum(a + num) : a;
sum(5)(10)(15)(); 

sum(5)(0)(15)(); 
