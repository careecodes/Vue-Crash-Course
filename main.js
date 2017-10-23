// Hello my dudes

const app = new Vue({
    el: "#app",
    data: {
        firstName: 'Caree',
        lastName: 'Youngman',
        age: 24,
    },
    template: `
    <div>
        <h1>{{firstName}} {{lastName}}</h1>
        <h2>{{age}}</h2>
    </div>
    `
})