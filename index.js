function shiftData() {
    return {
        selectedShift: '',
        transportFee: '',

        updateFee() {
            this.transportFee = this.calculateFee(this.selectedShift);
        },
        calculateFee(shift) {
            if (shift === 'morning') {
                return 'R20';
            } else if (shift === 'afternoon') {
                return 'R10';
            } else if (shift === 'nightshift') {
                return 'Free';
            }
            return '';
        }
    };

}
function sentenceData() {
    return {
        sentence: '',
        longestWord: '',
        shortestWord: '',
        totalWordLength: 0,
        analyzeSentence() {
            this.longestWord = this.findLongestWord(this.sentence);
            this.shortestWord = this.findShortestWord(this.sentence);
            this.totalWordLength = this.calculateWordLengths(this.sentence);
        },
        findLongestWord(sen) {
            const words = sen.split(' ');
            let longest = words[0];

            for (const word of words) {
                if (word.length > longest.length) {
                    longest = word;
                }
            }
            return longest;
        },
        findShortestWord(sen) {
            const words = sen.split(' ');
            let shortest = words[0];

            for (const word of words) {
                if (word.length <= shortest.length) {
                    shortest = word;
                }
            }
            return shortest;
        },
        calculateWordLengths(sen) {
            let len = 0;
            const words = sen.split(' ');
            for (const word of words) {
                len += word.length;
            }
            return len;
        }
    };
}
function greetData() {
    return {
        selectedLanguage: 'en',
        name: '',
        greeting: '',
        updateGreeting() {
            this.greeting = this.greet(this.name, this.selectedLanguage);
        },
        greet(friendName, lang) {
            const greetings = {
                en: "Hello, " + friendName,
                xi: "Avuxeni, " + friendName,
                fr: "Bonjour, " + friendName,
                se: "Dumela, " + friendName,
                zu: "Sawubona, " + friendName
            };
            return greetings[lang] || greetings['en'];
        }
    };
}
function phoneBillData() {
    return {
        phoneString: '',
        totalBill: '',
        calculateBill() {
            this.totalBill = this.totalPhoneBill(this.phoneString);
        },
        totalPhoneBill(data) {
            const network = data.split(',');
            let smsCount = 0;
            let callCount = 0;

            for (let i = 0; i < network.length; i++) {
                if (network[i].trim() === 'sms') {
                    smsCount++;
                } else if (network[i].trim() === 'call') {
                    callCount++;
                }
            }

            const smsCost = smsCount * 0.65;
            const callCost = callCount * 2.75;
            const totalCost = smsCost + callCost;

            return 'R' + totalCost.toFixed(2);
        }
    };
}


