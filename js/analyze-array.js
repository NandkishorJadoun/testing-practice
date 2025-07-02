export function analyzeArray(array) {
    
    const length = array.length

    const filteredArr = array.filter(item => typeof(item) === 'number' && isFinite(item))

    const sum = filteredArr.reduce((accum, currVal) => accum + currVal, 0);

    const filteredArrLength = filteredArr.length

    const average = sum / filteredArrLength

    const min = Math.min(...filteredArr)

    const max = Math.max(...filteredArr)

    return {
        average, min, max, length
    }
}