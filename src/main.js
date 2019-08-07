function component() {
    var element = document.getElementById('container')
    element.className = 'app-container'
    return element
}
document.body.appendChild(component())
