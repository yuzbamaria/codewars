// Task 
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F


export function abbrevName(name: string): string {
    const [first, second] = name.split(' ');
    return `${first[0]}.${second[0]}`.toUpperCase();
}

// Option 2
// export function abbrevName(name: string): string {
//     return name.split(" ").map((item)=> item[0].toUpperCase()).join('.')
// }