const FLOOR_MIN_LIMIT = 1
const FLOOR_MAX_LIMIT = 100

const LIFT_MIN_LIMIT = 1
const LIFT_MAX_LIMIT = 10

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
    console.log(numberOfFloors, numberOfLifts);
}

document.getElementById('config-submit-btn').addEventListener('click', () => {
    refreshConfig()
})