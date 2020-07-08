/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function mergeSort(arr) {
    if (arr.length === 1) {
      return arr
    }
  
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
  
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge(left, right) {
    const result = []
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    
    return [ ...result, ...left, ...right ]
  }
  
  var findMedianSortedArrays = function(nums1, nums2) {
      const concatenatedArr = [...nums1, ...nums2]
      const sortedConcatenatedArr = mergeSort(concatenatedArr)
      const medianIndex = Math.ceil(sortedConcatenatedArr.length / 2) -1
      const medianMin = sortedConcatenatedArr[medianIndex]
      if (sortedConcatenatedArr.length % 2 === 1) {
          return medianMin
      }
      const medianMaxIndex = medianIndex + 1
      const medianMax = sortedConcatenatedArr[medianMaxIndex]
      return (medianMin + medianMax) / 2
  };