let field = [] // Our initial grid, let it be a square. Full of dead cells.
for (let i = 0; i < 400; i++){
    field.push(0)
}
//a = item value
//b = item index
//l = cell row length
let l = Math.sqrt(field.length)

function deadoralive(a,b){ // to work out whether a cell will be live or dead for the next cycle
    function surroundSum(a, b){ // to calculate the number of live cells surrounding a cell
        return a[b-1] 
             + a[b+1] 
             + a[b-l-1] 
             + a[b-l] 
             + a[b-l+1] 
             + a[b+l-1] 
             + a[b+l] 
             + a[b+l+1]
    } 
    
    if (a == 0){
        if (surroundSum(a,b) = 3){
            return a = 1
        } else {
            return a = 0
        }
    } else {
        if (surroundSum(a,b) == 2 || surroundSum(a,b) == 3){
            return a = 1
        } else {
            return a = 0
        }
    }
} 
function nextgeneration(field){ 
    let nextgen = []
    for (let i=0; i < field.length; i++){
        nextgen.push(deadoralive(field[i], i))
    }
    field = nextgen;
} // Making a new array to work out thenew 