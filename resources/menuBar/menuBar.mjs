export const menubar = {};

menubar.domBar = document.getElementById('main-menu');

/**
 * Is called on menu top level button click
 * makes sub menu visible
 * @param {Element} element - clicked menu
 */
menubar.showOptions_ = function(element) {
    const dropdownDiv = element.parentElement;
    let optionsDivIndex = 0;
    let optionsDiv = dropdownDiv.childNodes[0];
    while (!optionsDiv.classList || !optionsDiv.classList.contains('menu-options')) {
        optionsDiv = dropdownDiv.childNodes[optionsDivIndex];
        optionsDivIndex++;
    };
    if (optionsDiv.hidden === null) {
        optionsDiv.hidden = true;
    }
    optionsDiv.hidden = !optionsDiv.hidden;
}

/**
 * hides menu and exectues option code
 * @param {Element} element - clicked dom item
 */
menubar.clickOption_ = function(element) {
    element.parentElement.parentElement.hidden = true;
}

/**
 * adds a menu point to the menu
 * @param {string} displayText - Name of option as displayed in the menu bar
 * @param {Object[][]} optionTextsAndFuctions - option display name and function
 * @param {string} optionTextsAndFuctions[][0] - displayname
 * @param {Function} optionTextsAndFuctions[][1] - function to execute
 */
menubar.addMenuPoint = function(displayText, optionTextsAndFuctions) {
    const menuItem = document.createElement('div');
    const menuButton = document.createElement('button');
    const optionsWrapper = document.createElement('div');
    const options = document.createElement('div');
    
    const menuItemId = 'main-menu-' + displayText.toLowerCase().replace(/ /g, '-');
    menuItem.id = menuItemId;
    menuItem.classList.add('menu-point');

    menuButton.textContent = displayText;
    menuButton.classList.add('top-level'); 
    menuButton.onclick = function() { menubar.showOptions_(this) };

    optionsWrapper.classList.add('button-list');

    options.classList.add('menu-options');
    options.hidden = true;
    for (const optionTxt of optionTextsAndFuctions) {
        // create-options
        const option = document.createElement('button');
        option.id = menuItemId + optionTxt[0].toLowerCase().replace(/ /g, '-');
        option.classList.add('option')
        option.onclick = function() { menubar.clickOption_(this); optionTxt[1](); };
        option.innerText = optionTxt[0];
        optionsWrapper.appendChild(option);
    }
    
    options.appendChild(optionsWrapper)
    menuItem.appendChild(menuButton);
    menuItem.appendChild(options);
    this.domBar.appendChild(menuItem);
}
