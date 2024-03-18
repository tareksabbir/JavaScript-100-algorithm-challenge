var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])
    let prevLast = points[0][1]
    let arrow = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > prevLast && points[i][1] > prevLast) {
            arrow++;
            prevLast = points[i][1]
        }
    }
    return arrow
};