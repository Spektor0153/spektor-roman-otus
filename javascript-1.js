
var sum = (number, iter = 0) => {
    if (!number) return iter;
    return x => sum(x, iter + number);
}

sum(5)(10)(15)(); 

/* 2 вариант */
var sum = iter => number => number? sum(iter + number) : iter;
sum(5)(10)(15)();
