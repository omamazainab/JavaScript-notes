function compose(...fns) {
    return pipe(...fns.reverse())
}

function pipe(...fns) {
    return function (buildingUp) {
        for (let fn of fns)
            buildingUp = fn(buildingUp);
        return buildingUp;
    }
}