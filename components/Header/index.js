// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const 
            headerTop = document.createElement('div'),
            dateTop = document.createElement('span'),
            titleTop = document.createElement('h1'),
            tempTop = document.createElement('span');

    headerTop.appendChild(dateTop);
    headerTop.appendChild(titleTop);
    headerTop.appendChild(tempTop);

    headerTop.classList.add('header');
    dateTop.classList.add('date');
    tempTop.classList.add('temp');

    dateTop.textContent = 'MARCH 28, 2019';
    titleTop.textContent = 'Lambda Times';
    tempTop.textContent = '98°';

    return headerTop;
}

const headerFun = document.querySelector('.header-container');

headerFun.appendChild(Header());
