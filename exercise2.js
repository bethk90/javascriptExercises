/*
2. Print a table containing multiplication tables

Let's start with the tables that many of us had to memorize in school.
Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?
*/

function multiplication() {
    for(let x=1; x<=10; x++){
        for(let y=1; y<=10; y++){
            a = "";
            a += x*y + " ";
            process.stdout.write(a + " ");
        }
        console.log('\n')
    }  
}

multiplication()