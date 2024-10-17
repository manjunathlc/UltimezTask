// let number = document.getElementsByTagName('input')
let btn = document.getElementsByTagName('button')
let uleven = document.getElementById('even')
let ulodd = document.getElementById('odd')
let error = document.getElementById('error')

let formhandle = () => {
    let number = document.getElementsByTagName('input')
    if(number[0].value.charCodeAt(0)<48 || number[0].value.charCodeAt(0)>56){
        error.innerText="The Task Value field contains only numbers."
        error.style.color = "red"
        return
    }
    let intNumber = parseInt(number[0].value);
    

    if (intNumber % 2 == 0) {
        let li = document.createElement("li")
        li.innerHTML = number[0].value;
        li.style.marginLeft = "20px"
        uleven.append(li);
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = number[0].value;
        li.style.marginLeft = "20px"
        ulodd.append(li);
    }


}