//Example:
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
    var boxChoc = 6;
    return boxChoc * 500;
}

example.textContent = "There are a total of " + getChoc() + " pieces of chocolate.";

//1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?

function getPeople() {
    var perSeat = 6;
    return perSeat * 14;
}

prob1.textContent = "A total of " + getPeople() + " people can ride together.";

//2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?

function getPlants() {
    var rows = 52;
    return rows * 15;
}

prob2.textContent = "There are " + getPlants() + " plants total.";

//3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?

function getPages() {
    var frames = 143;
    return  frames / 11;
}

prob3.textContent = "Julian has a total of " + getPages() + " pages.";

//4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?

function getShirts() {
    var cotton = 60;
    return cotton * 4;
}

prob4.textContent = "A total of " + getShirts() + " tee-shirts can be made.";

//5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?

function getMoney() {
    var tShirt = 9;
    return tShirt * 200;
}

prob5.textContent = "A total of $" + getMoney() + " was made.";

//6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?

function getTables() {
    var guests = 248;
    return guests / 4;
}

function getCandles() {
    return getTables() * 2
}

prob6.textContent = "A total of " + getTables() + " tables and " + getCandles() + " candles.";

//7. Beth has 4 packs of Crayons. Each pack has 10 crayons in it. She also has 6 extra Crayons. How many Crayons does Beth have altogether?

function getCrayons() {
    var pack = 10;
    return (4 * pack) + 6;
}

prob7.textContent = "A total of " + getCrayons() + " crayons.";