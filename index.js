function homework() {
    let me = {
        age: 12,
        name: "Artem",
        isStudent: true,
        myString: "hello",
        mynumber: 10,
        mynull: null
    }
    console.log(me.isStudent,me.mynumber + 10)
    let username = prompt("Введіть своє ім’я")
    let first= confirm("Ви дійсно хочете покинути сторінку?")
    if (first) {
        alert("Увага! Дія може бути небезпечною.")
        let second = confirm("Ви впевнені, що хочете продовжити?")
        if (second) {
            window.location.href = "about:blank";
        }
    }
}
homework()