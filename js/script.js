Vue.component('note-item', {
    template:
        `
              <div class="agenda-card">
                  <div class="agenda-card-header">
                    <h3><span v-if="pin">📌 </span>{{ title }}</h3> 
                  </div>
                  <p>{{ content }} </p>
                  <p class="date">{{ date }}</p>
                  <div class="agenda-card-button-container">
                    <div class="agenda-card-button-row">
                      <button @click=pinItem>📌</button>
                      <button @click="removeItem">❌</button>
                    </div>
                  </div>
              </div>`,
    props: ['title', 'content', 'pin', 'date'],
    methods: {
        removeItem() {
            this.$emit('remove-item')
        },
        pinItem() {
            this.$emit('pin-item')
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        items: [
            {
                id: 1,
                title: 'Call John!',
                content: 'Contact John next week regarding the business plan',
                pinned: false,
                color: '',
                date: 'Sat Apr 10 2021'
            },
            {
                id: 2,
                title: 'Shopping',
                content: 'Milk, cheese, bread, avocado.',
                pinned: false,
                color: '',
                date: 'Sun Apr 11 2021'
            },
            {
                id: 3,
                title: 'Laboration 2',
                content: 'Dont forget to submit the assignment on Friday!',
                pinned: false,
                color: '',
                date: 'Thu Apr 08 2021'
            },
            {
                id: 4,
                title: 'Netflix details',
                content: 'login: username@email.com password: aGreatPass88',
                pinned: false,
                color: '',
                date: 'Fri Apr 09 2021'
            },
            {
                id: 5,
                title: 'Daycare closed',
                content: 'Daycare is closed week 28 - 32',
                pinned: false,
                color: '',
                date: 'Sun Apr 11 2021'
            },
            {
                id: 6,
                title: 'Vacation',
                content: 'Contact Anders regarding vacation week 23 - 24. Wondered if I can come in and work. ',
                pinned: false,
                color: '',
                date: 'Mon Apr 12 2021'
            },
            {
                id: 7,
                title: 'Runs this week (workout-plan)',
                content: 'mon: easy pace(45min), tue: intervals (50min), thur: progression run(40min), sat: long run (100min)',
                pinned: false,
                color: '',
                date: 'Tue Apr 13 2021'
            }
        ],
        nextItemId: 8,
        newItemTitle: '',
        newItemDesc: '',
    },
    methods: {
        addNewItem: function () {
            this.items.push({
                id: this.nextItemId++,
                title: this.newItemTitle,
                content: this.newItemDesc,
                pinned: this.pinned = false,
                date: this.calcNewDate()
            })
            this.newItemTitle = ''
            this.newItemDesc = ''
        },
        calcNewDate: function () {
            return new Date().toDateString()
        },
        remove(index) {
            this.items.splice(index, 1)
        },
        pin(index) {
            // if-block checks status of pinned
            // this makes it toggleable
            if (this.items[index].pinned === false) {
                this.items[index].pinned = true
                // adds border-top
                this.items[index].color = '2px solid #CF6679'
            } else {
                this.items[index].pinned = false
                // unpinning removes border top
                this.items[index].color = ''
            }
        }
    },
    computed: {
        sortedItems: function () {
            let sortByPinned = this.items;

            sortByPinned = sortByPinned.sort((a, b) => {

                return b.pinned - a.pinned;
            })

            return sortByPinned;
        },
        countNumberOfNotes: function () {
            return this.stats = this.items.length;
        },
        countWords: function () {
            let countWords = 0

            for (let i = 0; i < this.items.length; i++) {
                countWords += this.items[i].content.split(" ").length;
            }

            return countWords;
        },
        countPinned: function () {
            let countPinned = 0

            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].pinned) {
                    countPinned++
                }
            }
            return countPinned;
        },
        countTheWordContact: function () {
            let countContact = 0

            for (let i = 0; i < this.items.length; i++) {

                let desc = this.items[i].content.toLowerCase();

                if (desc.includes('contact')) {
                    countContact++;
                }
            }
            return countContact;
        }
    }
})

// Dark theme, localstorage
const btn = document.querySelector(".btn-toggle-darkmode"); // Fetch the button

const currentTheme = localStorage.getItem("theme"); // Fetch saved properties from localstorage

if (currentTheme === 'dark') { // If it is 'dark'
    document.body.classList.add("dark-theme"); // add class .dark-theme to body
}

console.log('Dark mode: pressed')

btn.addEventListener('click', function () {
    console.log('Dark mode: pressed')
    document.body.classList.toggle('dark-theme'); // toggle dark-theme on/off

    let theme = 'light'; // default, if dark-theme is not toggled on localstorage is set to 'light'
    if (document.body.classList.contains('dark-theme')) { // if dark-theme is toggled on, set theme to 'dark'
        theme = 'dark';
    }
    localStorage.setItem('theme', theme); // save current theme to localstorage
});