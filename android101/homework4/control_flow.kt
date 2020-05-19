// Fizzbuzz

val max: Int = 100
var counter: Int = 1

while(counter <= max) {
    if(counter.rem(3) == 0 && counter.rem(5) == 0){
        Log.d("mainActivity", "FizzBuzz")
    } else if(counter.rem(3) == 0) {
        Log.d("mainActivity", "Fizz")
    } else if (counter.rem(5) == 0) {
        Log.d("mainActivity", "Buzz")
    } else {
        Log.d(counter)
    }
    
    counter += 1
}