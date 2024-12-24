// Equal (=)
function result() {
    var result = document.getElementById("result").value
    var answer = eval(result)
    if (result === "") {
        alert("ماشین حساب خالی میباشد")
    } else {
        document.getElementById("result").value = answer
    }
}
// ClearAll (AC)
function clearAll() {
    document.getElementById("result").value = ""
}
// clear Last Charachter (C)
function clearLast() {
    let str = document.getElementById("result").value
    str = str.slice(0, -1)
    document.getElementById("result").value = str
}
// Show Numbers
function display(value) {
    var result = document.getElementById("result").value
    var lastChar = result.charAt(result.length - 1) //دریافت آخرین کاراکتر
    if (value == '*' || value == '/' || value == '+' || value == '-' || value == '.') {
        if (lastChar == '*' || lastChar == '/' || lastChar == '+' || lastChar == '-' || lastChar == '.') {
            alert("فقط از یک عملگر میتونی استفاده کنی")
            return
        }
    }
    result += value;
    document.getElementById("result").value = result
}