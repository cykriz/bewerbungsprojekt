import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js';

const fetchingData = async () => {
	const response = await fetch('https://heim.cykriz.de/corona-data');
	const json = await response.json();
	return json;
};

fetchingData().then(fetchedArray => {
	const sortByKey = (array, key) => {
		return array.sort((a, b) => {
			const x = a[key];
			const y = b[key];
			return x < y ? -1 : x > y ? 1 : 0;
		});
	};

	const dataSorted = sortByKey(fetchedArray, 'dbTimestamp');
	const dateSpan = document.getElementById('datum');
	const lastDate = new Date(
		dataSorted[dataSorted.length - 1].dbTimestamp
	).toLocaleDateString();
	dateSpan.textContent = lastDate;

	const covidToIntensivBettenPercent = [];
	const creationTimestamp = [];
	const bettenBelegtToBettenGesamtPercent = [];

	dataSorted.forEach(obj => {
		covidToIntensivBettenPercent.push(obj.covidToIntensivBettenPercent);
		creationTimestamp.push(obj.creationTimestamp);
		bettenBelegtToBettenGesamtPercent.push(
			obj.bettenBelegtToBettenGesamtPercent
		);
	});
	const dataArray = [];
	creationTimestamp.forEach(strTime => {
		let parts;
		let partsDay;
		const dateArr = [];

		if (strTime) {
			parts = strTime.split('-');
			partsDay = parts[2].split('T');
			dateArr.push(parts[0], parts[1], partsDay[0]);
			dataArray.push(dateArr.join('.'));
		} else {
			dataArray.push('Keine Angabe');
		}
	});

	let covidToIntensivBettenPercentNEU = [];
	let bettenBelegtToBettenGesamtPercentNEU = [];
	let dataArrayNEU = [];

	for (let index = 0; index < covidToIntensivBettenPercent.length; index += 2) {
		covidToIntensivBettenPercentNEU.push(covidToIntensivBettenPercent[index]);
		bettenBelegtToBettenGesamtPercentNEU.push(
			bettenBelegtToBettenGesamtPercent[index]
		);
		dataArrayNEU.push(dataArray[index]);
	}

	const ctx1 = document.getElementById('intensiv-line').getContext('2d');
	const myChart = new Chart(ctx1, {
		type: 'line',
		data: {
			labels: dataArray,
			datasets: [
				{
					label: '% Auslastung der Intensivbetten durch Coronapatienten',
					data: covidToIntensivBettenPercent,
					borderColor: ['rgba(255, 99, 132, 1)'],
					borderWidth: 1,
					lineTension: 0,
					backgroundColor: ['rgba(255, 99, 132, 0.4)'],
				},
				{
					label: '% Auslastung der Intensivbetten insgesamt',
					data: bettenBelegtToBettenGesamtPercent,
					borderColor: ['rgba(255, 99, 132, 1)'],
					borderWidth: 1,
					lineTension: 0,
					backgroundColor: ['rgba(132, 99, 255, 0.3)'],
				},
			],
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							// color: 'rgba(255, 255, 255, 1)',
							beginAtZero: true,
							suggestedMax: 100,
						},
						gridLines: {
							// z: 10s,
							zeroLineWidth: 1,
							display: true,
							drawTicks: true,
							color: 'rgba(250, 250, 250, 0.1)',
							zeroLineColor: 'rgba(250, 250, 250, 0.5)',
						},
					},
				],
				xAxes: [
					{
						ticks: {
							// color: 'rgba(255, 255, 255, 1)',
							beginAtZero: true,
							suggestedMax: 100,
						},
						gridLines: {
							// z: 10s,
							zeroLineWidth: 1,
							display: true,
							drawTicks: true,
							color: 'rgba(250, 250, 250, 0.1)',
							zeroLineColor: 'rgba(250, 250, 250, 0.5)',
						},
					},
				],
			},
		},
	});
	const covidToIntensivBettenPercentAktuell =
		dataSorted[dataSorted.length - 1].covidToIntensivBettenPercent;

	const bettenBelegtToBettenGesamtPercentAktuell =
		dataSorted[dataSorted.length - 1].bettenBelegtToBettenGesamtPercent;

	const nichtCovid =
		bettenBelegtToBettenGesamtPercentAktuell -
		covidToIntensivBettenPercentAktuell;

	const ctx2 = document.getElementById('intensiv-pie').getContext('2d');
	const myChart2 = new Chart(ctx2, {
		type: 'pie',
		data: {
			labels: [
				'% Auslastung der Intensivbetten durch Coronapatienten',
				'Belegte Intensivbetten mit Patientein OHNE Covid',
				'Freie Betten',
			],
			datasets: [
				{
					label: '% Auslastung der Intensivbetten durch Coronapatienten',
					data: [
						covidToIntensivBettenPercentAktuell,
						nichtCovid,
						(100 - covidToIntensivBettenPercentAktuell - nichtCovid).toFixed(2),
					],
					borderColor: ['rgba(255, 99, 132, 1)'],
					borderWidth: 1,
					lineTension: 0,
					backgroundColor: [
						'rgba(255, 99, 132, 0.4)',
						'rgba(132, 99, 255, 0.4)',
					],
				},
			],
		},
	});
});
