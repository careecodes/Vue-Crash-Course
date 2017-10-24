// Hello my dudes

const app = new Vue({
    el: "#app",
    data: {
        user: {
            firstName: 'Caree',
            lastName: 'Youngman',
            age: 24,
            userID: 00000
        }
    },
    template: `
    <div>
        <h1>{{user.firstName}} {{user.lastName}} {{user.age}}</h1>
        <h2>{{userID}}</h2>
        <p>Lorem ipsum dolor</p>
    </div>
    `
})