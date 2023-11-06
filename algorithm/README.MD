Get input value to array: arr
Create 2 variable: indexMax, indexMin to storage index of max number, min number in the arr, start value = 0
Find max, min
Create term variable: i = 1 to i = 5 and compare arr[i] with arr[indexMax] and arr[indexMin],

- arr[i] > arr[indexMax] =>indexMax = i
- arr[i] < arr[indexMin] =>indexMin= i
  If we sum everything except arr[indexMax] we got the minimum sum,basicly let sum of 5 minus arr[indexMax]
  If we sum everything except arr[indexMin] we got the maximum sum,basicly let sum of 5 minus arr[indexMin]
  Print out result
