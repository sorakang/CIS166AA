//the following project requires the use of the following DOM APIs: querySelector(), getElementsByTagName(),
// querySelectorAll(), and getElementById(). In order to complete this project successfully, at one point or another,
// you will have used each of them.

//Using a DOM api, store the header's text in a variable
var header = document.getElementsByClassName('header')[0];
console.log('header', header.innerHTML);

//Using a DOM api, get the number of paragraphs in the page
var paragraphs = document.getElementsByTagName('p');
console.log('paragraphs', paragraphs.length);

//Using a DOM api, get the number of heading tags used in the document
var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
console.log('headers', headings.length);

//Using a DOM api, get the number of list items being used in the unordered list
var list = document.getElementsByTagName('ul')[0];
console.log('list', list.getElementsByTagName('li').length);

//Use the correct DOM api to count the number of links being used in the page
var links = document.querySelectorAll('a');
console.log('links', links.length);

//set a variable to show the maximum number of links allowed on the page is 3
var maxLinks = 3;

//create an if/else statement that argues the following: if the total number of links on the page is greater than
// the maximum number of links allowed, then print the message "This is too many links. The limit is
// (include the variable for the maximum number of links)."

result1.innerHTML = 'The article title is' + String(header.innerHTML).bold();

if (links.length > maxLinks) {
    var tooMany = 'This is too many links. The limit is ' + String(maxLinks).bold();
    result2.innerHTML = 'This article contains ' + String(paragraphs.length).bold()
        + ' paragraphs, and a total of ' + String(list.getElementsByTagName('li').length).bold()
        + ' list items. There are a total of ' + String(headings.length).bold()
        + ' heading tags and ' + String(links.length).bold() + ' links used on the page.'
        + tooMany + '.';
} else {
    result2.innerHTML = 'This article contains ' + String(paragraphs.length).bold()
        + ' paragraphs, and a total of ' + String(list.getElementsByTagName('li').length).bold()
        + ' list items. There are a total of ' + String(headings.length).bold()
        + ' heading tags and ' + String(links.length).bold() + ' links used on the page.';
}