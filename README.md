# german-zip-codes
Small, lightweight utility to get, match and validate german postal codes with districts.
It has no dependencies, so it can run both in node.js server environment and in browsers with e.g. Angular.

## Installation
npm i german-zip-codes

## Usage
If there is no match, an empty array will be returned.
Their are no error handling implemented yet.

const zipCode = require('german-zip-codes')

* zipCode.getZipCodes(): Returns all available zipCodes.
* zipCode.getDistricts([sort]): Returns all available districts, optional sorted by alphabetical order if **sort** is **true**, default is **false** and sorted by ascending zip codes. 
* zipCode.getStates(): Returns all german federal states.
* zipCode.getZipCodesByDistrict(district): Returns all zip codes matching given district. Match is checked via include(), so you can also search incomplete district strings.
* zipCode.getDistrictsByZipCode(zipCode): Returns all districts matching given zipCode. Match is checked via include(), so you can also search incomplete district strings.

## License
MIT. Feel free to do whatever you want to, credits are welcome. 
Data based on [German-Zip-Codes.csv"](https://gist.github.com/jbspeakr/4565964) from **jbspeakr**.
