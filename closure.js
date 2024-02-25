function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

//  {Note: function closer means ek function er bitor onno function creat kora and oi function theke call kora} 