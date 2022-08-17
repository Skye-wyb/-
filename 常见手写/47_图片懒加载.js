// 图片出现在窗口才为其添加src属性
function lazyLoad(){
	const imgs = document.getElementsByTagName('img')
	const len = imgs.length
	// 视口高度
	const viewHeight = document.documentElement.clientHeight
	// 滚动条高度
	const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
	for(let i=0;i<len;i++){
		const offsetHeight = imgs[i].offsetTop
		if(offsetHeight < viewHeight - scrollHeight){
			const src = imgs[i].dataset.src
			imgs[i].src = src
		}
	}
}


window.addEventListener('scroll', lazyload)