let result;
let list;

export function limitList(searchTerm) {
    let validElements = list.filter(x => x.includes(searchTerm));
    const domList = document.getElementById('mdlList');
    domList.innerHTML = ""; // remove last search result
    for (const e of validElements) {
        const li = document.createElement('li');
        li.innerHTML = e;
        li.onclick = function () { selectModel(this.innerHTML) };
        domList.appendChild(li);
    }
}
export function selectModel(mdlName) {
    document.getElementById('mdlSearch').value = "";
    document.getElementById('mdlSelection').hidden = true;
    result = mdlName;
}

function showModelSelection(l) {
    list = l;
    result = null;
    limitList("");
    document.getElementById('mdlSelection').hidden = false;
}

/**
 * Prompt userer with long searchable list
 * @param {Arrray} l list to display to user
 * @returns promise with result
 */
export function getModelSelectionPromise(l) {
    const promise = new Promise((resolve, reject) => {
        showModelSelection(l)
        function checkForResult() { // recursively check for result
            if (!result) {
                setTimeout(checkForResult, 50);
            } else if (result === -1) {
                reject('No model selected');
            } else {
                resolve(result);
            }
        }
        checkForResult();
    });
    return promise
}