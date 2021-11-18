function buildFun(n) {

    var res = []
    var loop = function (i) {
        res.push(function () {
            return i;
        });
    }

    for (var i = 0; i < n; i++) {
        loop(i);
    };

    return res;
}




function getAverage(marks) {
    return Math.floor((marks.reduce((a, b) => (a + b)) / marks.length));
}

getAverage([2,2,2,2]);
getAverage([1,2,3,4,5,]);
getAverage([1,1,1,1,1,1,1,2])