function newfield() {
    let field = [] // Array representing the grid. Each item in the array will be numbered 0 or 1 representing dead or alive state.
    for (let i = 0; i < 84; i++){
        field.push(0)
    }
    // INPUT VALUES
    field[39] += 1
    field[50] += 1
    field[63] += 1
    field[52] += 1
    // This is a diamond shape cell arrangement. Stable static configuration, good for the non-change related tests.
    field[32] += 1
    field[44] += 1
    field[56] += 1
    // This is a three cell line. Stable oscillating configuration, good for the change related tests.
    return field
}
let field = newfield()
let l = 12;

function surroundSum(i){ 
    if (i<12 || i % l == 0 || i % l == (l-1) || i > (field.length - l)){
        return 0
    }
    return field[i-l-1] + field[i-l] + field[i-l+1] + field[i-1] + field[i+1] + field[i+l-1] + field[i+l] + field[i+l+1]
}
//{
    // if (i == 0){
    //     return field[i+1] 
    //          + field[i+l]
    //          + field[i+l+1]
    // }
    // if ( i <= (l-1)){
    //     return field[i+1] 
    //          + field[i+l]
    //          + field[i+l+1]
    //          + field[i-1]
    //          + field[i+l-1]
    // }
    // if (i == (l-1)){
    //     return field[i-1]
    //          + field[i+l-1]
    //          + field[i+l]
    // }
    // if (i % l == 0){
    //     return field[i+1]
    //          + field[i-l+1] 
    //          + field[i-l]  
    //          + field[i+l] 
    //          + field[i+l+1]
    // }
    // if (i % l == l-1){
    //     return field[i+l] 
    //          + field[i-l]  
    //          + field[i+l-1] 
    //          + field[i-1]
    //          + field[i-l-1]
    // }
    // if (i == (field.length - l + 1)){
    //     return field[i+1]
    //          + field[i-l]
    //          + field[i-l+1]
    // }
    // if ( (i > (field.length - l + 1)) && (i <= (field.length - 2))){
    //     return field[i-1]
    //          + field[i-l]
    //          + field[i-l-1]
    //          + field[i+1]
    //          + field[i-l+1]
    // }
    // if (i == field.length - 1){
    //     return field[i-1]
    //             + field[i-l]
    //             + field[i-l-1]
    //         }
    // }//}
function deadoralive(i){ // to work out whether a cell will be live or dead for the next cycle
    if (field[i] == 0){
        if ( surroundSum(i) == 3){
            return field[i] += 1
        } else {
            return field[i]
        }
    } else if (field[i] == 1){
        if ( surroundSum(i) == 2 || surroundSum(i) == 3){
            return field[i]
        } else {
            return field[i] -= 1
        }
    }
    return field[i]
}

function nextgeneration(){ 
    let field2=newfield();
    let nextgen = []
    for (let i=0; i < field2.length; i++){
        nextgen.push( deadoralive(i) )
    }
    return nextgen;
} 
// Making a new array to work out the new field
// Making inputs for this is going to be hard if we don't have an interface. I suggest we make an interface for it. 
let newnewfield = nextgeneration()
console.log(newnewfield)
console.log(surroundSum(44))
console.log(surroundSum(51)) // should be 4 :D
console.log(surroundSum(52)) // should be 2 :D
console.log(deadoralive(51))
console.log(deadoralive(52))
console.log(deadoralive(44))
// for (let k=0; k < field.length;k++){
//     console.log(field[k])
// }