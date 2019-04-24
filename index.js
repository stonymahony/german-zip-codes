'use strict';

const data = require('./data/data');

const states = ['Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'];

function getZipCodes() {
    let zipCodes = [];

    for (const entry of data.data) {
        zipCodes.push(entry.plz);
    }

    return zipCodes;
}

function getDistricts(sort = false) {
    let districts = [];

    for (const entry of data.data) {
        districts.push(entry.ort);
    }

    if (!sort) {
        return districts;
    } else {
        districts.sort();
        return districts;
    }
}

function getStates() {
    return states;
}

function getZipCodesByDistrict(district) {
    let zipCodesByDistrict = [];

    for (const entry of data.data) {
        if (entry.ort.includes(district) && !zipCodesByDistrict.includes(entry.plz)) {
            zipCodesByDistrict.push(entry.plz);
        }
    }

    return zipCodesByDistrict;
}

function getDistrictsByZipCode(zipCode) {
    let districtsByZipCode = [];

    for (const entry of data.data) {
        if (entry.plz.toString().includes(zipCode.toString()) && !districtsByZipCode.includes(entry.ort)) {
            districtsByZipCode.push(entry.ort);
        }
    }

    return districtsByZipCode;
}

module.exports = {
    getZipCodes,
    getDistricts,
    getStates,
    getZipCodesByDistrict,
    getDistrictsByZipCode
};
