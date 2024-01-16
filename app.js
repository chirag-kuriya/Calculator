// "9-(5+3)*4/6"
let string = prompt("Enter your equation here :")
let val = [];
let op = [];

for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    let char = string[i];
    // let ascii = char.charCodeAt(0); //there is only one index for char
    // // console.log(ascii);
    // if(ascii>=48 && ascii<=57){
    //     val.push(ascii-48); 
    // }
    if (!isNaN(parseInt(char))) {
        let num = parseInt(char);
        while (!isNaN(parseInt(string[i + 1]))) {
            num = num * 10 + parseInt(string[i + 1])
            i++;
        }
        val.push(num)
    }
    else if (op.length == 0 ||  char == '('||(op[op.length - 1] == '('&&char!=')')) {
        op.push(char);
    }
    else if (char == ')') {
        while (op[op.length - 1] != '(') {
            let v2 = val.pop();
            let v1 = val.pop();
            if (op[op.length - 1] == "+") val.push(v1 + v2);
            if (op[op.length - 1] == "-") val.push(v1 - v2);
            if (op[op.length - 1] == "*") val.push(v1 * v2);
            if (op[op.length - 1] == "/") val.push(v1 / v2);
            op.pop();
        }
        op.pop();
    }
    else {
        if (char == "+" || char == "-") {
            //work
            let v2 = val.pop();
            let v1 = val.pop();
            if (op[op.length - 1] == "+") val.push(v1 + v2);
            if (op[op.length - 1] == "-") val.push(v1 - v2);
            if (op[op.length - 1] == "*") val.push(v1 * v2);
            if (op[op.length - 1] == "/") val.push(v1 / v2);
            op.pop();

            //push
            op.push(char);

        }
        if (char == "*" || char == "/") {
            if (op[op.length - 1] == "*" || op[op.length - 1] == "/") {
                //work
                let v2 = val.pop();
                let v1 = val.pop();
                if (op[op.length - 1] == "*") { val.push(v1 * v2) };
                if (op[op.length - 1] == "/") { val.push(v1 / v2) };
                op.pop();
                op.push(char);
            }
            else {
                op.push(char)
            }

        }
    }
}
//val stack size > 1
while (val.length > 1) {
    let v2 = val.pop();
    let v1 = val.pop();
    if (op[op.length - 1] == "+") val.push(v1 + v2);
    if (op[op.length - 1] == "-") val.push(v1 - v2);
    if (op[op.length - 1] == "*") val.push(v1 * v2);
    if (op[op.length - 1] == "/") val.push(v1 / v2);
    op.pop();
}
alert(val[0])