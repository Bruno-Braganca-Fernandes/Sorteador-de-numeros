function sortear(){

    let min = document.getElementById("minimo").value
    let max = document.getElementById("maximo").value


    let sort = Math.floor(Math.random() * max + 1)

    while(sort<min) {

        sort = Math.floor(Math.random() * max + 1)

    }

    document.getElementById("resultado").innerHTML = sort

}