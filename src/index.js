
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix===undefined) return [];
    if(matrix.length===1) return matrix;
    var a=[];
    for( var i=0;i<matrix.length; i++)
    {

        if(i!==0 && i%2!==0)
        {
            for( var j=matrix[i].length-1;j>=0;j--)
            {
                a.push(matrix[i][j]);
            }

        }else
        {
            for( var j=0;j<matrix[i].length;j++)
            {
                a.push(matrix[i][j]);
            }
        }
    }
  return a;
}
