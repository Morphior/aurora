// DSCOVR Density 6 hours

let $element_DSCOVR_density_6h = document.getElementById("DSCOVR_density_6h");
let ctx_DSCOVR_density_6h = $element_DSCOVR_density_6h.getContext("2d");

let DSCOVR_density_6h;
let data_DSCOVR_density_6h = {};
let processedData_DSCOVR_density_6h = {};
let labels_DSCOVR_density_6h = [];

let gradientStroke_DSCOVR_density_6h = ctx_DSCOVR_density_6h.createLinearGradient(0, 0, 0, 300);

let jsonData_DSCOVR_density_6h = $.ajax({
	url: 'plasma_6h.json', 
	dataType: 'json'
}).done(function(results) {
	processedData_DSCOVR_density_6h = processData_DSCOVR_density_6h(results);
	gradientStroke_DSCOVR_density_6h.addColorStop(1, 'rgba(' + 
	Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_density_6h.data) - 200)/(400)) 
	+ ',' + 
	(255 - Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_density_6h.data) - 200)/(400)))
	+',0,1)');
	
	gradientStroke_DSCOVR_density_6h.addColorStop(0, 
	'rgba(' + 
	(255 - Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_density_6h.data) - 200)/(400)))
	+ ',' + 
	Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_density_6h.data) - 200)/(400))
	+',0,1)');
	
	data_DSCOVR_density_6h = {
		labels: processedData_DSCOVR_density_6h.labels,
		datasets: [{
			label: 'Flux density [n/cm³] (6 hours)',
			fill: false,
			tension: 0.5,
			data: processedData_DSCOVR_density_6h.data,
			borderColor: gradientStroke_DSCOVR_density_6h,
			borderWidth: 1,
			radius: 0
		}]
	};
	
	DSCOVR_density_6h = new Chart(ctx_DSCOVR_density_6h, {
		type: 'line',
		data: data_DSCOVR_density_6h,
		options: {
			responsive: true,
			scales: {
				yAxis: {
					type: 'logarithmic',
					grid: {
						display: true,
						backgroundColor: '#ffffff'
					}
				},
				xAxis: {
					backgroundColor: '#ffffff'
				}
			}
		}
	});
});

let processData_DSCOVR_density_6h = function(jsonData_DSCOVR_density_6h) {
	let label = [];
	let dataset = [];
	
	for (let i = 1, total = jsonData_DSCOVR_density_6h.length; i < total; i++) {
		let date = new Date(Date.parse(jsonData_DSCOVR_density_6h[i][0] + "Z"));
		label[i - 1] = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		dataset[i - 1] = jsonData_DSCOVR_density_6h[i][1];
	}
	
	return {
		labels: label,
		data: dataset
	}
}

// DSCOVR Radial Speed 6 hours

let $element_DSCOVR_radialSpeed_6h = document.getElementById("DSCOVR_radialSpeed_6h");
let ctx_DSCOVR_radialSpeed_6h = $element_DSCOVR_radialSpeed_6h.getContext("2d");

let DSCOVR_radialSpeed_6h;
let data_DSCOVR_radialSpeed_6h = {};
let processedData_DSCOVR_radialSpeed_6h = {};
let labels_DSCOVR_radialSpeed_6h = [];

let gradientStroke_DSCOVR_radialSpeed_6h = ctx_DSCOVR_radialSpeed_6h.createLinearGradient(0, 0, 0, 300);

let jsonData_DSCOVR_radialSpeed_6h = $.ajax({
	url: 'plasma_6h.json', 
	dataType: 'json'
}).done(function(results) {
	processedData_DSCOVR_radialSpeed_6h = processData_DSCOVR_radialSpeed_6h(results);
	gradientStroke_DSCOVR_radialSpeed_6h.addColorStop(1, 'rgba(' + 
	Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_radialSpeed_6h.data) - 200)/(400)) 
	+ ',' + 
	(255 - Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_radialSpeed_6h.data) - 200)/(400)))
	+',0,1)');
	
	gradientStroke_DSCOVR_radialSpeed_6h.addColorStop(0, 
	'rgba(' + 
	(255 - Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_radialSpeed_6h.data) - 200)/(400)))
	+ ',' + 
	Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_radialSpeed_6h.data) - 200)/(400))
	+',0,1)');
	
	data_DSCOVR_radialSpeed_6h = {
		labels: processedData_DSCOVR_radialSpeed_6h.labels,
		datasets: [{
			label: 'Radial speed [km/s] (6 hours)',
			fill: false,
			tension: 0.5,
			data: processedData_DSCOVR_radialSpeed_6h.data,
			borderColor: gradientStroke_DSCOVR_radialSpeed_6h,
			borderWidth: 1,
			radius: 0
		}]
	};
	
	DSCOVR_radialSpeed_6h = new Chart(ctx_DSCOVR_radialSpeed_6h, {
		type: 'line',
		data: data_DSCOVR_radialSpeed_6h,
		options: {
			responsive: true,
		}
	});
});

