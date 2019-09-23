const gulp = require('gulp')
const gulpMarkdownToHTML = require('@wulechuan/gulp-markdown-to-html')
const path = require('path');


    module.exports = ()=>{
        /* 
        1.两个参数一个是需要编译的文件，一个是目标文件包含文件夹。
        2.如果没有指定需要编译的文件，默认当前目录下的index.md,如果不存在，报错。
        3.如果没有指定目标文件，默认当前目录下的index.html.
        */
    //    console.log(path.resolve(__dirname,'/love/index.js'));

       var args = process.argv.slice(2);
       var compileFile =args[0] || './index.md';
       var targetDir = args[1] || './';
       gulp.src(compileFile).pipe(gulpMarkdownToHTML()).pipe(gulp.dest(targetDir));

       console.log(`compile succeed at ${path.resolve(targetDir)}`);
    }