function incNum() {
    var input = document.getElementById("number").value
    input = parseInt(input)
    input += 1
    document.getElementById("number").value = input
}
function decNum() {
    var input = document.getElementById("number").value
    input = parseInt(input)
    input -= 1
    document.getElementById("number").value = input
}
function resNum() {
    document.getElementById("number").value = "0"
}