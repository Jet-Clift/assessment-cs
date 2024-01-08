//(1)
let value = false

let hasZeroSumPair = (numbers) => {
    const numbersSet = new Set()
    for (let num of numbers) {
        if (numbersSet.has(-num)) {
            return true
        }
        numbersSet.add(num)
    }
    return false
}
const array1 = [2, -1, 3, 0, -2]
console.log(hasZeroSumPair(array1))
const array2 = [1, 2, 3, 4, 5]
console.log(hasZeroSumPair(array2))


//(2)
let hasUniqueChars = (word) => {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}
console.log(hasUniqueChars('cat'))
console.log(hasUniqueChars('KITTY'))


//(3)
function pangramChecker(str) {
    let letters = {
      a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0,
      k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0,
      u: 0, v: 0, w: 0, x: 0, y: 0, z: 0,
    }

    str = str.toLowerCase();
    const splitStr = str.split('')

    splitStr.forEach(char => {
      if (letters.hasOwnProperty(char)) {
        letters[char]++;
      }
    });

    for (let char in letters) {
      if (letters[char] === 0) {
        return false;
      }
    }

    return true;
}
console.log(pangramChecker('abcdefghijklmnopqrstuvwxyz'))
console.log(pangramChecker('dog')) 


//(4)
function findLongestWord(words) {
    let longestLength = 0
    words.forEach(word => {
        const currentLength = word.length
        if (currentLength > longestLength) {
            longestLength = currentLength
        }
    })
    return longestLength
}
console.log(findLongestWord('dog', 'dawg', 'hotdog', 'HAWTDAWG'))

//Extra credit

//(1) space: O(n) time: O(n^2)
//(2) space: O(n) time: O(n)
//(3) space: O(2n) time: O(2n)
//(4) space: O(n): time: O(1)