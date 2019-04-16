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

function getDistricts(sort) {
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
        if (entry.ort === district && !zipCodesByDistrict.includes(entry.plz)) {
            zipCodesByDistrict.push(entry.plz);
        }
    }

    return zipCodesByDistrict;
}

function getDistrictsByZipCode(district) {
    let districtsByZipCode = [];

    for (const entry of data.data) {
        if (entry.plz === district && !districtsByZipCode.includes(entry.ort)) {
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

require('make-runnable');
