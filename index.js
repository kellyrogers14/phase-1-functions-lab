// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const hq = 42;
    return Math.abs(blocks-hq)
}

//

function distanceFromHqInFeet (blocks) {
    const blockLengthInFeet = 264;
    return distanceFromHqInBlocks(blocks) * blockLengthInFeet
}

//

function distanceTravelledInFeet (startBlock, endBlock) {
    const blockLengthInFeet = 264;
    return Math.abs(startBlock - endBlock)*blockLengthInFeet
}

//

function calculatesFarePrice (startBlock, endBlock){
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock)
    let price ;

    if (distanceInFeet <= 399 ) {
        price = 0
    } else if (distanceInFeet <= 2000) {
        price = (distanceInFeet - 400) * .02
    } else if (distanceInFeet <= 2500) {
        price = 25
    } else if (distanceInFeet >=2501) {
        price = 'cannot travel that far'
    }

    return price
}