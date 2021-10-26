function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var formGen = document.getElementsByName('radgen')
        var idade = ano - Number(formAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // esse var img é para adicionar uma tag de imagem no javascript
        if (formGen[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/homem-crianca.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'imagens/homem-jovem.png')
            }
            else if (idade <60) {
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }
            else if (idade > 60 && idade < 123) {
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }
        else if (formGen[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }
            else if (idade > 60 && idade < 123) {
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}