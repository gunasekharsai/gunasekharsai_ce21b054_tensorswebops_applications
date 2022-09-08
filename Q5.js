/* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */
/* Write your code here.*/
let sortbyage = people.sort(function(a,b)
{
    return parseFloat(a.age) - parseFloat(b.age)
});
for(var i = 0;i<sortbyage.length;i++)
{
    document.write(sortbyage[i].name+''+sortbyage[i].name);
    document.write("<br>")


}









/* You need to log the array of names using console.log().*/
console.log();