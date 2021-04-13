function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
	let mnems = [];
	const keys = {
		'1' : ['1'],
		'2' : ['a','b','c'],
		'3' : ['d','e','f'],
		'4' : ['g','h','i'],
		'5' : ['j','k','l'],
		'6' : ['m','n','o'],
		'7' : ['p','q','r','s'],
		'8' : ['t','u','v'],
		'9' : ['w','x','y','z'],
		'0' : ['0']
	}
	let length = 1;
	let iter = 1;
	for (let i = 0; i < phoneNumber.length; i++) {
		const number = phoneNumber[i];
		if (number !== '0' && number !== '1') {
			length *= keys[number].length;
			iter *= keys[number].length;
		}
	}
	for (let i = 0; i < length; i++) {
		mnems.push([]);
	}
	for (let i = 0; i < phoneNumber.length; i++) {
		iter = (phoneNumber[i] !== '0' && phoneNumber[i] !== '1') ? iter / keys[phoneNumber[i]].length : iter;
		for (let j = 0; j < length; j++) {
			console.log(Math.floor(j/iter) )
			mnems[j].push(keys[phoneNumber[i]][Math.floor(j/iter) % keys[phoneNumber[i]].length ]);
		}
	}
	for (let i = 0; i < length; i++) {
		mnems[i] = mnems[i].join('');
	}
  return mnems;
}
