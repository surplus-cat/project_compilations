const compressing = require("compressing");
const fs = require('fs');
const chokidar = require('chokidar');
const JSZip = reuqire('jsZip');

var Zip = new JSZip();

let imgDir = 'images'; // 默认图片文件夹

var watcher = chokidar.watch(imgDir, {
  ignored: path => {
    //return ignoreFiles.test(path);
  },
  persistent: true // 保持监听状态
});

// 监听增加，修改，删除文件的事件
// watcher.on('all', (event, path) => {
// 	switch (event) {
// 		case 'add':
// 		case 'unlink':
// 		case 'change':			
// 	}
// });

fs.exists('./dist.zip', function(exist) {
	if (exist) {
		console.log('已有压缩包')
		fs.unlink('./dist.zip', function(err) {
			if (err) return console.log(err)
			console.log('文件删除成功')
		})
	}
