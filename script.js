const container = document.getElementById('container');
const sizeInput = document.getElementById('size-input');
const boardSizeLabel = document.getElementById('board-size-label');
const newBoardBtn = document.getElementById('new-board');

sizeInput.value = 16;

sizeInput.addEventListener('input', (e) => {
	boardSizeLabel.textContent = `${e.target.value} x ${e.target.value}`;
});

const newBoard = () => {
	container.textContent = '';
	createBoard(sizeInput.value);
};

const createRow = (count) => {
	const row = document.createElement('div');
	row.classList.add('row');

	for (let i = 0; i < count; i++) {
		const pixel = document.createElement('div');
		pixel.classList.add('pixel');
		pixel.style.width = `${container.clientWidth / count}px`;
		pixel.style.height = `${container.clientHeight / count}px`;

		pixel.addEventListener('mouseover', () => {
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

newBoardBtn.addEventListener('click', newBoard);

newBoard();
