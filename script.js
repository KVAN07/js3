var a = +prompt('Введите число')    // 2
var b = +prompt('Введите степень')  // 5
var c = 1

for (var i = 0; i < b; i++){
    c = c * a
}
alert(c)


var kolvo = +prompt('Введите количество ступень')
var znak = prompt('Введите знак отступа')
var end = prompt('Введите последний знак')

for (var i = 0; i < kolvo; i++) {
    var znak = ''
    for (var j = 0; j < i; j++) {
        znak += '_'
    }
    console.log(znak + end);
}