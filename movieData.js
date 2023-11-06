"use strict";

// Object.defineProperty(exports, "__esModule", { value: true });
// var fs = require("fs");
/*
CLASS PROFESSIONAL y CLASS MOVIE
*/

export class Professional {
	constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.height = height;
		this.isRetired = isRetired;
		this.nationality = nationality;
		this.oscarsNumber = oscarsNumber;
		this.profession = profession;
		this.photo = photo;
	}

	showData() {
		const keys = Object.keys(this);
		return keys.map((key) => `${key}: ${this[key]}`).join("\n");
	}
}

export class Movie {
	constructor(title, releaseYear, nationality, genre, photo, actors, director, writer, language, plataforma, isMCU, mainCharacterName, producer, distributor) {
		this.title = title;
		this.releaseYear = releaseYear;
		this.nationality = nationality;
		this.genre = genre;
		this.photo = photo;
	}

	printAll() {
		let atributos = Object.keys(this);
		atributos.forEach((value) => {
			if (value == "director" || value == "writer") {
				console.log(`${value}: ${this[value].name}`);
			} else if (value == "actors") {
				let cast = "";
				this[value].forEach((act) => {
					cast += act.name + ", ";
				});
				console.log(`${value}: ${cast.slice(0, -2)}`);
			} else {
				console.log(`${value}: ${this[value]}`);
			}
		});
	}
}

///SNATCH

