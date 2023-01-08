function darkMode(){
     let setTheme = document.body
    setTheme.classList.toggle('dark_mode')

    let theme
    if (setTheme.classList.contains('dark_mode')){
        theme= 'DARK'
    }else {
        theme ='LIGHT'
    }
    localStorage.setItem('pageItem', JSON.stringify(theme))

}

let getTheme = JSON.parse(localStorage.getItem('pageItem'))

if (getTheme === 'DARK'){
    document.body.classList.add("dark_mode")
}
