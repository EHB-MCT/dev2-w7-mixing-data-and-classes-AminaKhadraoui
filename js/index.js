import Year from "./Year.js";
import TotalVotes from "./TotalVotes.js";
import BelgianVotes from "./BelgianVotes.js";
import ForeignerVotes from "./ForeignerVotes.js";
import WinnerElection from "./WinnerElection.js";
import TypeElection from "./TypeElection.js";

const items = [];

function init() {
	
}

function fetchData() {
    const URL =
		"https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/nombre-d-electeurs-belges-et-etrangers/records?limit=20";
	fetch(URL)
		.then(function (response) {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		});
}

function onSearch(searchValue) {}

function render() {}

init();