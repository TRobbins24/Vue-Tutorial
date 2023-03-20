const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.png', isFav: true },
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.png', isFav: false },
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.png', isFav: true }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav 
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')

