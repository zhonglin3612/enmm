
//---------------------------------------------------- 

//---------------------------------------------------- 
/*
    rem 相对于根节点( HTML节点)的字体大小, 1 rem = 1 * HTML节点的字体大小
    vw、vh 相对于可视窗口大小百分比，可视窗口为 100vw / 100vh
*/
//+++++++++     rem自适应布局   ++++++++++    
function remSize(fSize) {
    /* 
        参数：
            fSize: 开发的逻辑像素数值
        利用rem自适应布局，自调节 HTML font-size ;
    */

    // console.log('当前html大小:',100 / 320 * document.documentElement.clientWidth)
    // console.log('当前窗口大小:',document.documentElement.clientWidth)
    document.documentElement.style.fontSize = 100 / fSize * document.documentElement.clientWidth + 'px'
    window.onresize = function () {
        // console.log('当前html大小:',100 / 320 * document.documentElement.clientWidth)
        // console.log('当前窗口大小:',document.documentElement.clientWidth)
        document.documentElement.style.fontSize = 100 / fSize * document.documentElement.clientWidth + 'px'
    }
}
//---------------------------------------------------- 

//---------------------------------------------------- 
/*
    test
*/
//+++++++++     test   ++++++++++    
function test() {

}