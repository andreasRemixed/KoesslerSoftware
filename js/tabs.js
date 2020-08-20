const tabs = document.querySelectorAll(".tabs__tab");
const tabsHeadline = document.querySelectorAll(".tabs__headline");
const content = document.querySelectorAll(".tabs__text");
console.log(content);

tabs.forEach(tab => {
    tab.addEventListener("click", e => {
    resetStyles();
    tab.classList.add("activeTab");
    tab.children[1].classList.add("activeHeadline");
    });
  })

  function resetStyles() {
        for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("activeTab")
        tabs[i].children[1].classList.remove("activeHeadline");
        }
  }

  