const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];


console.log(courses[0]);
console.log(courses[courses.length - 1]);
console.log(courses.length);
4

courses.push('Café');

const total = document.querySelector("#total");
const liste = document.querySelector("#liste");

total.textContent = `${courses.length} articles`

for (let i = 0; i < courses.length; i++) {
    const li = document.createElement("li");

    li.textContent = `${i + 1}. ${courses[i]}`;

    liste.appendChild(li);
}

courses.forEach(function(article, index) {
    const li = document.createElement("li");

    li.textContent = `${index + 1}. ${article}`;

    liste.appendChild(li);
});