var student = {
    name: "a",
    age: "21",
    majoy: "ad",
    hello: function() {
        console.log("hello!");
    }
}
console.log(student.name);
console.log(student.majoy);
student.hello();
for (var i in student) {
    console.log(i + "=" + student[i]);
}
