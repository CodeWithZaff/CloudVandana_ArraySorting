function sortArray() {
    let inputArray = document.getElementById('inputArray').value;
    let num = inputArray.split(',').map(Number);
    
    num.sort(function(a, b) {
        return b - a;
    });

    // Display the sorted array
    document.getElementById('result').innerText = 'Sorted Array is: ' + num.join(', ');
}