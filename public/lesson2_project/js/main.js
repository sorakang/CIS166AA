var avengers = [
    'Thor',
    'Wasp',
    'Captain America',
    'Iron Man',
    'Hulk',
    'Vision',
    'Hank Pym',
    'Black Panther',
    'Quicksilver',
    'Mantis',
    'Spiderman',
];

avengers.pop();
avengers.push('Black Widow');
avengers.splice(2, 6, 'Nebula', 'Moondragon');

var justiceLeague = [
    'Batman',
    'Superman',
    'Wonder Woman',
    'Flash',
    'Green Lantern',
    'Aquaman',
]

var allTheKids = avengers.concat(justiceLeague);
allTheKids.sort();
allTheKids.reverse();

var a = document.getElementById('avengers');
a.innerHTML = allTheKids.join('<br />');
