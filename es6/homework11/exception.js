function reverseJsonArray(stringifiedArray) {
  try {
    return JSON.stringify(JSON.parse(stringifiedArray).reverse())
  } catch (e) {
    return false
  }
}

reverseJsonArray()
reverseJsonArray(true)
reverseJsonArray([1, 2, 3])
reverseJsonArray("This boy")
reverseJsonArray("[1]")
reverseJsonArray("[]")
reverseJsonArray("[1,2,3,4")
reverseJsonArray("[1,2,3]")
