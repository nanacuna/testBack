export function capitalizeKeys(keyValuePairs){
    const entries = Object.entries(keyValuePairs);
    const capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
    
    return Object.fromEntries(capsEntries);
}