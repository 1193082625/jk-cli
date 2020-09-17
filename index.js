#!/usr/bin/env node
const util = require('util');
const inquirer = require('inquirer');
const { EOL } = require('os')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const execP = util.promisify(require('child_process').exec);
const argvs = require('process').argv.slice(2);

if(!argvs[0]) {
    inquirer.prompt([
        {
            type: 'input',
            message: '请输入项目名称',
            name: 'proName'
        }
    ]).then(answers => {
        createPro(answers.proName);
    })
} else {
    createPro(argvs[0]);
}
function createPro(proName) {
    console.log(`即将创建${proName}，请等待...`);
    // 判断是否安装了 vue 和 vue-cli
    let checkPackage = exec(`npm ls @vue/cli -g`);
    checkPackage.stdout.on('data', async (data) => {
        if(data.indexOf('empty') > -1) { // 判断是否需要安装包
            console.log('未安装vue-cli，即将进行相关安装');
            exec(`npm install -g @vue/cli`);
        } else {
            let proPath = path.resolve(__dirname, 'vue-cli-plugin-vbpm');
            execP(`cd .. && vue create --preset ${proPath} ${proName}`).then(res => {
                let mainPath = path.resolve(__dirname, `../${proName}/src/main.js`);
                const contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' });
                const lines = contentMain.split(/\r?\n/g);
            
                const renderIndex = lines.findIndex(line => line.match(/element-ui/));
                const writeIndex = lines.findIndex(line => line.match(/Vue.config.productionTip/));
                lines[renderIndex-1] += `${EOL}import VueCropper from 'vue-cropper';${EOL}import Element from 'element-ui';`;
                lines[writeIndex-1] += `${EOL}Vue.use(Element);${EOL}Vue.use(VueCropper);`;
                try{
                    fs.writeFileSync(mainPath, lines.join(EOL), { encoding: 'utf-8' });
                    console.log('创建完成');
                    console.log(`cd ${proName}`);
                    console.log(`npm run serve`);
                } catch (err) {
                    console.log('重写main.js失败');
                }
            }).catch(err => {
                console.log('创建项目失败了');
                console.log(err);
            });
        }
    });
}

