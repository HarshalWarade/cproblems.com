


let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content__last');
let icons = document.getElementsByClassName('icon__last');
for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#ff0";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#ffffff";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#ffffff";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
};


