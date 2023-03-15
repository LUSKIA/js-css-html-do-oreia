const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn = document.querySelector("[data-equals]");
const clearBtn = document.querySelector("[data-clear]");
const display = document.querySelector("#digite");


numberBtns.forEach((i) => {
    console.log(i)
    i.addEventListener("click", () => {
        display.value += i.innerHTML;
    });
});

operationBtns.forEach((i) => {
    i.addEventListener("click", () => {
        display.value += i.innerHTML;
    })
})

equalsBtn.addEventListener('click', () => {
    display.value = eval(display.value);
});

// CLEAR BUTTON

clearBtn.addEventListener('click', () => {
    display.value = '';
});


