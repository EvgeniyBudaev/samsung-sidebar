const menu_bar = document.querySelector('.menu-bar')
const mobile_drop = document.querySelector('.mobile-drop')
const tv_drop = document.querySelector('.tv-drop')
const mobile_item = document.querySelector('.mobile-item')
const tv_item = document.querySelector('.tv-item')
const back_mobile_btn = document.querySelector('.back-mobile-btn')
const back_tv_btn = document.querySelector('.back-tv-btn')

mobile_item.onclick = (() => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    mobile_drop.style.display = "block"
  }, 100)
})

tv_item.onclick = (() => {
  menu_bar.style.marginLeft = "-400px";
  setTimeout(() => {
    tv_drop.style.display = "block"
  }, 100)
})


back_mobile_btn.onclick = (() => {
  menu_bar.style.marginLeft = "0";
  setTimeout(() => {
    mobile_drop.style.display = "none"
  }, 100)
})

back_tv_btn.onclick = (() => {
  menu_bar.style.marginLeft = "0";
  setTimeout(() => {
    tv_drop.style.display = "none"
  }, 100)
})
