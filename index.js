const gulp = require('gulp')
const gulpMarkdownToHTML = require('@wulechuan/gulp-markdown-to-html')
const path = require('path');


module.exports = ()=>{
    /* 
    compileFile : default as ./index.md
    targetDir : default as current dir.
    */
//    console.log(process.argv)
    var args = process.argv.slice(2);
    var compileFile =args[0] || './index.md';
    var targetDir = args[1] || './';
    gulp.src(compileFile).pipe(gulpMarkdownToHTML()).pipe(gulp.dest(targetDir));

    console.log(`compile succeed at ${path.resolve(targetDir)}`);
}