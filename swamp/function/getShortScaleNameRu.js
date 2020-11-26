//ЕМ СТРОКУ - ДАЮ СТРОКУ
function getShortScaleNameRu(inputStringOfNumbers) {

	function deleteUndefinedStringAndEmptyStringFromArray(array) {
		'use strict';
		let undefinedChecked = false;
		while (undefinedChecked == false) {
			undefinedChecked = true
			for (let wordId = 0; wordId != array.length; wordId++) {
				if (array[wordId] == 'undefined') {
					array.splice(wordId, 1);
					undefinedChecked = false
				}
			}
		}

		undefinedChecked = false;
		while (undefinedChecked == false) {
			undefinedChecked = true
			for (let wordId = 0; wordId != array.length; wordId++) {
				if (array[wordId] == '') {
					array.splice(wordId, 1);
					undefinedChecked = false
				}
			}
		}
	}

	function getUnitName(unit) {
		'use strict';
		let unitName = [
			'один', 'два', 'три',
			'четыре', 'пять', 'шесть',
			'семь', 'восемь', 'девять'
		];
		return unitName[unit - 1];
	}

	function getTenName(ten) {
		'use strict';
		let tenName = [
			'десять', 'двадцать', 'тридцать',
			'сорок', 'пятьдесят', 'шестьдесят',
			'семьдесят', 'восемьдесят', 'девяносто'
		];
		return tenName[ten - 1];
	}

	function getElevenNineteenName(unit) {
		'use strict';
		let elevenNineteenName = [
			'одиннадцать', 'двенадцать', 'тринадцать',
			'четырнадцать', 'пятнадцать', 'шестнадцать',
			'семнадцать', 'восемнадцать', 'девятнадцать'
		];
		return elevenNineteenName[unit - 1];
	}




	function getTenUnitName(ten, unit) {
		'use strict';
		if (ten == 0 && unit == 0) {
			return '';
		} else if (ten == 0 && unit != 0) {
			return getUnitName(unit);
		} else if (ten == 1 && unit != 0) {
			return getElevenNineteenName(unit);
		} else if (ten != 0 && unit == 0) {
			return getTenName(ten);
		} else if (ten != 0 && unit != 0 && ten != 1) {
			return getTenName(ten) + ' ' + getUnitName(unit);
		}
	};

	function getHundredName(hundred) {
		'use strict';
		if (hundred == 0) {
			return ''
		}
		let hundredName = [
			'сто', 'двести', 'триста',
			'четыреста', 'пятьсот', 'шестьсот',
			'семьсот', 'восемьсот', 'девятьсот'
		];
		return hundredName[hundred - 1];
	}

	//!NEXUS
	function getHundredTenUnitName(hundred, ten, unit) {
		'use strict';
		return getHundredName(hundred) + ' ' + getTenUnitName(ten, unit);
	}

	//! ем единицы и десятки и возвращаю падежь
	function getCurrencyPadezh(ten, unit) {
		'use strict';
		if (unit == 1 && ten != 1) {
			return 'рубль.';
		} else if (unit > 1 && unit < 5 && ten != 1) {
			return 'рубля.';
		} else if (unit > 0 && ten == 1 || unit > 4) {
			return 'рублей.';
		} else if (unit == 0 && ten == 0) {
			return 'рублей.'; //TODO
		} else return 'рублей.';
	};

	function getThousandPadezh(ten, unit) {
		'use strict';
		if (unit == 1 && ten != 1) {
			return 'тысяча,';
		} else if (unit > 1 && unit < 5 && ten != 1) {
			return 'тысячи,';
		} else if (unit > 0 && ten == 1 || unit > 4) {
			return 'тысяч,';
		} else if (unit == 0 && ten == 0) {
			return 'тысяч,'; //TODO
		} else return 'тысяч,';
	};

	function getBillionPadezh(ten, unit) {
		'use strict';
		if (unit == 1 && ten != 1) {
			return 'миллиард,';
		} else if (unit > 1 && unit < 5 && ten != 1) {
			return 'миллиарда,';
		} else if (unit > 0 && ten == 1 || unit > 4) {
			return 'миллиардов,';
		} else if (unit == 0 && ten == 0) {
			return 'миллиардов,'; //TODO
		} else return 'миллиардов,';
	};

	function getPowerPrefixAndPadezh(ten, unit, power) {
		'use strict';
		let prefix = [ //тут 41 позиций
			'',
			'', 'мил', '',
			'трил', 'квадрил', 'квинтил',
			'секстил', 'септил', 'октил',
			'нонил', 'децил', 'ундецил',
			'дуодецил', 'тредецил', 'кваттуордецил',
			'квиндецил', 'сексдецил', 'септендецил',
			'октодецил', 'новемдецил', 'вигинтил',
			'унвигинтил', 'дуовигинтил', 'тревигинтил',
			'кваттуорвигинтил', 'квинвигинтил', 'сексвигинтил',
			'септенвигинтил', 'октовигинтил', 'новемвигинтил',
			'тригинтил', 'унтригинтил', 'дуотригинтил',
			'третригинтил', 'кваттуортригинтил', 'квинтригинтил',
			'секстригинтил', 'септентригинтил', 'октотригинтил',
			'новемтригинтил'
		];
		let ending;
		if (unit == 1 && ten != 1) {
			ending = 'лион,';
		} else if (unit > 1 && unit < 5 && ten != 1) {
			ending = 'лиона,';
		} else if (unit > 0 && ten == 1 || unit > 4) {
			ending = 'лионов,';
		} else if (unit == 0 && ten == 0) {
			ending = 'лионов,'; //TODO
		} else if (ten != 0 && unit == 0) {
			ending = 'лионов,';
		}

		return prefix[power] + ending;
	}

	// !ем единицы и десятки и номер степени, даю падежь для рубля, тысячи, лиона
	//!NEXUS
	function getPadezh(ten, unit, power) {
		'use strict';
		if (power == 0) {
			return getCurrencyPadezh(ten, unit);
		};
		if (power == 1) {
			return getThousandPadezh(ten, unit);
		};
		if (power == 3) {
			return getBillionPadezh(ten, unit);
		};
		return getPowerPrefixAndPadezh(ten, unit, power); //TODO неуверен
	}
	//!NEXUS2
	function getNubersAndPadezh(hundred, ten, unit, power) {
		'use strict';
		return getHundredTenUnitName(hundred, ten, unit) + ' ' + getPadezh(ten, unit, power); //ПОЧЕМУ ПАДЕЖА НЕТ?
	}

	'use strict';
	if (inputStringOfNumbers.length > 123) {
		console.log('ОШИБКА! ввёдёное число имеет ' + inputStringOfNumbers.length + ' знаков, а должно быть до не более чем 123 включительно!')
	}

	'use strict';

	let nameArray = [];
	let wordIdInNameArray = 0;
	for (let power = 0; power < inputStringOfNumbers.length / 3; power++) {
		let hundred = inputStringOfNumbers[inputStringOfNumbers.length - 3 - power * 3];
		let ten = inputStringOfNumbers[inputStringOfNumbers.length - 2 - power * 3];
		let unit = inputStringOfNumbers[inputStringOfNumbers.length - 1 - power * 3];

		//! ответ выдается в виде строки, так что можно работать как с массивом


		let arrayNameOfThreeNumbers = getNubersAndPadezh(hundred, ten, unit, power).split(' ');
		deleteUndefinedStringAndEmptyStringFromArray(arrayNameOfThreeNumbers);

		//стакаем огромный массив
		for (let wordIdInThreeNumbersName = arrayNameOfThreeNumbers.length - 1; wordIdInThreeNumbersName != -1; wordIdInThreeNumbersName--) {
			nameArray[wordIdInNameArray] = arrayNameOfThreeNumbers[wordIdInThreeNumbersName];
			wordIdInNameArray++;
		}
	}
	nameArray = nameArray.reverse();



	return nameArray.join(' ');
}
