//listing the array
let A = [3,4,3,2,3,-1,3,3];

function solution(A) {

    //getting to initialize an empty arry
    const array = []
    //traversing through the array 
    for (let i=0; i<A.length; i++){
      if (!array[A[i]])
        array[A[i]] = 1
        
      else
        array[A[i]]++
        //checking whether the any of the values appears more than half the length of the array
      if (array[A[i]] > A.length/2)

      //returning a new array
      return A.sort((a,b) =>
      A.filter(v => v===a).length - A.filter(v => v===b).length
        ).pop();


        
    }
    return -1
}
console.log(solution(A))