/*
 * @Descripttion: 
 * @Author: 王月
 * @Date: 2020-09-15 17:06:22
 * @LastEditors: 王月
 * @LastEditTime: 2020-09-17 15:45:33
 */
/**
 * api : 一个 GeneratorAPI 实例
 * options: 可以先简单理解为 prompts 问题数组的用户输入 组合成的选项对象
 * rootOptions: 整个 preset.json 对象
 */
const process = require('process');
module.exports = (api) => {
    api.render('./template');

    // 3.修改 `package.json` 里的字段
    api.extendPackage({
        // 4.添加第三库的依赖
        dependencies: {
            "@types/good-storage": "^1.1.0",
            "axios": "^0.19.2",
            "core-js": "^3.6.4",
            "element-ui": "^2.7.2",
            "eslint": "^7.3.0",
            "eslint-friendly-formatter": "^4.0.1",
            "eslint-loader": "^2.0.0",
            "eslint-plugin-html": "^4.0.3",
            "good-storage": "^1.1.0",
            "jquery": "^3.4.1",
            "vue": "^2.6.11",
            "vue-class-component": "^7.2.2",
            "vue-cropper": "^0.5.4",
            "vue-property-decorator": "^8.3.0",
            "vue-router": "^3.1.5",
            "vuex": "^3.1.2",
        },
        // 4.添加第三库的依赖
        devDependencies: {
            "uglifyjs-webpack-plugin": "^2.2.0",
            "vue-template-compiler": "^2.6.11",
            "webpack-bundle-analyzer": "^3.6.0"
        },
        // 5.添加自定义的脚本
        scripts: {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build"
        }
    });
    // main.js 引入图片裁剪依赖
    // api.injectImports(api.entryFile, `
    //     import VueCropper from 'vue-cropper'
    // `);
    // main.js 添加elementUI
    // api.injectImports(api.entryFile, `
    //     import Element from 'element-ui'
    // `);
    api.injectImports(api.entryFile, `import 'element-ui/lib/theme-chalk/index.css'`);
    // main.js 引入默认样式
    api.injectImports(api.entryFile, `
        import './assets/styles/normalize.css'
    `);
    // main.js 引入公共样式表
    api.injectImports(api.entryFile, `
        import './assets/styles/common.less'
    `);
    // 修改main.js 添加elementui依赖
    // api.afterInvoke(() => {
    //     const { EOL } = require('os')
    //     const fs = require('fs')
    //     const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
    //     const lines = contentMain.split(/\r?\n/g)
    
    //     const renderIndex = lines.findIndex(line => line.match(/Vue.config.productionTip/))
    //     lines[renderIndex] += `${EOL}Vue.use(Element)`
    //     lines[renderIndex+1] += `${EOL}Vue.use(VueCropper)`
        
    //     console.log(666);
    //     console.log(lines.join(EOL));
    //     console.log(api.entryFile);
    //     try{
    //         fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
    //         console.log('创建项目结束了');
    //     } catch (err) {
    //         console.log('----');
    //     }
    // })
}
