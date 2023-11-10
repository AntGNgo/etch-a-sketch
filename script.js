const container = document.getElementById('container');

const numberOfPixels = 32;

const createRow = (count) => {
	const row = document.createElement('div');
	row.classList.add('row');

	for (let i = 0; i < count; i++) {
		const pixel = document.createElement('div');
		pixel.classList.add('pixel');
		pixel.style.width = `${container.clientWidth / numberOfPixels}px`;
		pixel.style.height = `${container.clientHeight / numberOfPixels}px`;

		pixel.addEventListener('mouseenter', () => {
			pixel.style.backgroundColor = '#ccc';
		});

		row.appendChild(pixel);
	}
	container.appendChild(row);
};

const createBoard = (numberOfPixels) => {
	for (let i = 0; i < numberOfPixels; i++) {
		createRow(numberOfPixels);
	}
};

createBoard(numberOfPixels);
