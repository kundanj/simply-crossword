

export function matchMaps(map1, map2) {
    let tempVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        tempVal = map2.get(key);
        if (tempVal.toUpperCase() !== val.toUpperCase()) {
            return false;
        }
    }
    return true;
}

export const loadCW = (url, params, callback, err) => {

    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(params),
    })
    .then(res =>
        {
            if (!res.ok) {
                throw Error(res.status + '; ' + res.statusText)
            }
            return res.json() 
        })
    .then(res => {
            callback(res)
        })
    .catch(e => {
        err(e)
        console.log('in load crossword catch error -' + e)
    })

}

