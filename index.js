// debugger;
array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
arrayPositiveElements = [];
arrayNegativeElements = [];
minElementArray = array[0];
numberIndexMinElementArray = 0;
maxElementArray = array[0];
numberIndexMaxElementArray = 0;
sumPositiveArray = 0;
sumNegativeArray = 0;
evenElementArray = [];
quantityEvenArray = 0;
sumEvenElementArray = null;
notEvenElementArray = [];
quantityNotEvenArray = 0;
sumNotEvenElementArray = null;
multiplicationPositiveArray = 1;
newArray = [];

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        arrayPositiveElements.push(parseFloat(array[i]));
    } else {
        arrayNegativeElements.push(parseFloat(array[i]));
    }

    if (array[i] < minElementArray) {
        minElementArray = array[i];
        numberIndexMinElementArray = i ;
    }

    if (array[i] > maxElementArray) {
        maxElementArray = array[i];
        numberIndexMaxElementArray = i ;
    }
}

for (i = 0; i < arrayPositiveElements.length; i++) {
    sumPositiveArray += arrayPositiveElements[i];
    multiplicationPositiveArray *= arrayPositiveElements[i];

    if (arrayPositiveElements[i] > 0 && arrayPositiveElements[i] % 2 !== 0) {
        notEvenElementArray.push(parseInt(arrayPositiveElements[i]));
        quantityNotEvenArray++;
        sumNotEvenElementArray += arrayPositiveElements[i];
    } else {
        evenElementArray.push(parseInt(arrayPositiveElements[i]));
        quantityEvenArray++;
        sumEvenElementArray += arrayPositiveElements[i];
    }
}

for (i = 0; i < array.length; i++) {
    newArray.push(array[i]);

    if (array[i] !== maxElementArray) {
        newArray[i] = 0;
    }
}

document.write(`<div style='font-size: 25px;'>
Дан масив: ${array.join(', ')} <br>
Сума позитивних елементів: ${sumPositiveArray}<br>
Кількість позитивних елементів: ${arrayPositiveElements.length}<br>
Мінімальний елемент масиву: ${minElementArray}<br>
Порядковий номер мінімального елемента масіву: ${numberIndexMinElementArray}<br>
Максимальний елемент масиву: ${maxElementArray}<br>
Порядковий номер максимального елемента масіву: ${numberIndexMaxElementArray}<br>
Кількість негатівних елементів: ${arrayNegativeElements.length}<br>
Кількість непарних позитивних елементів: ${quantityNotEvenArray}<br>
Кількість парних позитивних елементів: ${quantityEvenArray}<br>
Сума парних позитивних елементів: ${sumEvenElementArray}<br>
Сума непарних позитивних елементів: ${sumNotEvenElementArray}<br>
Добуток позитивних елементів: ${multiplicationPositiveArray}<br>
Знайти найбільший серед елементів масиву, остальні обнулити: ${newArray.join(', ')}
</div>`);