const API = "https://api.github.com/users/";



const app = Vue.createApp({
    data() {
        return {
            message: "Search GitHub users",
        };
    },
    method: {
        async doSearch() {
            const response = await fetch(API + 'juanwmedia')
            const data = await response.json()
            console.log(data)
        }
    }
});
