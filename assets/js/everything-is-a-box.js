function addBoxesEverywhere() {
    var insertBricksLI = document.createElement("li");
    var elementBricks = document.querySelectorAll("ul.group-wrapper.right")[0];
    insertBricksLI.innerHTML = '<span id="bricks-box-everywhere"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;}</style></defs><g fill="currentColor"><path d="M22,2V22H2V2H22m2-2H0V24H24V0Z"/><path d="M16.9,7.1v9.8H7.1V7.1h9.8m2-2H5.1V18.9H18.9V5.1Z"/><path class="a" d="M.3.3h24v24H.3Z"/></g></svg></span></li>';
    if (elementBricks){
        elementBricks.insertBefore(insertBricksLI, elementBricks.firstChild);
        const styleBoxBricks = document.createElement("style");
        styleBoxBricks.textContent = "html.box-outline * {outline: 1px solid crimson;}"
        document.getElementById("bricks-builder-iframe").contentDocument.head.appendChild(styleBoxBricks);

        return true;
    }
    return false;
};

window.onload = () => {
    if (!window.bricksData && window.bricksIsFrontend) return;
    if (addBoxesEverywhere()){
        let buttonClick = document.querySelector("#bricks-box-everywhere");
        buttonClick.addEventListener("click", function () {
            document.getElementById("bricks-builder-iframe").contentDocument.firstElementChild.classList.toggle("box-outline");
        });
    };
};

