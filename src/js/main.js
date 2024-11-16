const FLOOR_MIN_LIMIT = 1
const FLOOR_MAX_LIMIT = 100

const LIFT_MIN_LIMIT = 1
const LIFT_MAX_LIMIT = 10


function createDataStore(config) {
    const floors = []
    for (let index = 0; index < config.numberOfFloors; index++) {
        floors.push({ 'up': `up-${index}`, 'down': `down-${index}` })
    }
    const lifts = []
    for (let index = 0; index < config.numberOfLifts; index++) {
        lifts.push({ 'id': `lift-id-${index}`, 'curr': 0 })
    }
    return { floors, lifts }
}

const d = createDataStore(10, 10)

function refreshConfig() {
    const numberOfFloors = document.getElementById('config-floor').value;
    const numberOfLifts = document.getElementById('config-lift').value;
    if (!numberOfFloors || !numberOfLifts) {
        window.alert("please enter number of floor/lift")
        return;
    }
    if (!(numberOfFloors >= FLOOR_MIN_LIMIT && numberOfFloors <=FLOOR_MAX_LIMIT)) {
        window.alert(`floor limit should be in the range of ${FLOOR_MIN_LIMIT} to ${FLOOR_MAX_LIMIT}`);
        return;
    }
    if (!(numberOfLifts >= LIFT_MIN_LIMIT && numberOfLifts <= LIFT_MAX_LIMIT)) {
        window.alert(`floor limit should be in the range of ${LIFT_MIN_LIMIT} to ${LIFT_MAX_LIMIT}`);
        return;
    }
    return { numberOfFloors, numberOfLifts }
}

function createFloor() {
    const canvas = document.getElementById('canvas');
}

document.getElementById('config-submit-btn').addEventListener('click', () => {
    const configs = refreshConfig()
    const datastore = createDataStore(configs);
    console.log(datastore)
})

document.addEventListener('DOMContentLoaded', () => {

    const up = document.getElementById('up1');
    const down = document.getElementById('down1');

    up.addEventListener('click', () => {
        lift.classList.add('open'); // Add the class to open doors
    });

    down.addEventListener('click', () => {
        lift.classList.remove('open'); // Remove the class to close doors
    });
});
