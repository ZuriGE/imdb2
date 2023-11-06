import { Professional, Movie, fmdb, profFmdb } from "./movieData.js";
// console.log(fmdb);
let cargaInicial = true;
$(document).ready(function () {
	//popular el html con la info del array de películas
	let filmLoad = (filmArray) => {
		$("#films").empty();

		filmArray.forEach((film) => {
			let cast = "";
			if (film.actors != [])
				film.actors.forEach((act) => {
					cast += act + ", ";
				});

			$("#films").append(
				`<div class="filmCard">
            <div class="filmCardPic--container">
                <img src="${film.photo}" alt="" />
                <h2 class="filmCardTitle">${film.title}</h2>
            </div>
        
            <ul class="filmCarData">
                <li class="filmAttribute"><span>Genéro:</span>${film.genre}</li>
                <li class="filmAttribute"><span>Año:</span>${film.releaseYear}</li>
                <li class="filmAttribute"><span>País:</span>${film.nationality}</li>
                <li class="filmAttribute"><span>Idioma:</span>${film.language}</li>
                <li class="filmAttribute"><span>Director:</span>${film.director}</li>
                <li class="filmAttribute"><span>Actores:</span>${cast.slice(0, -2)}</li>
                <li class="filmAttribute"><span>Guionista:</span>${film.writer}</li>
                <li class="filmAttribute"><span>Protagonista:</span>${film.mainCharacterName}</li>
                <li class="filmAttribute"><span>Plataforma:</span>${film.plataforma}</li>
                <li class="filmAttribute"><span>Productora:</span>${film.producer}</li>
                <li class="filmAttribute"><span>Distribuidor:</span>${film.distributor}</li>
                <li class="filmAttribute"><span>MCU:</span>${film.isMCU ? "SÍ" : "NO"}</li>
            </ul>
        </div>`
			);
		});
	};

	let profLoad = (profArray) => {
		$("#profs").empty();

		profArray.forEach((prof) => {
			$("#profs").append(` <div class="profCard">
				<div class="profCardPic--container">
					<img src="${prof.photo}" alt="" />
				</div>

				<ul class="profCardData">
					<h2 class="profCardTitle">${prof.name}</h2>
					<li class="profAttribute"><span>Profesión:</span>${prof.profession == "actor" || prof.profession == "actress" ? "Actor/Actriz" : prof.profession == "writer" ? "Guionista" : "Director"}</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Nacionalidad:</span>${prof.nationality}</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Edad:</span>${prof.age} años.</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Peso:</span>${prof.weight} kg.</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Estatura:</span>${prof.height} cm</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Oscars:</span>${prof.oscarsNumber}</li>
					<li><hr /></li>
					<li class="profAttribute"><span>Status:</span>${prof.isRetired ? "Retirado" : "En activo"}</li>
				</ul>
			</div>`);
		});
	};

	let filterCat = (str) => {
		let fmdbFilter = [...fmdb].filter((film) => film.genre == str);
		filmLoad(fmdbFilter);
	};

	let showFilms = (str) => {
		$("#hideHome").css("display", "none");
		$("#profs").css("display", "none");
		$("#films").css("display", "grid");

		$("#ddListMobile").slideUp();
		$("#ddButtonCat").removeClass("activo");
		$("#ddList--sec").slideUp();
		$("#ddButtonCat-M").removeClass("activo");
		$("#ddListPC").slideUp();
		let filmArray;
		if (str == "todo") {
			filmArray = fmdb;
			filmLoad(filmArray);
		} else {
			filmArray = filterCat(str);
		}
	};

	$(".btn_film").on("click", function () {
		let catStr = $(this).data("category");
		showFilms(catStr);
	});

	$(".btn-prof").on("click", function () {
		$("#hideHome").css("display", "none");
		$("#films").css("display", "none");
		$("#profs").css("display", "grid");
		$("#ddListMobile").slideUp();
		$("#ddButtonCat").removeClass("activo");
		$("#ddList--sec").slideUp();
		$("#ddButtonCat-M").removeClass("activo");
		$("#ddListPC").slideUp();

		profLoad(profFmdb);
	});

	$(".btn-home").on("click", function () {
		$("#hideHome").css("display", "flex");
		$("#films").css("display", "none");
		$("#profs").css("display", "none");
		$("#ddListMobile").slideUp();
		$("#ddButtonCat").removeClass("activo");
		$("#ddList--sec").slideUp();
		$("#ddButtonCat-M").removeClass("activo");
		$("#ddListPC").slideUp();
	});

	$("#btn-sendForm").on("click", function (e) {
		e.preventDefault();

		if (typeof $("#form_title") == "string" && typeof $("#form_nationality") == "string" && typeof $("#form_genre") == "string" && typeof $("#form_photo") == "string" && typeof $("#form_releaseYear") == "number") {
			let title = $("#form_title").val();
			let releaseYear = $("#form_releaseYear").val();
			let nationality = $("#form_nationality").val();
			let genre = $("#form_genre").val();
			let photo = $("#form_photo").val();
			let newMovie = new Movie(title, releaseYear, nationality, genre, photo);

			newMovie.actors = $("#form_actors").val();
			newMovie.director = $("#form_director").val();
			newMovie.writer = $("#form_writer").val();
			newMovie.language = $("#form_language").val();
			newMovie.plataforma = $("#form_plataforma").val();
			newMovie.producer = $("#form_producer").val();
			newMovie.distributor = $("#form_distributor").val();
			newMovie.mainCharacterName = $("#form_mainChar").val();
			newMovie.isMCU = $("#checkbox").is(":checked");

			// Agregar el objeto Movie al array
			fmdb.push(newMovie);
		}
		// Limpia los campos del formulario
		$("#movieForm")[0].reset();
		$("#movieForm").css("display", "none");
	});

	$("#btn-cancelForm").on("click", () => {
		$("#movieForm")[0].reset();
		$("#movieForm").css("display", "none");
	});

	$("#btn-form_open").on("click", () => {
		$("#movieForm").css("display", "flex");
	});

	////menú navegación pc y m///
	$("#ddButton").on("click", () => $("#ddListMobile").slideToggle());
	$("#ddButtonCat").on("click", () => {
		$("#ddButtonCat").toggleClass("activo");
		$("#ddList--sec").slideToggle();
	});

	$("#ddButtonCat-M").on("click", () => {
		$("#ddButtonCat-M").toggleClass("activo");
		$("#ddListPC").slideToggle();
	});

	$("#closeSearchS").on("click", () => $("#searchS").toggleClass("dFlex"));
	$("#openSearchS").on("click", () => $("#searchS").toggleClass("dFlex"));

	$("#btn-optDd").on("click", () => $("#form-ddList").slideToggle());
});
