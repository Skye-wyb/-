let str =
  //   '东临碣石，以观沧海。\n水何澹澹，山岛竦峙。\n树木丛生，百草丰茂……\n秋风萧瑟，洪波涌起。\n日月之行，若出其中；\n星汉灿烂，若出其里。\n幸甚至哉，歌以咏志。'
  // '测试一。测试二！测试三？测试四……“测试五。”“测试六？”“测试七！”“测试八……”“测试九。”'
  // '哥穿着复古西装，\n拿着手杖弹着魔法乐章。\n漫步走在莎玛丽丹，\n被岁月翻新的时光，\n望不到边界的帝国。\n用音符筑成的王座\n我用琴键穿梭错过的不朽\n啊偏执是那马格利特\n被我变出的苹果\n超现实的是我\n还是他原本想画的小丑'
  // '哈哈哈哈哈哈哈\n呵呵呵呵呵呵呵呵呵\n嘿嘿嘿嘿嘿嘿嘿。\n哦哦哦哦哦哦\n嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻'
  // '从前从前有个人爱你很久。但偏偏风渐渐把距离吹得好远，好不容易又能再多爱一天\n雨下整夜我的爱溢出就像雨水，窗台蝴蝶像诗里纷飞的美丽章节！我接着写把永远爱你写进诗的结尾\n我用漂亮的押韵，形容被掠夺一空的爱情……'
  '测试中文，测试一下？没有问题。多堵都拉拉？干脆就很适合和大家等哈登录就李汉\n测试的说法是考虑看！骄傲是代扣代缴啦大家大家卡手机卡陈家祠竟然继续支持是！时代开始倒计时\n使敌方舰队开始老师的附件是打开了附近开了：“是的。”夜市了解到？”'
function hasSymbol(s) {
  if (
    s.includes('。') ||
    s.includes('？') ||
    s.includes('！') ||
    s.includes('……')
  ) {
    return true
  }
  return false
}
let sentencesList = []
function sentencesChina(str, flag) {
  let ans = []
  let temp = str.split('\n')
  // console.log(temp)
  for (let s of temp) {
    let start = 0
    let dep = []
    if (hasSymbol(s)) {
      s.replace(
        /\u3002|\uff1f|\uff01|\u2026\u2026|\uff1b|\u3002\u201d|\uff1f\u201d|\uff01\u201d|\u2026\u2026\u201d/g,
        (a, b, c) => {
          console.log(a, b, c)
          let res = c.substring(start, b + 3)
          let end = 0
          if (res.includes('…') && res.includes('“')) {
            end = b + 3
          } else if (res.includes('…') || res.includes('“')) {
            end = b + 2
          } else {
            end = b + 1
          }
          let sen = c.substring(start, end)
          let rest = c.substring(end)
          start = end
          ans.push(sen)
          dep.push(sen)
          if (rest.length && !hasSymbol(rest)) {
            ans.push(rest)
            dep.push(rest)
          }
        }
      )
    } else {
      dep.push(s)
      ans.push(s)
    }
    sentencesList.push(dep)
  }
  return ans
}
// sentencesChina(str)
console.log(sentencesChina(str))
// console.log(sentencesList)
