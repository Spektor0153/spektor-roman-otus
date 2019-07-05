var sum = (number, iter = 0) => {
    if (!number) return iter;
    return x => sum(x, iter + number);
}

sum(5)(10)(15)(); 