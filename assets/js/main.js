/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.taraget)
        
        tabContents.forEach(tc =>{
            tc.classList.remove('filtres__active')
        })
    })
})
/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
