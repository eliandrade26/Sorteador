function generateNumber(){
    
    const min=Math.ceil (document.querySelector(".input-min").value) // Vinculando a variavel min ao input-min do html e buscando apenas o valor
    const max=Math.floor(document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;//
  
    alert(result)
}