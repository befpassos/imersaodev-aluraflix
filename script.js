var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BNTMwMzA4YzYtMzkwNC00N2ZhLTk5MjQtMjg3ODA3NDY3ZmVmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYWE1MzdmNmMtNWQwZS00MTVkLTk3MDMtYzVkOWZlOTczMDIwXkEyXkFqcGdeQXVyNjg4NzYzMzA@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BZjc4NjBmMDMtNmQ4MS00MGRhLWI2YTgtYTEwNjZiZGMyNDViXkEyXkFqcGdeQXVyNzQzNDM3NTI@._V1_UY268_CR15,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMzdlMWQzZmItMDA5Ny00MGFjLTk0MDAtYjgzMmMyNTEwMzdhXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTI5NmViY2YtNDk5NC00NjY2LWFlNGYtOGEwNzY1MTZmMjFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BN2UyNGM3MDUtMTIzZi00ZDdkLThlYTktYjk0ZDMzM2JiMjMyXkEyXkFqcGdeQXVyNzE0MjkxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTBkNDE1MTAtZDZjMi00ZjMzLWEwMjYtOTFlNjVmMjA1MWE0XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX182_CR0,0,182,268_AL_.jpg",
"https://m.media-amazon.com/images/M/MV5BNjQ0Mzk0OTE5MF5BMl5BanBnXkFtZTgwNDkyOTI0NTM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"]


var nomeFilmes = ['Pequenos Grandes Heróis', 'Dia do Sim', 'As Branquelas', 'Os Batutinhas','O Rei Leão','Jumanji - Próxima Fase','Warcraft - O primeiro encontro de dois mundos',
'Velozes e Furiosos - Encruzilhada','Frozen','Pets - A vida secreta dos bichos','Wifi Ralph - Quebrando a Internet','Trolls 2','After','Para Todos os Garotos: Agora e Para Sempre','A Barraca do Beijo','Me chame pelo seu nome']

var linkFilmes = ['https://youtu.be/uHNc-enzH5Q','https://www.youtube.com/watch?v=RyCal7x6ras','https://www.youtube.com/watch?v=ecPZX2Xjftk','https://www.youtube.com/watch?v=FgyCE8VsGKM','https://www.youtube.com/watch?v=--raHZYXXik','https://www.youtube.com/watch?v=PEuMN4_lnPs',
'https://www.youtube.com/watch?v=Dqvz8w-latE','https://www.youtube.com/watch?v=NnDGWyfP7q4','https://www.youtube.com/watch?v=EBEbqLvrf7w','https://www.youtube.com/watch?v=MRvse6dSdbg',
'https://www.youtube.com/watch?v=_Q0qHkFoc8Y','https://www.youtube.com/watch?v=4l1z5SGdMEo','https://www.youtube.com/watch?v=ZFOW3Abm-n0','https://www.youtube.com/watch?v=dCh54PBJsGg',
'https://www.youtube.com/watch?v=7bfS6seiLhk','https://www.youtube.com/watch?v=7yCwv8FjidU']

for(var i =0; i < listaFilmes.length; i++){
    document.write("<a href=" + linkFilmes[i] + " target='_blank'><img align='center' width='150px' heigth='150px' src=" + listaFilmes[i] + " alt='' class='imagemFilme'></a>")

}


