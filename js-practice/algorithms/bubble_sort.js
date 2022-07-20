// Bubble sort printing to console

function bubbleSort(arr) {

    var i, j;
    var len = arr.length;

    var isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]           //value at J can't be lost now
                arr[j] = arr[j + 1];        //value at J+1 gets a new position closer to start of the sorted array
                arr[j + 1] = temp;          //swapping complete as j+1 takes the value saved in temp above
                isSwapped = true;
            }
                                    //checks if the limit of the array is reached, loops again if not
        }

        // IF no two elements were swapped by inner loop, then break. It means order is achieved

        if (!isSwapped) {
            break;
        }
    }

    // Print the array
    for(i=0;i<len;i++){
        console.log(arr[i])
    }
    
}

var arr = Array(10).fill().map(() => Math.round(Math.random() * 100))       //generates random integers

// calling the bubbleSort Function
bubbleSort(arr)
