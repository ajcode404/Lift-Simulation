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
        lifts.push({ 'id': `lift-id-${index}`, 'currLoc': config.numberOfFloors - 1 })
    }
    return { floors, lifts }
}

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

function renderFloors(floors) {
    for (let index = 0; index < floors.length; index++) {
        const floor = floors[index];
        // lift buttons
        const up = document.createElement('button')
        up.setAttribute('id', floor.up)
        up.innerHTML = 'Up'
        const down = document.createElement('button')
        down.innerHTML = 'Down'
        down.setAttribute('id', floor.down)

        // button div
        const fc = document.createElement('div')
        fc.setAttribute('class', 'floor-component')
        fc.appendChild(up)
        fc.appendChild(down)

        // parent div
        const f = document.createElement('div')
        f.setAttribute('id', `floor-${index}`)
        f.setAttribute('class', 'floor')
        f.appendChild(fc)

        // append to canvas
        const canvas = document.getElementById('canvas')
        canvas.appendChild(f)
    }
}

function renderLifts(lifts) {
    for (let index = 0; index < lifts.length; index++) {
        const lift = lifts[index];    
        // lift doors
        const ldl = document.createElement('div')
        ldl.classList.add('lift-door', 'lift')

        const ldr = document.createElement('div')
        ldr.classList.add('lift-door', 'right')

        // lift box
        const fcl = document.createElement('div');
        fcl.classList.add('floor-component', 'lift')
        fcl.appendChild(ldl)
        fcl.appendChild(ldr)
        
        // append to the floor
        const floor = document.getElementById(`floor-${lift.currLoc}`)
        floor.appendChild(fcl)
    }
}

function createFloor() {
    const canvas = document.getElementById('canvas');
}

document.getElementById('config-submit-btn').addEventListener('click', () => {
    const configs = refreshConfig()
    const datastore = createDataStore(configs);
    renderFloors(datastore.floors)
    renderLifts(datastore.lifts)
    console.log(datastore)
})


document.addEventListener('DOMContentLoaded', () => {
    const up = document.getElementById('up1');
    const down = document.getElementById('down1');
    up.addEventListener('click', () => {
        lift.classList.add('open');
    });

    down.addEventListener('click', () => {
        lift.classList.remove('open');
    });
});

