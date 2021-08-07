// 1. conversion feetToInch

function feetToInch(feet){
    /* 
    const inch = feet * 12;
    return inch; 
    */

    return feet * 12;
}

const requiredFeet = feetToInch(3);
console.log(requiredFeet);

// 2. conversion centimeterToMeter

function centimeterToMeter(centimeter){
    /* 
    const meter = centimeter / 100;
    return meter; 
    */

    return centimeter / 100;
}

const requiredMeter = centimeterToMeter(420);
console.log(requiredMeter);

/* 
3. calculation page
  pageRequirements
  book1 has 100 pages
  book2 has 200 pages
  book3 has 300 pages
*/

function pageRequirements(book1Quantity, book2Quantity, book3Quantity){
    const pagesOfBooks = [100, 200, 300];
    const requiredPage = (pagesOfBooks[0] * book1Quantity) + (pagesOfBooks[1] * book2Quantity) + (pagesOfBooks[2] * book3Quantity);

    return requiredPage;
}

const requiredPagesForBooks = pageRequirements(3, 2, 1);
console.log(requiredPagesForBooks);

// 4. bestFriend of friends; return string

function bestFriend(friends){
    let besty = friends[0];
    for (const friend of friends){
        if (friend.length > besty.length){
            besty = friend;
        }
    }
    return besty;
}

const closeFriends = ["arefin", "nahid", "shadhin", "bappi", "khairul", "rafsan", "chamak", "didi", "mahfuz", "ovi", "saeid"];

const requredBestFriend = bestFriend(closeFriends);
console.log(requredBestFriend);

// 5. onlyPositive will stop the loop if the array has any negative number and returns all the positive number before the negative number.

function onlyPositive(array){
    const requiredPositiveArray = [];
    for (const element of array){
        if (element < 0){
            break;
        }
        // console.log(element);
        requiredPositiveArray.push(element);
    }
    return requiredPositiveArray;
}

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21,-89, 63, 67, 69, 78, 83, 94, 86, 73, 71, 0, 100];
// console.log("Required positive numbers are: ");
const positiveNumbersArray = onlyPositive(numbers);
console.log(positiveNumbersArray);

// all the requirements are fulfilled
// problem solving concept cleared!!!