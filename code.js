
const EventEmitter = require('events');

class TrafficLight extends EventEmitter {
    constructor() {
        super();
        this.lights = ['red', 'green', 'yellow'];
        this.index = 0;
    }

    start() {
        this.changeLight();
    }

    changeLight() {
        const light = this.lights[this.index];

        // Emit event whenever light changes
        this.emit('change', light);

        console.log(`Current Light: ${light.toUpperCase()}`);

        // Schedule next light change after 3 seconds
        setTimeout(() => {
            this.index = (this.index + 1) % this.lights.length;
            this.changeLight();
        }, 3000);
    }
}

// Create traffic light
const traffic = new TrafficLight();

// Register event listener
traffic.on('change', (light) => {
    console.log(`Event emitted: ${light}`);

    if (light === 'red') {
        console.log('STOP!');
    } else if (light === 'green') {
        console.log('GO!');
    } else if (light === 'yellow') {
        console.log('GET READY!');
    }
});

// Start traffic light
traffic.start();
