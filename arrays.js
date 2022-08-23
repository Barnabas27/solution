let A = [3,4,3,2,3,-1,3,3];

function solution(A) {
    const length = A.length
    if (length > 100000) return -1
    const counters = new Array(length).fill(0)
    const negativeCounters = new Array(length).fill(0)
    for (i=0; i < length; i++){
        if (A[i] < -2147483648 || A[i] > 2147483647) return -1
        if (A[i] > -1){
            counters[A[i]] = counters[A[i]] + 1
            if (counters[A[i]] > (length / 2)) return i
        } else {
            negativeCounters[A[i] * -1]  =  negativeCounters[A[i] * -1] + 1
            if (negativeCounters[A[i] * -1] > (length / 2)) return i
        }
    }
    return -1
}