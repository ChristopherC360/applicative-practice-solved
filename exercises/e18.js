import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    let yearCount = data.asteroids.reduce((count, asteroid) => {
        let year = asteroid.discoveryYear;
        count[year] = (count[year] || 0) + 1;
        return count;
    }, {});
  
    let greatestYear = Object.keys(yearCount).reduce((maxYear, year) => {
        return yearCount[year] > yearCount[maxYear] ? year : maxYear;
    });
  
    return Number(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
