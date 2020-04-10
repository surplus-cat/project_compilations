const fs = require('fs');
const md5 = require('md5');

let preveMd5 = null;
let fsWait = false;

const filePath = './images';
console.log(`正在监听 ${filePath}`);

fs.watch(filePath, (event, fileName) => {

	if (fileName) {
		if (fsWait) return;
		fsWait = setTimeout(() => {
			fsWait = false;
		}, 100);

		var currentMd5 = md5(fs.readFileSync(filePath + fileName));
		if (currentMd5 === preveMd5) {
			return;
		}

		preveMd5 = currentMd5;

		console.log(`${filePath} 文件发生更新`)
	}
})