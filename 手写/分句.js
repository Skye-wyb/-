let str =
  // 'Its undeniable that we should be together ... Its unbelievable how I used to say that i`d fall never\nThe basis is need to know ? if you dont know just how I feel\nThen let me show you now that Im for real ! \nIf all things in time ,time will reveal\n"One you are like a dream come true ." " Two just wanna be with you !"\nThree girl it`s plain to see that youre the only one for me\nand Four repeat steps one through three\nFivemake you fall in love with me'
  // 'He didn`t come up today.please stand up?Your time is up  they are out of food!they are out of food… He is out of town this week!@#44555/."to see a world in a grain of sand."And a heaven in a wild lwer?""Hold ifinit in the palm of your har!!!"And etermity in an hour…" yes:"I?know.car?'
  'Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul. Worry, fear, self-distrust bows the heart and turns the spirit back to dust.\nWhether 60 or 16, there is in every human beings heart the lure of wonders, the unfailing appetite for whats next and the joy of the game of living. In the center of your heart and my heart, there is a wireless station; so long as it receives messages of beauty, hope, courage and power from man and from the infinite, so long as you are young.\nWhen your aerials are down, and your spirit is covered with snows of cynicism and the ice of pessimism, then youve grown old, even at 20; but as long as your aerials are up, to catch waves of optimism, theres hope you may die young at 80.\nAll of us have read thrilling stories in which the hero had only a limited and specified time to live. Sometimes it was as long as a year, sometimes as short as 24 hours. But always we were interested in discovering just how the doomed hero chose to spend his last days or his last hours. I speak, of course, of free men who have a choice, not condemned criminals whose sphere of activities is strictly delimited.     '
function hasSymbolEnglish(s) {
  if (
    s.includes('. ') ||
    s.includes('! ') ||
    s.includes('… ') ||
    s.includes('? ') ||
    s.includes(';"') ||
    s.includes('."') ||
    s.includes('!"') ||
    s.includes('…"') ||
    s.includes('?"')
  ) {
    return true
  }
  return false
}
function sentences(str) {
  str.trim()
  let ans = []
  let sentencesList = []
  let temp = str.split('\n')
  console.log(temp)
  for (let s of temp) {
    let start = 0
    let end = 0
    let dep = []
    if (hasSymbolEnglish(s)) {
      console.log(s)
      s.replace(
        /[.][\u0020]|[?][\u0020]|[!][\u0020]|[…][\u0020]|[.]["]|[?]["]|[!]["]|[…]["]|[;]["]/g,
        (a, b, c) => {
          console.log(a, b, c)
          end = b + 2
          let sen = c.substring(start, end)
          let rest = c.substring(end)
          console.log('kkk', rest)
          start = end
          ans.push(sen)
          dep.push(sen)
          if (rest.length && !hasSymbolEnglish(rest)) {
            console.log('hhhh', rest)
            ans.push(rest)
            dep.push(rest)
          }
        }
      )
    } else {
      ans.push(s)
      dep.push(s)
    }
    sentencesList.push(dep)
  }
  return ans
}

console.log(sentences(str))
// console.log(sentences(str).join('') === str)
