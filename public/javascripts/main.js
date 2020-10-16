const menuItemSelected = (item) => {
    let menuItems = document.getElementsByClassName('nav-link-selected')

    for(menuItem of menuItems) {
        menuItem.classList.remove('nav-link-selected')
        menuItem.classList.add('nav-link-text')
    }

    item.classList.remove('nav-link-text')
    item.classList.add('nav-link-selected')
}