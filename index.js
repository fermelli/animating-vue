const App = {
	name: 'App',
	template: /*html*/ `
        <the-navbar/>
        <div class="container mx-auto h-[calc(100vh - 50px)] p-4">
            <router-view></router-view>
        </div>
    `,
};

const app = Vue.createApp(App);

app.use(router);

app.component('modal', Modal);
app.component('the-navbar', TheNavbar);

app.mount('#app');
