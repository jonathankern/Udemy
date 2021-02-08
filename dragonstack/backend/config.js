// Hold global const that define default behavior of how concept of generations will work amongst other global things
const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

// Refresh rate, generations will need to be recreated will help us determine a typical interval when new generations should be started a new in our app
const REFRESH_RATE = 5; // 5 units of something

// These exports will be the job of other files to then set the refresh rate to one of these individual units of time
module.exports = {
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
    REFRESH_RATE
}