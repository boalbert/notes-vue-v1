# Notes-app / Anteckningsapp (Vue.js)

Enkel applikation för att hantera anteckningar skapad för kursen `Utveckling av Webapplikationer VT2021`.


## Allmänt

* Skapad i Vue.js
* Layout är uppbyggd mha. Flexbox
* Dark-mode funktionalitet är skapat i ren Javascript och sparas i localstorage
* Varje anteckning sparas i en `item[]` som fyller på Vue.component `note-item`
* Sorteras efter `pinned:boolean`
* Storlek på typsnitt etc anpassas via `@media-queries`


## Demo

![](https://raw.githubusercontent.com/boalbert/notes-vue/master/demo-notes-app.gif)

