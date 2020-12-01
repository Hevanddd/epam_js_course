function getSize() {
  document.getElementById("wh").innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}


let searchValue = document.getElementById("search-input");
let searchText = document.getElementById("search-text");
let searchResult = document.getElementById("search-result");

searchText.addEventListener(
  "change",
  event => (searchResult.innerHTML = event.target.value)
);

function highlight(text) {
  let innerHTML = searchResult.innerHTML;
  innerHTML = innerHTML.replace(/<b>/g, "");
  innerHTML = innerHTML.replace(/<\/b>/g, "");
  let index = innerHTML.indexOf(text);
  if (index >= 0) {
    innerHTML =
      innerHTML.substring(0, index) +
      "<b>" +
      innerHTML.substring(index, index + text.length) +
      "</b>" +
      innerHTML.substring(index + text.length);
    searchResult.innerHTML = innerHTML;
  }
}

searchValue.addEventListener("change", event => highlight(event.target.value));

let multiItemSlider = (function () {
  return function (selector) {
    let _mainElement = document.querySelector(selector),
      _sliderWrapper = _mainElement.querySelector(".slider__wrapper"),
      _sliderItems = _mainElement.querySelectorAll(".slider__item"),
      _sliderControls = _mainElement.querySelectorAll(".slider__control"),
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
      _positionLeftItem = 0,
      _transform = 0,
      _step = (_itemWidth / _wrapperWidth) * 100,
      _items = [],
      timer = document.getElementById("slider-timer");

    _sliderItems.forEach(function (item, index) {
      _items.push({
        item: item,
        position: index,
        transform: 0
      });
    });

    let position = {
      getMin: 0,
      getMax: _items.length - 1
    };

    let _transformItem = function (direction = "right") {
      if (direction === "right") {
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >=
          position.getMax
        ) {
          _positionLeftItem = 0;
          _transform = 0;
        } else {
          _positionLeftItem++;
          _transform -= _step;
        }
      }
      if (direction === "left") {
        if (_positionLeftItem <= position.getMin) {
          _positionLeftItem = position.getMax;
          _transform = -_step * position.getMax;
        } else {
          _positionLeftItem--;
          _transform += _step;
        }
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };

    let _controlClick = function (e) {
      if (e.target.classList.contains("slider__control")) {
        e.preventDefault();
        let direction = e.target.classList.contains("slider__control_right") ?
          "right" :
          "left";
        _transformItem(direction);
        clearInterval(timerId);
      }
    };

    let _setUpListeners = function () {
      _sliderControls.forEach(function (item) {
        item.addEventListener("click", _controlClick);
      });
    };

    _setUpListeners();

    _sliderItems.forEach(img => {
      img.addEventListener("dblclick", () => {
        if (confirm("Do you want to delete this slide?")) {
          img.remove();
          _items = _items.filter(i => {
            return i.position !== _positionLeftItem;
          });

          if (_positionLeftItem === position.getMax) {
            _transformItem();
          }
          position.getMax = _items.length - 1;
        }
      });
    });
    let timerId = setInterval(_transformItem, timer.value * 1000);

    timer.addEventListener("change", event => {
      clearInterval(timerId);
      timerId = setInterval(_transformItem, event.target.value * 1000);
    });
  };
})();

let slider = multiItemSlider(".slider");

const addBtn = document.getElementById("slider-add-btn");
const slides = document.querySelector(".slider__wrapper");

addBtn.addEventListener("click", () => {
  const imageUrl = document.getElementById("slider-url").value;
  let img = document.createElement("img");
  img.src = imageUrl;
  img.className = "slider__item";
  slides.appendChild(img);
  slider = multiItemSlider(".slider");
});

let myTable = document.getElementById("myTable");

function addField() {
  let currentRow = myTable.insertRow(-1);

  let nameCell = document.createElement("td");
  nameCell.textContent = "Cell";
  nameCell.addEventListener("dblclick", function () {
    const cellInput = document.createElement("input");

    cellInput.addEventListener("change", function (e) {
      nameCell.textContent = e.target.value;
      this.parentNode.replaceChild(nameCell, this);
    });
    this.parentNode.replaceChild(cellInput, this);

    cellInput.focus();
  });

  let surnameCell = document.createElement("td");
  surnameCell.textContent = "Cell";
  surnameCell.addEventListener("dblclick", function () {
    const cellInput = document.createElement("input");

    cellInput.addEventListener("change", function (e) {
      surnameCell.textContent = e.target.value;
      this.parentNode.replaceChild(surnameCell, this);
    });
    this.parentNode.replaceChild(cellInput, this);

    cellInput.focus();
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = function () {
    let row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };

  let currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(nameCell);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(surnameCell);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(deleteBtn);
}
