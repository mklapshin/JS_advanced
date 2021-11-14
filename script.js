const str = "We are great, aren't we? 'My name is Mike'. 'Граждане, соблюдайте порядок!', - сказал он. Я шел по улице и говорил: 'Привет', потом я говорил: 'Ответ', а потом я встретил прохожего и он мне сказал: 'Иди к черту!'."
console.log(str)

const newstr = str.replaceAll(" '", ' "')
const newstr2 = newstr.replaceAll("',", '",')
const newstr3 = newstr2.replaceAll("'.", '".')
const newstr4 = newstr3.replaceAll("' ", '" ')
const newstr5 = newstr4.replaceAll("'!", '"!')

console.log(newstr5)

// let text = 'AAAADр ролр олр олр олрлор лор р олрл';
// text1 = text.replace('p', 'я')

// console.log(text1)

  // const option1 = new RegExp('pattern')
  // const option2 = /pattern/

  // const firstRegExp = /'/

  // const ourRegExp = /(g(e?|o?))/gi
  // const str = 'Geeee Go oG Geo'

  // console.log(str.match(ourRegExp))


  // const numberRegExp = /^[a-zA-Z]+$/
  // const str = 'ASDasdf'

  // console.log(numberRegExp.test(str))