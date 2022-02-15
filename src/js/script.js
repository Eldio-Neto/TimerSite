var timer = document.getElementById("tempo")
var is = 0
var im = 0
var ih = 0
var play1 = false
var play2 = false
var play3 = false
var segundos;
var atualizacao;
var listaTempos = []





function atualizarsegundos() {
    is++

    if (is == 60) {
        is = 0
        im++

        if (im == 60) {
            im = 0
            ih++
        }
    }


    variação = (ih < 10 ? "0" + ih : ih) + " : " + (im < 10 ? "0" + im : im) + " : " + (is < 10 ? "0" + is : is)
    timer.innerText = variação

}

function iniciar() {

    if (!play1) {
        segundos = setInterval(atualizarsegundos, 1000)


        play1 = true
        play2 = false
    }


}

function pause() {

    if (!play2) {
        clearInterval(segundos)
        play2 = true
        play1 = false
    }

}

function zerar() {

    is = 0
    im = 0
    ih = 0

    timer.innerText = "00 : 00 : 00"

    clearInterval(segundos)
    play2 = false
    play1 = false

    //hiddedisplay()
    //deletelistaTempos()

}

function idGenerator() {

    let timestamp = new Date()

    let id = timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id
}


function salvar() {

    var timeDescription = document.getElementById("tempo").innerHTML

    var list = {
        id: idGenerator(),
        data: {
            description: timeDescription
        }
    }

    listaTempos.push(list)

    updateScreen()

    showdisplay()

   

}

function updateScreen() {

    var a = document.getElementById("tempos")

    var tempos = "<ul>"

    listaTempos.forEach((list => {


        tempos += "<li id-data=" + list.id + ">" + list.data.description + "<button onclick=deleteItem(this) id-data=" + list.id + ">" + "Apagar</button>" + "</li>"

    }))


    tempos += "</ul>"

    a.innerHTML = tempos


}

function deleteItem(element) {

    listaTempos = listaTempos.filter(list => list.id != element.getAttribute("id-data"))

    updateScreen()
    hidedisplay2()


}


function deletelistaTempos() {

    listaTempos = []
    updateScreen()
    hidedisplay()

}

function showdisplay() {
    let display = document.getElementById("seustempos")
    display.style.display = "inline-block"
}

function hidedisplay() {
    let display = document.getElementById("seustempos")
    display.style.display = "none"

}

function hidde() {
       
    if (document.getElementsByTagName("li").length == 0) {

        let display = document.getElementById("seustempos")
        display.style.display = "none"
        
        clearInterval(atualizacao)
        play3 = false
        
        
    }
    

}

function hidedisplay2() {
    if (!play3) {
        atualizacao = setInterval(hidde, 1)
        play3 = true
        
    }
}
