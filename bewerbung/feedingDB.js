const fetch = require('node-fetch');
const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();

const fetchingCoronaData = async () => {
	const response = await fetch(
		'https://www.intensivregister.de/api/public/reporting/laendertabelle'
	);
	const json = response.json();
	return json;
};

const repeatFetching = () => {
	const now = new Date();

	const timeAdd = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1,
		21,
		0,
		0
	);

	const msToRepeat = timeAdd.getTime() - now.getTime();

	setTimeout(() => {
		fetchingCoronaData().then(data => {
			const dataGer = data.overallSum;
			dataGer.dbTimestamp = Date.now();
			console.log(dataGer);
			database.insert(dataGer);
		});
		repeatFetching();
	}, msToRepeat);
};
repeatFetching();
