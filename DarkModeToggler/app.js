//Function to change the theme mode
function darkMode(){
     let setTheme = document.body
    setTheme.classList.toggle('dark_mode')

    let theme
    if (setTheme.classList.contains('dark_mode')){
        theme= 'DARK'
    }else {
        theme ='LIGHT'
    }
     //save the theme into localStorage by jsonifying the theme into [ key ,value ] pair
    localStorage.setItem('pageItem', JSON.stringify(theme))

}

//get the theme of Website from localstorage
let getTheme = JSON.parse(localStorage.getItem('pageItem'))

//use the localStorage to set the mode when website opened again
if (getTheme === 'DARK'){
    document.body.classList.add("dark_mode")
}
