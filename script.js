// DSCOVR Density 6 hours

let $element_DSCOVR_density_6h = document.getElementById("DSCOVR_density_6h");
let ctx_DSCOVR_density_6h = $element_DSCOVR_density_6h.getContext("2d");

let DSCOVR_density_6h;
let data_DSCOVR_density_6h = {};
let processedData_DSCOVR_density_6h = {};
let labels_DSCOVR_density_6h = [];

let gradientStroke_DSCOVR_density_6h;

let jsonData_DSCOVR_density_6h = $.ajax({
	url: 'plasma_6h.json', 
	dataType: 'json'
}).done(function(results_DSCOVR_density_6h) {
	processedData_DSCOVR_density_6h = processData_DSCOVR_density_6h(results_DSCOVR_density_6h);
	gradientStroke_DSCOVR_density_6h.addColorStop(1, 'rgba(' + 
	Math.floor(255 * (Math.max.apply(Math, processedData.data1) - 200)/(400)) 
	+ ',' + 
	(255 - Math.floor(255 * (Math.min.apply(Math, processedData.data1) - 200)/(400)))
	+',0,1)');
	
	gradientStroke_DSCOVR_density_6h.addColorStop(0, 
	'rgba(' + 
	(255 - Math.floor(255 * (Math.max.apply(Math, processedData.data1) - 200)/(400)))
	+ ',' + 
	Math.floor(255 * (Math.min.apply(Math, processedData.data1) - 200)/(400))
	+',0,1)');
	
	data_DSCOVR_density_6h = {
		labels: processData_DSCOVR_density_6h.labels,
		datasets: [{
			label: 'FLux density (6 hours)',
			fill: false,
			tension: 0.5,
			data: processData_DSCOVR_density_6h.data,
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
