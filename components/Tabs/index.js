// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then (response =>{
        console.log(response)
        const tabsDiv = Tab(response.data.topics);
    })
    .catch(error =>{
        console.log('The data is not responding', error);
    });

    function Tab(topics){
        const entryPoint = document.querySelector('.topics');
        topics.forEach((topic) => {
            const tabTop = document.createElement('div');
            tabTop.classList.add('tab');
            tabTop.textContent = topic;
            entryPoint.appendChild(tabTop);
        });
    }
    