const hasDuplicate = (arr) => {
	const newSet = new Set(arr);
	if (newSet.size === arr.length) {
		return false;
	}
	return true;
};
hasDuplicate([ 1, 3, 2, 1 ]); // true
hasDuplicate([ 1, 5, -1, 4 ]); // false

// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values are the
// count of the vowels in the string.

function vowelCount(strNew) {
	let valueMap = new Map();
	const strVowels = 'aeiou';
	for (const char of strNew) {
		if (strVowels.indexOf(char) !== -1) {
			if (valueMap.has(char)) {
				valueMap.set(char, valueMap.get(char) + 1);
				console.log(valueMap);
			} else {
				valueMap.set(char, 1);
			}
		}
		intCount = 0;
	}
	console.log(valueMap);
}

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }
