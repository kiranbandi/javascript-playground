function printMatrix(matrix) {
    matrix.forEach(function(row, rowIndex) {
        console.log("[" + row.join(" ") + "]");
    });
}

//An alternate Implementation
function printMatrixWithoutJoin(matrix) {
    var stringStore;
    matrix.forEach(function(row) {
        stringStore='';
        row.forEach(function(value, index){
            stringStore+=" "+value;
        });
        console.log("["+stringStore+" ]");
    });
}

var matrixVariable = [[1,2,3],[4,5,6],[7,8,9]];



