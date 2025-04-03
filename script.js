const _input = document.querySelector(".inputBox");
const _list = document.querySelector(".list");
const _button = document.querySelector(".button");

function NewWork()
{
    if(_input.value === "")
        return;
    const _work = document.createElement("li");
    _work.innerHTML = `
        <input type="checkbox" class="checkbox">
        <label>${_input.value}</label>
        <button class="delet">X</button>
    `

    const _delet = _work.querySelector(".delet");
    const _chack = _work.querySelector(".checkbox");

    _delet.addEventListener("click", function(){
        _work.remove();
    });

    _chack.addEventListener("change", function(){
        if(_chack.checked){
            _work.style.textDecoration = "line-through";
            _work.style.color = "#999";
            _list.append(_work);
        }else{
            _work.style.textDecoration = "none";
            _work.style.color = "";
            _list.prepend(_work);
        }
    });

    _list.append(_work);
    _input.value = "";
}

_button.addEventListener("click", NewWork)

_input.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
        NewWork();
    }
});
