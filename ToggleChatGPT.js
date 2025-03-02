// ==UserScript==
// @name         ToggleFullScreenChatGPT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Скрывает элементы на web:chatgpt.com по указанным селекторам.
// @author       Артем
// @match        *://chatgpt.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let isHidden = false; // Статус скрытия элементов

    // Класс для скрытия
    const HIDDEN_CLASS = "custom-hidden-style";

    // Добавляем CSS для скрытия
    const style = document.createElement("style");
    style.innerHTML = `
        .${HIDDEN_CLASS} {
            display: none !important;
        }
    `;
    document.head.appendChild(style);

    // Список селекторов для скрытия
    const selectors = [
        "#composer-background",
        ".h-header-height",
        ".md\\:px-\\[60px\\]",
        ".right-2",
        ".min-h-\\[60px\\]",
    ];

    // Функция для переключения видимости
    function toggleElements() {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (isHidden) {
                    el.classList.remove(HIDDEN_CLASS);
                } else {
                    el.classList.add(HIDDEN_CLASS);
                }
            });
        });
        isHidden = !isHidden;
    }

    // Добавляем кнопку на страницу
    //    const button = document.createElement("button");
    //    button.textContent = "Переключить элементы";
    //    button.style.position = "fixed";
    //    button.style.bottom = "10px";
    //   button.style.right = "10px";
    //    button.style.zIndex = "1000";
    //    button.style.padding = "10px";
    //    button.style.backgroundColor = "red";
    //    button.style.color = "white";
    //    button.style.border = "none";
    //    button.style.cursor = "pointer";
    //    document.body.appendChild(button);

    // Обработка клика по кнопке
    //    button.addEventListener("click", toggleElements);

    // Обработка сочетания клавиш (например, Ctrl+Shift+H)
    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.shiftKey && event.key === "S") {
            toggleElements();
        }
    });
})();
