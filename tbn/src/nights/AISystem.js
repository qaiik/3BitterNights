class AnimatronicAISystem {
    constructor(interval, maxAiValue=20, startingAiValue=0) {
        this.interval = interval;
        this.max = maxAiValue;
        this.aiLevel = startingAiValue;
    }

    setAi(n) {
        this.aiLevel = n;
    }

    adjustAi(n) {
        this.aiLevel += n
    }
    /*
    interval: how many seconds apart animatronic movement opportunities are (seconds, with 2 digit decimal)
    maxAiValue: integer, max ai an animatronic can reach, also what movement calculations are based on (maximum random number to be pulled, usually 20)
    1 ai with maxAiValue = 5 is faster than 1 ai with maxAiValue 20,
    defaultai: what ai value animatronic starts at when initialized, can be changed by setAi() or adjustAi() (+/-int)
    */
}