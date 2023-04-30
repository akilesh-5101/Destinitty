import data from './data.json' assert { type: 'json' };

const canteen_image = document.querySelector('#one');
const canteen_desc = document.querySelector('#desc1');
const canteen_name = document.querySelector('#namec1');

canteen_image.src = data.canteens.src ;
canteen_desc.textContent = data.canteens.description;
canteen_name.textContent = data.canteens.name;