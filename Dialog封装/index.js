// 点击删除
function rightClose(box){
	$('#'+box).remove()
}
// dom节点转换为字符串方法
function toInnerHTML(obj){
	const div = document.createElement('div')
	div.appendChild(obj)
	obj.style.display = 'block'
	var a = div.innerHTML
	return a
}
var yes1 = function(){}
var no2 = function(){}

var keyui = {
	// 弹窗方法
	dialog:function(obj){
		// 设置默认值
		var {title='弹窗',content="",btn=[],yes,no,area=['50%','50%']} = obj
		// 创建一个时间戳当层级id
		var date = new Date().getTime()
		if(typeof yes==='function'){
			yes1=yes
		}
		if(typeof no === 'function'){
			no1 = no
		}
		// 判断有无btn数组
		var dialog_bottom = ''
		if(btn && btn.length){
			dialog_bottom += `<div class="dialog-bottom">`
			btn.forEach((element,index)=>{
				dialog_bottom +=  `<div class="keyui-btn keyui-btn-mini ${index==0?'keyui-btn-primary':''}" οnclick="${index==0?'yes1()':'no1()'}">${element}</div>`
			})
			dialog_bottom+=`</div>`
		}
		// 拼接dom节点
		var box = $(`<div id="keyui-${date}" class="keyui-dialog-box">
                <div class="keyui-masking-layer">
                  <div class="keyui-dialog" style="width:${area[0]};height:${area[1]}">
                    <div class="keyui-dialog-head">
                    <span>${title}</span>
                      <a href="javascript:;" class="keyui-rightUp-close" οnclick="rightclose('keyui-${date}')">X</a>
                    </div>
                    <div class="keyui-dialog-content">
                      ${content?toInnerHTML($(content).clone(true)[0]):''}
                    </div>
                      ${dialog_bottom}
                  </div>
                </div>
              </div>`)
		 // 分别说一下上方对应变量的意思
		    /**
		     * @param date 时间戳，主要是为了弹窗之中在弹弹窗，用于区分当前究竟是哪一个弹窗
		     * @param area[] 0：宽度，1高度
		     * @param title 标题
		     * @param toInnerHTML($(content).clone(true)[0]) 完全克隆一个dom节点并作为参数传递给toInnerHTML用于拿到dom字符串
		     * @param dialog_bottom bottom内容，如果传递的按钮是空的，那么就不会渲染，如果不是就会渲染
		     */
		
		//  将数据插入到对应的body页面中  当然层级我们肯定要设置很高，防止被其他内容盖住
		$('body').append(box)
		// 返回id，用于关闭弹窗
		return $('#keyui-'+date)[0]
	},
	// 关闭弹窗方法
	close:function(index){
		index.remove()
	}
}