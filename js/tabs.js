const tabs = document.querySelectorAll(".tabs__tab");
const content = document.querySelectorAll(".tabs__text");
const tabsArr = Array.prototype.slice.call(tabs);





tabs.forEach(tab => {
      tab.addEventListener("click", e => {
            resetStyles();
            tab.classList.add("tabs__tab--active");
            tab.children[1].classList.add("tabs__headline--active");
            content[tabsArr.indexOf(tab)].classList.add("tabs__text--active");
      });
})

function resetStyles() {
      for (i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("tabs__tab--active")
            tabs[i].children[1].classList.remove("tabs__headline--active");
            content.forEach(text => {
                  text.classList.remove("tabs__text--active");
            })
      }
}