var app = angular.module('angularApp', [ ]);

app.controller('angularController', function(){
  this.countries = countries;
})

var countries = [
  {name: 'Bahrain', capital: 'Manama', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/2000px-Flag_of_Bahrain.svg.png'},
  {name: 'Egypt', capital: 'Cairo', flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Egypt_%28variant%29.png'},
  {name: 'Israel', capital: 'Jerusalem', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/660px-Flag_of_Israel.svg.png'},
  {name: 'Iraq', capital: 'Baghdad', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/2000px-Flag_of_Iraq.svg.png'},
  {name: 'Iran', capital: 'Tehran', flag: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Simplified_Flag_of_Iran.png'},
  {name: 'Jordan', capital: 'Amman', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg'},
  {name: 'Kuwait', capital: 'Kuwait City', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/1024px-Flag_of_Kuwait.svg.png'},
  {name: 'Lebanon', capital: 'Beirut', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1280px-Flag_of_Lebanon.svg.png'},
  {name: 'Oman', capital: 'Muscat', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/2000px-Flag_of_Oman.svg.png'},
  {name: 'Qatar', capital: 'Doha', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1000px-Flag_of_Qatar.svg.png'},
  {name: 'Saudi Arabia', capital: 'Riyadh', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg'},
  {name: 'Syria', capital: 'Damascus', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/2000px-Flag_of_Syria.svg.png'},
  {name: 'Turkey', capital: 'Ankara', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1000px-Flag_of_Turkey.svg.png'},
  {name: 'United Arab Emirates', capital: 'Abu Dhabi', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/2000px-Flag_of_the_United_Arab_Emirates.svg.png'},
  {name: 'Yemen', capital: 'Saana', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/2000px-Flag_of_Yemen.svg.png'},
];