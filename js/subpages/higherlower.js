function higherlower() {
    console.log('func activated')
    const inputWeight = document.getElementById("numberInput").value
    const output = document.getElementById("output")
    const explanation = document.getElementById("explanation")


    if (inputWeight < 2441600000 ) {
        output.innerHTML = ("je hebt te laag gegokt!")
    } else if ( inputWeight > 2441600000) {
        output.innerHTML = ("dat was iets te hoog!")
    } else {

        output.innerHTML = ("Perfect, wij verspillen 2441600000kg voedsel per jaar (EN RICK IS GAY)")
        let linkText = "milieucentraal.nl";
        let link = linkText.link("https://www.milieucentraal.nl/minder-afval/afval-scheiden/afval-scheiden-cijfers-en-kilo-s/")
        explanation.innerHTML = ("Volgens " + link + " wordt er 140kg aan gft per jaar per persoon gebruikt 140 × 17.44 miljoen mensen = 2441600000kg. \n Kijk op de \" hoeveel verpillen we\" pagina voor meer informatie")

    }

}