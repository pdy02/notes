const { exec } = require('child_process');
const msg = process.argv.slice(2)[0];


// 定义要执行的Git命令
const commands = [
  'git add .', // 添加所有更改到暂存区
  `git commit -m "${msg}"`, // 提交更改
  'git push -u origin main' // 推送到远程仓库
];

// 顺序执行命令
function runCommand(index = 0) {
  if (index < commands.length) {
    exec(commands[index], (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      runCommand(index + 1); // 继续执行下一个命令
    });
  }
}

// 开始执行命令
runCommand();