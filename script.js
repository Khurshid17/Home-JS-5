let users = {}
for (let i = 0; i < 3; i++) {
    var name = prompt('Введите имя');
    var age = prompt('Введите возрост');
    user = {
        "name": name,
        "age": age
    }
    users[`Пользователь ${i + 1}`] = user
    // console.log(`Имя ${name}`);
    // console.log(`Возрост ${age}`);
}
for (let key in users) {
    console.log(key);
    console.log(`Имя ${users[key]["name"]}`);
    console.log(`Возрост ${users[key]["age"]}`);
}
console.log(users);