var myMovie0 = new Movie("Snatch", 2000, "UK", "Comedia", "https://pics.filmaffinity.com/snatch-186796763-large.jpg");
var director0 = new Professional("Guy Ritchie", 54, 84, 183, false, "Británica", 0, "director, writer", "https://pics.filmaffinity.com/guy_ritchie-133114427407947-nm_large.jpg");
var actor01 = new Professional("Jason Statham", 55, 77, 175, false, "Británica", 0, "actor", "https://pics.filmaffinity.com/jason_statham-084612645881801-nm_large.jpg");
var actor02 = new Professional("Brad Pitt", 59, 78, 180, false, "EE.UU.", 2, "actor", "https://pics.filmaffinity.com/brad_pitt-180902992984558-nm_large.jpg");
var actor03 = new Professional("Vinnie Jones", 58, 93, 185, true, "Británica", 0, "actor", "https://pics.filmaffinity.com/vinnie_jones-105481545638824-nm_large.jpg");
var cast0 = [actor01.name, actor02.name, actor03.name];
myMovie0.language = "EN";
myMovie0.plataforma = "Netflix";
myMovie0.isMCU = false;
myMovie0.mainCharacterName = "Turkish";
myMovie0.producer = "Ska Films";
myMovie0.distributor = "Columbia Pictures";
myMovie0.actors = cast0;
myMovie0.director = director0.name;
myMovie0.writer = director0.name;
///La vida de Pi
var myMovie1 = new Movie("La vida de Pi", 2012, "USA", "Drama", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2-8_3MT6kaCrM3HVQn7EiY4YfGVsvX-x8-LWfO6Pc-t9bT8zgQNcqcXF-OfqLWfWOP4&usqp=CAU");
var actor1_1 = new Professional("Suraj Sharma", 29, 77, 175, false, "Hindú", 0, "actor", "https://pics.filmaffinity.com/suraj_sharma-221579941063414-nm_large.jpg");
var actor1_2 = new Professional("Irrfan Khan", 53, 68, 183, false, "Hindú", 1, "actor", "https://pics.filmaffinity.com/irrfan_khan-187041674066923-nm_large.jpg");
var director1 = new Professional("Ang Lee", 67, 72, 175, false, "Taiwanesa", 2, "director", "https://pics.filmaffinity.com/ang_lee-104466647018395-nm_large.jpg");
var writer1 = new Professional("David Magee", 60, 75, 180, false, "EE.UU.", 1, "writer", "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTtudz6Knz-9eaR3ObEK_bRodLuHSMWPevIyjeOjTITpTt30yRriVrmFFsSnGQsbJDp");
var cast1 = [actor1_1.name, actor1_2.name];
myMovie1.language = "ES";
myMovie1.plataforma = "Amazon prime";
myMovie1.isMCU = false;
myMovie1.mainCharacterName = "Pi Patel";
myMovie1.producer = "Fox 2000 Pictures";
myMovie1.distributor = "20th Century Fox";
myMovie1.actors = cast1;
myMovie1.director = director1.name;
myMovie1.writer = writer1.name;
//TROYA
var myMovie2 = new Movie("Troya", 2004, "USA", "Acción", "https://www.abc.es/media/peliculas/000/019/734/troya-2.jpg");
var actor2_1 = actor02;
var actor2_2 = new Professional("Eric Bana", 53, 80, 188, false, "Australiana", 0, "actor", "https://pics.filmaffinity.com/eric_bana-109105447804433-nm_large.jpg");
var director2 = new Professional("Wolfgang Petersen", 76, 75, 183, false, "Alemán", 0, "director", "https://pics.filmaffinity.com/wolfgang_petersen-199573278079078-nm_large.jpg");
var writer2 = new Professional("David Benioff", 51, 70, 180, false, "EE.UU.", 1, "writer", "https://pics.filmaffinity.com/david_benioff-003918345902932-nm_large.jpg");
var cast2 = [actor2_1.name, actor2_2.name];
myMovie2.language = "ES";
myMovie2.plataforma = "Disney +";
myMovie2.isMCU = false;
myMovie2.mainCharacterName = "Aquiles";
myMovie2.producer = "Warner Bros. Pictures";
myMovie2.distributor = "Warner Bros. Pictures";
myMovie2.actors = cast2;
myMovie2.director = director2.name;
myMovie2.writer = writer2.name;
//el silencio de los corderos
var myMovie3 = new Movie("El silencio de los corderos", 1991, "USA", "Terror", "https://cdn.zendalibros.com/wp-content/uploads/silence-of-the-lambs.png");
var actor3_1 = new Professional("Jodie Foster", 59, 45, 160, false, "EE.UU.", 2, "actor", "https://pics.filmaffinity.com/jodie_foster-232255054237923-nm_large.jpg");
var actor3_2 = new Professional("Anthony Hopkins", 84, 75, 175, false, "Británica", 2, "actor", "https://pics.filmaffinity.com/anthony_hopkins-238476674156825-nm_large.jpg");
var director3 = new Professional("Jonathan Demme", 73, 90, 173, false, "EE.UU.", 1, "director", "https://pics.filmaffinity.com/jonathan_demme-166254011007507-nm_large.jpg");
var writer3 = new Professional("Ted Tally", 71, 75, 180, false, "EE.UU.", 1, "writer", "https://www.goldenglobes.com/sites/default/files/styles/portrait_medium/public/people/cover_images/ted_tally-gt.jpg?format=pjpg&auto=webp&optimize=high");
var cast3 = [actor3_1.name, actor3_2.name];
myMovie3.language = "ES";
myMovie3.plataforma = "HBO";
myMovie3.isMCU = false;
myMovie3.mainCharacterName = "Clarice Starling";
myMovie3.producer = "Orion Pictures";
myMovie3.distributor = "Metro-Goldwyn-Mayer";
myMovie3.actors = cast3;
myMovie3.director = director3.name;
myMovie3.writer = writer3.name;
//Joker
var myMovie4 = new Movie("Joker", 2019, "USA", "Drama", "https://ichef.bbci.co.uk/news/640/cpsprodpb/1728D/production/_109616849_joker01.jpg");
var actor4_1 = new Professional("Joaquin Phoenix", 48, 76, 173, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/joaquin_phoenix-131606730545658-nm_large.jpg");
var actor4_2 = new Professional("Zazie Beetz", 32, 58, 168, false, "Alemana", 0, "actor", "https://pics.filmaffinity.com/zazie_beetz-225901710572025-nm_large.jpg");
var director4 = new Professional("Todd Phillips", 52, 80, 175, false, "EE.UU.", 0, "director, writer", "https://pics.filmaffinity.com/todd_phillips-177988935138161-nm_large.jpg");
var cast4 = [actor4_1.name, actor4_2.name];
myMovie4.language = "EN";
myMovie4.plataforma = "Netflix";
myMovie4.isMCU = false;
myMovie4.mainCharacterName = "Arthur Fleck (Joker)";
myMovie4.producer = "DC Films";
myMovie4.distributor = "Warner Bros. Pictures";
myMovie4.actors = cast4;
myMovie4.director = director4.name;
myMovie4.writer = director4.name;
//Avengers
var myMovie5 = new Movie("Avengers: Endgame", 2019, "USA", "Acción", "https://ca-times.brightspotcdn.com/dims4/default/acc6d1a/2147483647/strip/false/crop/1429x864+0+0/resize/1429x864!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F73%2F83%2F809a2b47459ebebf341f207cda38%2Favengers-endgame-battle.jpg");
var actor5_1 = new Professional("Robert Downey Jr.", 57, 78, 174, false, "EE.UU.", 2, "actor", "https://pics.filmaffinity.com/robert_downey_jr-258447401500336-nm_large.jpg");
var actor5_2 = new Professional("Chris Evans", 41, 88, 183, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/chris_evans-260871029869962-nm_large.jpg");
var actor5_3 = new Professional("Scarlett Johansson", 38, 57, 160, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/scarlett_johansson-224638006892363-nm_large.jpg");
var actor5_4 = new Professional("Mark Ruffalo", 55, 76, 173, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/mark_ruffalo-176789463412861-nm_large.jpg");
var actor5_5 = new Professional("Chris Hemsworth", 39, 90, 191, false, "Australiana", 0, "actor", "https://pics.filmaffinity.com/chris_hemsworth-270453460641635-nm_large.jpg");
var director5 = new Professional("Anthony Russo", 53, 72, 175, false, "EE.UU.", 0, "director", "https://pics.filmaffinity.com/anthony_russo-139588731549058-nm_large.jpg");
var writer5 = new Professional("Christopher Markus", 51, 73, 180, false, "EE.UU.", 0, "writer", "https://pics.filmaffinity.com/christopher_markus-229182986890300-nm_large.jpg");
var cast5 = [actor5_1.name, actor5_2.name, actor5_3.name, actor5_4.name, actor5_5.name];
myMovie5.language = "EN";
myMovie5.plataforma = "Disney +";
myMovie5.isMCU = true;
myMovie5.mainCharacterName = "Varios personajes de Marvel";
myMovie5.producer = "Marvel Studios";
myMovie5.distributor = "Walt Disney Studios Motion Pictures";
myMovie5.actors = cast5;
myMovie5.director = director5.name;
myMovie5.writer = writer5.name;
//Pulp fiction
var myMovie6 = new Movie("Pulp Fiction", 1994, "USA", "Comedia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxMjrwTn_ZUt_RhsTCpsMfG2TW4r_QHoRRcmT_64OFB8viajemAnSroNAU7XC3oUjiDI&usqp=CAU");
var actor6_1 = new Professional("John Travolta", 68, 75, 188, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/john_travolta-215026180777265-nm_large.jpg");
var actor6_2 = new Professional("Samuel L. Jackson", 73, 78, 187, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/samuel_l_jackson-281405475762864-nm_large.jpg");
var actor6_3 = new Professional("Uma Thurman", 53, 62, 180, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/uma_thurman-100313330754709-nm_large.jpg");
var director6 = new Professional("Quentin Tarantino", 59, 73, 188, false, "EE.UU.", 2, "director", "https://pics.filmaffinity.com/quentin_tarantino-257749245718224-nm_large.jpg");
var cast6 = [actor6_1.name, actor6_2.name, actor6_3.name];
myMovie6.language = "ES";
myMovie6.plataforma = "Netflix";
myMovie6.isMCU = false;
myMovie6.mainCharacterName = "Vincent Vega";
myMovie6.producer = "Miramax Films";
myMovie6.distributor = "Miramax Films";
myMovie6.actors = cast6;
myMovie6.director = director6.name;
myMovie6.writer = director6.name;
//dr strangelove
var myMovie7 = new Movie("Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", 1964, "USA", "Comedia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGMCofKEfs23v2drF39ygda3LE8QrbE_mYBOWEMGJwBJFzSaBSBvF6WLgRbn2r34m3NE&usqp=CAU");
var actor7_1 = new Professional("Peter Sellers", 54, 67, 175, true, "Británica", 0, "actor", "https://pics.filmaffinity.com/peter_sellers-203037246465678-nm_large.jpg");
var actor7_2 = new Professional("George C. Scott", 71, 76, 178, true, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/george_c_scott-138677094530398-nm_large.jpg");
var director7 = new Professional("Stanley Kubrick", 70, 74, 175, true, "EE.UU.", 1, "director", "https://pics.filmaffinity.com/stanley_kubrick-132832407118367-nm_large.jpg");
var cast7 = [actor7_1.name, actor7_2.name];
myMovie7.language = "ES";
myMovie7.plataforma = "Amazon Prime";
myMovie7.isMCU = false;
myMovie7.mainCharacterName = "Dr. Strangelove";
myMovie7.producer = "Hawk Films";
myMovie7.distributor = "Columbia Pictures";
myMovie7.actors = cast7;
myMovie7.director = director7.name;
myMovie7.writer = director7.name;
//FARGO
var myMovie8 = new Movie("Fargo", 1996, "USA", "Comedia", "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/pelicula-fargo-hermanos-cohen-senal-colombia-portada.jpg");
var actor8_1 = new Professional("Frances McDormand", 64, 70, 163, false, "EE.UU.", 3, "actress", "https://pics.filmaffinity.com/frances_mcdormand-112495901037690-nm_large.jpg");
var actor8_2 = new Professional("William H. Macy", 72, 75, 175, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/william_h_macy-224853936265975-nm_large.jpg");
var director8 = new Professional("Joel Coen", 67, 72, 180, false, "EE.UU.", 4, "director", "https://pics.filmaffinity.com/joel_coen-273188928856016-nm_large.jpg");
var writer8 = new Professional("Ethan Coen", 66, 72, 173, false, "EE.UU.", 4, "writer", "https://pics.filmaffinity.com/ethan_coen-076653175577714-nm_large.jpg");
var cast8 = [actor8_1.name, actor8_2.name];
myMovie8.language = "ES";
myMovie8.plataforma = "Hulu";
myMovie8.isMCU = false;
myMovie8.mainCharacterName = "Marge Gunderson";
myMovie8.producer = "PolyGram Filmed Entertainment";
myMovie8.distributor = "Gramercy Pictures";
myMovie8.actors = cast8;
myMovie8.director = director8.name;
myMovie8.writer = writer8.name;
//el resplandor
var myMovie9 = new Movie("El Resplandor", 1980, "USA", "Terror", "https://img2.rtve.es/im/6245826/?w=900");
var actor9_1 = new Professional("Jack Nicholson", 85, 77, 178, false, "EE.UU.", 3, "actor", "https://pics.filmaffinity.com/jack_nicholson-021436262942919-nm_large.jpg");
var actor9_2 = new Professional("Shelley Duvall", 72, 66, 173, false, "EE.UU.", 0, "actress", "https://pics.filmaffinity.com/shelley_duvall-123836318970490-nm_large.jpg");
var writer9 = new Professional("Stephen King", 74, 71, 193, false, "EE.UU.", 0, "writer", "https://pics.filmaffinity.com/stephen_king-205232036268505-nm_large.jpg");
var cast9 = [actor9_1.name, actor9_2.name];
myMovie9.language = "ES";
myMovie9.plataforma = "HBO";
myMovie9.isMCU = false;
myMovie9.mainCharacterName = "Jack Torrance";
myMovie9.producer = "Warner Bros.";
myMovie9.distributor = "Warner Bros.";
myMovie9.actors = cast9;
myMovie9.director = director7.name;
myMovie9.writer = writer9.name;
//el exorcista
var myMovie10 = new Movie("El Exorcista", 1973, "USA", "Terror", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/exorcista-2873823.jpg?tf=3840x");
var actor10_1 = new Professional("Ellen Burstyn", 89, 68, 173, false, "EE.UU.", 1, "actress", "https://pics.filmaffinity.com/ellen_burstyn-151803204902108-nm_large.jpg");
var actor10_2 = new Professional("Linda Blair", 63, 57, 160, false, "EE.UU.", 0, "actress", "https://pics.filmaffinity.com/linda_blair-159806124947307-nm_large.jpg");
var director10 = new Professional("William Friedkin", 86, 73, 185, true, "EE.UU.", 1, "director", "https://pics.filmaffinity.com/william_friedkin-116890225174837-nm_large.jpg");
var writer10 = new Professional("William Peter Blatty", 89, 76, 193, true, "EE.UU.", 0, "writer", "https://pics.filmaffinity.com/william_peter_blatty-187498971597937-nm_large.jpg");
var cast10 = [actor10_1.name, actor10_2.name];
myMovie10.language = "ES";
myMovie10.plataforma = "Amazon Prime";
myMovie10.isMCU = false;
myMovie10.mainCharacterName = "Regan MacNeil";
myMovie10.producer = "Warner Bros.";
myMovie10.distributor = "Warner Bros.";
myMovie10.actors = cast10;
myMovie10.director = director10.name;
myMovie10.writer = writer10.name;
//forrest gump
var myMovie11 = new Movie("Forrest Gump", 1994, "USA", "Drama", "https://cdn.aarp.net/content/dam/aarp/entertainment/movies-for-grownups/2022/03/1140-forrest-gump-bench-esp.imgcache.rev.web.700.402.jpg");
var actor11_1 = new Professional("Tom Hanks", 66, 73, 183, false, "EE.UU.", 2, "actor", "https://pics.filmaffinity.com/tom_hanks-217077860751094-nm_large.jpg");
var actor11_2 = new Professional("Robin Wright", 56, 67, 168, false, "EE.UU.", 0, "actress", "https://pics.filmaffinity.com/robin_wright-022187458260119-nm_large.jpg");
var director11 = new Professional("Robert Zemeckis", 70, 73, 183, false, "EE.UU.", 3, "director", "https://pics.filmaffinity.com/robert_zemeckis-137775569127981-nm_large.jpg");
var writer11 = new Professional("Eric Roth", 76, 75, 180, false, "EE.UU.", 1, "writer", "https://pics.filmaffinity.com/eric_roth-263280141815543-nm_large.jpg");
var cast11 = [actor11_1.name, actor11_2.name];
myMovie11.language = "ES";
myMovie11.plataforma = "Netflix";
myMovie11.isMCU = false;
myMovie11.mainCharacterName = "Forrest Gump";
myMovie11.producer = "Paramount Pictures";
myMovie11.distributor = "Paramount Pictures";
myMovie11.actors = cast11;
myMovie11.director = director11.name;
myMovie11.writer = writer11.name;
//titanic
var myMovie12 = new Movie("Titanic", 1997, "USA", "Drama", "https://historia.nationalgeographic.com.es/medio/2022/07/15/cpmcdtita-fe022_a9748bb4_1280x750.jpeg");
var actor12_1 = new Professional("Leonardo DiCaprio", 47, 73, 183, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/leonardo_dicaprio-107096988846060-nm_large.jpg");
var actor12_2 = new Professional("Kate Winslet", 46, 69, 169, false, "Británica", 1, "actress", "https://pics.filmaffinity.com/kate_winslet-131626556804731-nm_large.jpg");
var director12 = new Professional("James Cameron", 68, 74, 188, false, "Canadiense", 3, "director", "https://pics.filmaffinity.com/james_cameron-249069696923812-nm_large.jpg");
var cast12 = [actor12_1.name, actor12_2.name];
myMovie12.language = "ES";
myMovie12.plataforma = "Amazon Prime";
myMovie12.isMCU = false;
myMovie12.mainCharacterName = "Jack Dawson";
myMovie12.producer = "20th Century Fox";
myMovie12.distributor = "20th Century Fox";
myMovie12.actors = cast12;
myMovie12.director = director12.name;
myMovie12.writer = director12.name;
//el padrino
var myMovie13 = new Movie("El Padrino", 1972, "USA", "Drama", "https://phantom-telva.unidadeditorial.es/aeaa414dc36bbdb2e057f5705a58e6c7/resize/1280/f/webp/assets/multimedia/imagenes/2022/02/24/16457011172047.jpg");
var actor13_1 = new Professional("Marlon Brando", 80, 72, 175, true, "EE.UU.", 2, "actor", "https://pics.filmaffinity.com/marlon_brando-144076213368411-nm_large.jpg");
var actor13_2 = new Professional("Al Pacino", 82, 68, 170, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/al_pacino-271435010451688-nm_large.jpg");
var director13 = new Professional("Francis Ford Coppola", 83, 70, 178, false, "EE.UU.", 5, "director", "https://pics.filmaffinity.com/francis_ford_coppola-149819718775033-nm_large.jpg");
var writer13 = new Professional("Mario Puzo", 78, 68, 175, true, "EE.UU.", 2, "writer", "https://pics.filmaffinity.com/mario_puzo-084702847420382-nm_large.jpg");
var cast13 = [actor13_1.name, actor13_2.name];
myMovie13.language = "ES";
myMovie13.plataforma = "HBO";
myMovie13.isMCU = false;
myMovie13.mainCharacterName = "Vito Corleone";
myMovie13.producer = "Paramount Pictures";
myMovie13.distributor = "Paramount Pictures";
myMovie13.actors = cast13;
myMovie13.director = director13.name;
myMovie13.writer = writer13.name;
//blade runner
var myMovie14 = new Movie("Blade Runner", 1982, "USA", "Ciencia Ficción", "https://variety.com/wp-content/uploads/2013/10/blade-runner-1982.jpg?w=1000&h=563&crop=1&resize=1000%2C563");
var actor14_1 = new Professional("Harrison Ford", 80, 73, 185, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/harrison_ford-044718214663547-nm_large.jpg");
var actor14_2 = new Professional("Rutger Hauer", 75, 74, 183, true, "Holandesa", 0, "actor", "https://pics.filmaffinity.com/rutger_hauer-024420639316295-nm_large.jpg");
var director14 = new Professional("Ridley Scott", 84, 71, 173, false, "Británica", 1, "director", "https://pics.filmaffinity.com/ridley_scott-170736839386101-nm_large.jpg");
var writer14 = new Professional("Philip K. Dick", 53, 70, 170, true, "EE.UU.", 0, "writer", "https://pics.filmaffinity.com/philip_k_dick-168966893970444-nm_large.jpg");
var cast14 = [actor14_1.name, actor14_2.name];
myMovie14.language = "ES";
myMovie14.plataforma = "Netflix";
myMovie14.isMCU = false;
myMovie14.mainCharacterName = "Rick Deckard";
myMovie14.producer = "Warner Bros.";
myMovie14.distributor = "Warner Bros.";
myMovie14.actors = cast14;
myMovie14.director = director14.name;
myMovie14.writer = writer14.name;
//matrix
var myMovie15 = new Movie("The Matrix", 1999, "USA", "Ciencia Ficción", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/matrix-reloaded-neo-1867257.jpg?tf=3840x");
var actor15_1 = new Professional("Keanu Reeves", 58, 74, 186, false, "Canadiense", 0, "actor", "https://pics.filmaffinity.com/keanu_reeves-249385740937163-nm_large.jpg");
var actor15_2 = new Professional("Laurence Fishburne", 60, 74, 188, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/laurence_fishburne-078467778754783-nm_large.jpg");
var actor15_3 = new Professional("Carrie-Anne Moss", 56, 60, 173, false, "Canadiense", 0, "actress", "https://pics.filmaffinity.com/carrie_anne_moss-204191028328099-nm_large.jpg");
var director15 = new Professional("The Wachowskis", 56, 60, 173, false, "EE.UU.", 0, "director", "https://pics.filmaffinity.com/hermanas_wachowski-241570900854906-nm_large.jpg");
var cast15 = [actor15_1.name, actor15_2.name, actor15_3.name];
myMovie15.language = "ES";
myMovie15.plataforma = "Amazon Prime";
myMovie15.isMCU = false;
myMovie15.mainCharacterName = "Neo";
myMovie15.producer = "Warner Bros.";
myMovie15.distributor = "Warner Bros.";
myMovie15.actors = cast15;
myMovie15.director = director15.name;
myMovie15.writer = director15.name;
//interestelar
var myMovie16 = new Movie("Interestelar", 2014, "USA", "Ciencia Ficción", "https://www.mundopeliculas.tv/wp-content/uploads/2017/11/interstellar_2.jpg");
var actor16_1 = new Professional("Matthew McConaughey", 54, 73, 182, false, "EE.UU.", 1, "actor", "https://pics.filmaffinity.com/matthew_mcconaughey-005818756847404-nm_large.jpg");
var actor16_2 = new Professional("Anne Hathaway", 40, 73, 173, false, "EE.UU.", 1, "actress", "https://pics.filmaffinity.com/anne_hathaway-009819254428189-nm_large.jpg");
var director16 = new Professional("Christopher Nolan", 53, 72, 180, false, "Británica", 4, "director", "https://pics.filmaffinity.com/christopher_nolan-055100338198118-nm_large.jpg");
var writer16 = new Professional("Jonathan Nolan", 46, 70, 175, false, "EE.UU.", 1, "writer", "https://pics.filmaffinity.com/jonathan_nolan-016694237537399-nm_large.jpg");
var cast16 = [actor16_1.name, actor16_2.name];
myMovie16.language = "ES";
myMovie16.plataforma = "Netflix";
myMovie16.isMCU = false;
myMovie16.mainCharacterName = "Cooper";
myMovie16.producer = "Warner Bros.";
myMovie16.distributor = "Warner Bros.";
myMovie16.actors = cast16;
myMovie16.director = director16.name;
myMovie16.writer = writer16.name;
//5o elemento
var myMovie17 = new Movie("El Quinto Elemento", 1997, "USA", "Ciencia Ficción", "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/reencuentro-protagonistas-quinto-elemento-20-anos/135878392-1-esl-ES/El-emotivo-reencuentro-de-los-protagonistas-de-El-Quinto-Elemento-por-su-20-aniversario.jpg");
var actor17_1 = new Professional("Bruce Willis", 68, 73, 184, true, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/bruce_willis-113565324646762-nm_large.jpg");
var actor17_2 = new Professional("Milla Jovovich", 46, 72, 175, false, "Ucraniana", 0, "actress", "https://pics.filmaffinity.com/milla_jovovich-127506127823641-nm_large.jpg");
var director17 = new Professional("Luc Besson", 63, 74, 182, false, "Francesa", 0, "director", "https://pics.filmaffinity.com/luc_besson-257595688836592-nm_large.jpg");
var cast17 = [actor17_1.name, actor17_2.name];
myMovie17.language = "ES";
myMovie17.plataforma = "Amazon Prime";
myMovie17.isMCU = false;
myMovie17.mainCharacterName = "Korben Dallas";
myMovie17.producer = "Columbia Pictures";
myMovie17.distributor = "Columbia Pictures";
myMovie17.actors = cast17;
myMovie17.director = director17.name;
myMovie17.writer = director17.name;
//LOTR
var myMovie18 = new Movie("El Señor de los Anillos", 2001, "USA", "Fantasía", "https://estaticos-cdn.prensaiberica.es/clip/cfaacc0d-175c-4acb-b6ed-8435c16a3a70_16-9-aspect-ratio_default_0.jpg");
var actor18_1 = new Professional("Elijah Wood", 41, 68, 168, false, "EE.UU.", 0, "actor", "https://pics.filmaffinity.com/elijah_wood-171369388528174-nm_large.jpg");
var actor18_2 = new Professional("Ian McKellen", 83, 70, 183, false, "Británica", 1, "actor", "https://pics.filmaffinity.com/ian_mckellen-197170265324519-nm_large.jpg");
var director18 = new Professional("Peter Jackson", 61, 72, 175, false, "Neozelandesa", 3, "director", "https://pics.filmaffinity.com/peter_jackson-143873987738947-nm_large.jpg");
var writer18 = new Professional("J.R.R. Tolkien", 81, 68, 178, true, "Británica", 4, "writer", "https://pics.filmaffinity.com/j_r_r_tolkien-174402968797008-nm_large.jpg");
var cast18 = [actor18_1.name, actor18_2.name];
myMovie18.language = "ES";
myMovie18.plataforma = "HBO";
myMovie18.isMCU = false;
myMovie18.mainCharacterName = "Frodo Baggins";
myMovie18.producer = "New Line Cinema";
myMovie18.distributor = "New Line Cinema";
myMovie18.actors = cast18;
myMovie18.director = director18.name;
myMovie18.writer = writer18.name;
//el orfanato
var myMovie19 = new Movie("El Orfanato", 2007, "Spain", "Fantasía", "https://i.pinimg.com/originals/07/16/43/07164312acc278ffd4dcaad0d3662fe9.jpg");
var actor19_1 = new Professional("Belén Rueda", 56, 67, 165, false, "Española", 0, "actress", "https://pics.filmaffinity.com/belen_rueda-110656940947395-nm_large.jpg");
var actor19_2 = new Professional("Fernando Cayo", 57, 72, 178, false, "Española", 0, "actor", "https://pics.filmaffinity.com/fernando_cayo-099665592537150-nm_large.jpg");
var director19 = new Professional("Juan Antonio Bayona", 46, 74, 179, false, "Española", 0, "director", "https://pics.filmaffinity.com/j_a_bayona-090147664155296-nm_large.jpg");
var writer19 = new Professional("Sergio G. Sánchez", 50, 70, 175, false, "Española", 0, "writer", "https://pics.filmaffinity.com/sergio_g_sanchez-077468985488418-nm_large.jpg");
var cast19 = [actor19_1.name, actor19_2.name];
myMovie19.language = "ES";
myMovie19.plataforma = "Amazon Prime";
myMovie19.isMCU = false;
myMovie19.mainCharacterName = "Laura";
myMovie19.producer = "Rodar y Rodar Cine y Televisión";
myMovie19.distributor = "Warner Bros. (Spain)";
myMovie19.actors = cast19;
myMovie19.director = director19.name;
myMovie19.writer = writer19.name;
//laberinto del fauno
var myMovie20 = new Movie("El Laberinto del Fauno", 2006, "Spain", "Fantasía", "https://phantom-expansion.unidadeditorial.es/7f014647ecabc8b46c2584048f71ce60/crop/0x0/600x399/resize/640/assets/multimedia/imagenes/2022/10/14/16656989173078.jpg");
var actor20_1 = new Professional("Ivana Baquero", 28, 67, 163, false, "Española", 0, "actress", "https://pics.filmaffinity.com/ivana_baquero-175388602836868-nm_large.jpg");
var actor20_2 = new Professional("Sergi López", 56, 70, 180, false, "Española", 0, "actor", "https://pics.filmaffinity.com/sergi_lopez-017616064137440-nm_large.jpg");
var director20 = new Professional("Guillermo del Toro", 58, 68, 175, false, "Mexicana", 4, "director", "https://pics.filmaffinity.com/guillermo_del_toro-235278129651637-nm_large.jpg");
var cast20 = [actor20_1.name, actor20_2.name];
myMovie20.language = "ES";
myMovie20.plataforma = "Netflix";
myMovie20.isMCU = false;
myMovie20.mainCharacterName = "Ofelia";
myMovie20.producer = "Tequila Gang";
myMovie20.distributor = "Warner Bros. (Spain)";
myMovie20.actors = cast20;
myMovie20.director = director20.name;
myMovie20.writer = director20.name;
////////////////////////////////////////////////////

export var fmdb = [myMovie0, myMovie1, myMovie2, myMovie3, myMovie4, myMovie5, myMovie6, myMovie7, myMovie8, myMovie9, myMovie10, myMovie11, myMovie12, myMovie13, myMovie14, myMovie15, myMovie16, myMovie17, myMovie18, myMovie19, myMovie20];

export var profFmdb = [
	director0,
	actor01,
	actor02,
	actor03,
	actor1_1,
	actor1_2,
	director1,
	writer1,
	actor2_2,
	director2,
	writer2,
	actor3_1,
	actor3_2,
	director3,
	writer3,
	actor4_1,
	actor4_2,
	director4,
	actor5_1,
	actor5_2,
	actor5_3,
	actor5_4,
	actor5_5,
	director5,
	writer5,
	actor6_1,
	actor6_2,
	actor6_3,
	director6,
	actor7_1,
	actor7_2,
	director7,
	actor8_1,
	actor8_2,
	director8,
	writer8,
	actor9_1,
	actor9_2,
	writer9,
	actor10_1,
	actor10_2,
	director10,
	writer10,
	actor11_1,
	actor11_2,
	director11,
	writer11,
	actor12_1,
	actor12_2,
	director12,
	actor13_1,
	actor13_2,
	director13,
	writer13,
	actor14_1,
	actor14_2,
	director14,
	writer14,
	actor15_1,
	actor15_2,
	actor15_3,
	director15,
	actor16_1,
	actor16_2,
	director16,
	writer16,
	actor17_1,
	actor17_2,
	director17,
	actor18_1,
	actor18_2,
	director18,
	writer18,
	actor19_1,
	actor19_2,
	director19,
	writer19,
	actor20_1,
	actor20_2,
	director20,
];
