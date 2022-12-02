function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

const slow = { delay: 100 };

module.exports = {
    delay, 
    slow
}