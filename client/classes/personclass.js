
export default class Player {
    constructor() {
        this.name = ""
        this.times = []
    }
    recordTime(cb) {
        const start = Date.now()
        cb();
        const end = Date.now();
        let time = end - start;
        this.times.push(time);
    }
    average() {
        let total = 0
        this.times.forEach(element => {
            total += element
        });
        let average = 0
        if (this.times.length > 0) {
            average = total / this.times.length
            return average / 1000
        }
    }
    totalTime() {
        let total = 0
        this.times.forEach(element => {
            total += element
        })
        return total / 1000
    }
}

        // const average2 = average/1000
        // const total2 = total/1000
        // console.log(` you average time per riddle is: ${average2} seconds`)
        // console.log(` you time for all riddles is: ${total2} seconds`)
        // return total2
    


