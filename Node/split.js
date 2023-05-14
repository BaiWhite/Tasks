// 1.1 导入 fs 文件系统模块
const { error } = require('console')
const fs = require('fs')
// 1.2 导入 path 路经处理模块
const path = require('path')

// 1.3 匹配 <style></style> 标签的正则
//     其中 \s 表示空白字符；\S 表示非空白字符；* 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
// 1.4 匹配 <script></script> 标签的正则
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 读取需要被处理的 HTML 文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, dataStr) {
    // 2.2 读取失败
    console.log('done')
    if (err)
        return console.log('读取失败' + err.message)
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3 定义处理 css 样式
function resolveCSS(htmlStr) {
    // 3.1 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    
    // 3.2 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>','')
    
    // 3.3 使用 writeFile() 方法，将提取的样式，写入到 clock 目录
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err){
        if (err) {
            return console.log('写入 CSS 样式失败！' + err.message)
        }
        console.log('写入样式文件成功！')
    })   
}

// 4 处理 js 脚本
function resolveJS(htmlStr) {
    // 4.1 使用正则提取页面中的 <script></script> 标签
    const r2 = regScript.exec(htmlStr)

    // 4.2 将提取出来的脚本字符串，做进一步处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    // 4.3 将提取出来的 js 脚本，写入 index.js 文件中
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, err =>{
        if (err) {
            return console.log('写入 JavaScript 脚本失败！' + err.message)
        }
        console.log('写入脚本文件成功！')
    })
}

// 5 处理 html 文件
function resolveHTML(htmlStr) {
    // 5.1 使用字符串 replace 方法，将 <style> 和 <script> 标签， 替换为外联 <link> 和 <script> 标签
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regScript, '<script src"./index.js"></script>')

    // 5.2 将替换完成的 html 代码，写入 index.html 中
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, err => {
        if (err) {
            return console.log('写入 HTML 文件失败！' + err.message)
        }
        console.log('写入 HTML 页面成功！')
    })
}