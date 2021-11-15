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

    // accordion

    const clickOnHeader = document.getElementsByClassName('accordion-header');
    const accordion = document.getElementsByClassName('accordion');
    [...accordion].forEach(children => {
        children.addEventListener('click', function(){
            [...accordion].forEach(children =>{
                children.classList.remove('active-accordion')
            })
            children.classList.add('active-accordion')
        })
    })

    // popup
    const video_popup_icon = document.getElementById("video_popup_icon");
    const video_popup = document.getElementById("video_popup");
    video_popup_icon.addEventListener('click', function(){
        video_popup.style.display = "block"
    })
    video_popup.addEventListener('click', function(){
        video_popup.style.display = "none"
    })
})()

 