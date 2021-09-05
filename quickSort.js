function quickSort(x, first, last) {
    let i = 0, j = 0;
    let p = x[ Math.floor((first + last) / 2) ];
    for(i = first, j = last; ; i++, j--){
        while( x[i] < p ) i++;
        while( p < x[j] ) j--;
        if( i >= j) break;
        let w = x[i];
        x[i] = x[j];
        x[j] = w;
    }
    if(first < i - 1) quickSort(x, first, i-1);
    if(j + 1 < last) quickSort(x, j + 1, last);
}

let a = [7, 2, 5, 1, 8, 9, 3, 4, 6];
quickSort(a, 0, a.length-1);
console.log(a);