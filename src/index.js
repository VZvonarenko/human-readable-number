module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tentonineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tentoninty = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) return numbers[number];
    if (number >= 10 && number < 20) return tentonineteen[number - 10];
    if (number >= 20 && number < 100) {
        return (number % 10 == 0) ? tentoninty[number / 10 - 1] : (tentoninty[Math.floor(number / 10) - 1] + ' ' + numbers[number % 10]);
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) return (numbers[number / 100] + ' hundred');
        if (number % 100 != 0) return numbers[Math.floor(number / 100)] + ' hundred ' + toReadable(number - (Math.floor(number / 100)) * 100)
    }
}