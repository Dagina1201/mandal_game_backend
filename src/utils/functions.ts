
export const AgeCalc = (value: number) => {


    if (value <= 26) return 18
    if (value < 50) return 36
    return 50

}

export const checkLevel = (value: number) => {
    const levelXp = Array.from({ length: 10 }, (_, i) => i != 0 ? i * 20 : 0)

    for (let i = 0; i < levelXp.length; i++) {
        if (i != 0) {
            if (levelXp[i] <= value && levelXp[i - 1] > value) {
                return i + 1
            } else {
                return i 
            }
        }

    }

}