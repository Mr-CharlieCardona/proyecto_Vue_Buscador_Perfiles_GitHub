const API = "https://api.github.com/users/";



const app = Vue.createApp({
    data() {
        return {
            search: null
        };
    },
    methods: {
        async doSearch() {
            const response = await fetch(API + 'juanwmedia')
            const data = await response.json()
            console.log(data)
        }
    }
});
