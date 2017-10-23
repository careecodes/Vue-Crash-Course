// Hello my dudes

const app = new Vue({
    el: "#app",
    data: {
        Caree: {
            firstName: 'Caree',
            lastName: 'Youngman',
            age: 24,
        }
    },
    template: `
    <div>
        <h1>{{Caree.firstName}} {{Caree.lastName}} {{Caree.age}}</h1>
    </div>
    `
})