let processData_DSCOVR_radialSpeed_6h = function(jsonData_DSCOVR_radialSpeed_6h) {
	let label = [];
	let dataset = [];
	
	for (let i = 1, total = jsonData_DSCOVR_radialSpeed_6h.length; i < total; i++) {
		let date = new Date(Date.parse(jsonData_DSCOVR_radialSpeed_6h[i][0] + "Z"));
		label[i - 1] = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		dataset[i - 1] = jsonData_DSCOVR_radialSpeed_6h[i][2];
	}
	
	return {
		labels: label,
		data: dataset
	}
}

// DSCOVR Magnetic field 6 hours

let $element_DSCOVR_mag_6h = document.getElementById("DSCOVR_mag_6h");
let ctx_DSCOVR_mag_6h = $element_DSCOVR_mag_6h.getContext("2d");

let DSCOVR_mag_6h;
let data_DSCOVR_mag_6h = {};
let processedData_DSCOVR_mag_6h = {};
let labels_DSCOVR_mag_6h = [];

let gradientStroke_DSCOVR_mag_6h = ctx_DSCOVR_mag_6h.createLinearGradient(0, 0, 0, 300);

let jsonData_DSCOVR_mag_6h = $.ajax({
	url: 'mag_6h.json', 
	dataType: 'json'
}).done(function(results) {
	processedData_DSCOVR_mag_6h = processData_DSCOVR_mag_6h(results);
	gradientStroke_DSCOVR_mag_6h.addColorStop(0, 'rgba(' + 
	Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_mag_6h.data1) - 10)/(20)) 
	+ ',' + 
	(255 - Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_mag_6h.data1) - 10)/(20)))
	+',0,1)');
	
	gradientStroke_DSCOVR_mag_6h.addColorStop(1, 
	'rgba(' + 
	(255 - Math.floor(255 * (Math.max.apply(Math, processedData_DSCOVR_mag_6h.data1) - 10)/(20)))
	+ ',' + 
	Math.floor(255 * (Math.min.apply(Math, processedData_DSCOVR_mag_6h.data1) -10)/(20))
	+',0,1)');
	
	data_DSCOVR_mag_6h = {
		labels: processedData_DSCOVR_mag_6h.labels,
		datasets: [{
			label: 'Bz [nT] (6 hours)',
			fill: false,
			tension: 0.5,
			data: processedData_DSCOVR_mag_6h.data1,
			borderColor: gradientStroke_DSCOVR_mag_6h,
			borderWidth: 1,
			radius: 0
		},
		{
			label: 'Bt [nT] (6 hours)',
			fill: false,
			tension: 0.5,
			data: processedData_DSCOVR_mag_6h.data2,
			borderColor: '#666666',
			borderWidth: 1,
			radius: 0
		}	
		]
	};
	
	DSCOVR_mag_6h = new Chart(ctx_DSCOVR_mag_6h, {
		type: 'line',
		data: data_DSCOVR_mag_6h,
		options: {
			responsive: true,
		}
	});
});

let processData_DSCOVR_mag_6h = function(jsonData_DSCOVR_mag_6h) {
	let label = [];
	let dataset = [[],[]];
	
	for (let i = 1, total = jsonData_DSCOVR_mag_6h.length; i < total; i++) {
		let date = new Date(Date.parse(jsonData_DSCOVR_mag_6h[i][0] + "Z"));
		label[i - 1] = ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		dataset[0][i - 1] = jsonData_DSCOVR_mag_6h[i][3];
		dataset[1][i - 1] = jsonData_DSCOVR_mag_6h[i][6];
	}
	
	return {
		labels: label,
		data1: dataset[0],
		data2: dataset[1]
	}
}
