/***********************************************************************
* File that contains utility functions for the Board component
***********************************************************************/

// generayes a random integer from min - max inclusive
const randomIntGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/***********************************************************************
* Pure function that takes a symmetrical 2D array as an argument and
* returns a new 2D array that is shuffled using the Fisher Yates Shuffle
*
* The array is symmetrical so on each iteration the row/col is calculated
* from i, which counts down from the number of total elements. A random
* integer in the range 0 <= j <= i, is generated and the appropriate
* row and column is calculated from j.

***********************************************************************/

export default function shuffle(oldArr) {
    const arr = oldArr.slice();
    const elementsPerRow = arr.length;
    const totalElements = Math.pow(arr.length, 2);

    for (let i = totalElements - 1; i > 0; i--) {

        // calculate the position of the current element
        const currRow = Math.floor(i / elementsPerRow);
        const currCol = i % elementsPerRow;

        // 0 <= j <= i
        const j = randomIntGenerator(0, i);

        // calculate the position of a random element
        const randRow = Math.floor(j / elementsPerRow);
        const randCol = j % elementsPerRow;

        //swap the current element with a random index
        [arr[currRow][currCol], arr[randRow][randCol]] = [arr[randRow][randCol], arr[currRow][currCol]];
    }
    return arr;
}