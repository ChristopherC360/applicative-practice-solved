import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    let yearCount = {};
  
    data.asteroids.forEach(asteroid => {
        let year = asteroid.discoveryYear;
        if (year in yearCount) {
        yearCount[year]++;
        } else {
        yearCount[year] = 1;
        }
    });
    
    let greatestYear = 0;
    let greatestCount = 0;
    for (const year in yearCount) {
        if (yearCount[year] > greatestCount) {
        greatestYear = year;
        greatestCount = yearCount[year];
        }
    }
    
    return Number(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
