function circleArea(radius) {
    if (radius > 0) {
        const area = radius * radius * 3.14;
        console.log("Circle Area: " + area);
    } else {
        console.log("Radius must be positive!")
    }
}


function circleCircumference(radius) {
    if (radius > 0) {
        const circum = radius * 2 * 3.14;
        console.log("Circle Circum: " + circum);
    }else {
        console.log("Radius must be positive!")
    }
}

module.exports = {
    circleArea,
    circleCircumference
}