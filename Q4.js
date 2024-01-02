class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceKm, timeMinutes) {
        const distanceCost = distanceKm * this.costPerKm;
        const timeCost = timeMinutes * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}

const calculator = new UberCalculator(2.5, 0.8, 0.2);
const distance = 10;   // in kilometers
const time = 30;       // in minutes

const price = calculator.calculatePrice(distance, time);
console.log(`The estimated Uber price is $${price.toFixed(2)}`);
