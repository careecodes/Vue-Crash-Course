// Hello my dudes

const app = new Vue({
    el: "#app",
    data: {
        user: {
            firstName: 'Caree',
            lastName: 'Youngman',
            age: 24,
        }
    },
    template: 
    `
    <div>
        <h1>{{user.firstName}} {{user.lastName}} {{user.age}}</h1>
    </div>
    `
})