(function(){
    // menu
    const heaerMiddleNav = document.getElementById('heaerMiddleNav')
    const toggleIconWrapper = document.getElementById('toggleIconWrapper')

    toggleIconWrapper.addEventListener('click', function(e){
        heaerMiddleNav.classList.toggle("showMobileMenu")
    })

    // right nav
    const clickHeaderRightNav = document.getElementById('clickHeaderRightNav')
    const showHeaderRightNav = document.getElementById('showHeaderRightNav')

    clickHeaderRightNav.addEventListener('click', function(e){
        showHeaderRightNav.classList.toggle("showRightNav")
    })
})()

 