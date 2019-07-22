console.log("test");

const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=a16d1b3c2f814bae900b0d4ca8c2e2e8';

const displayContent = function(contentArray = []) {

    const bodyElement = document.getElementById("main")
    for (let i = 0; i < contentArray.length; i++) {
        // display content
        const pElement = document.createElement('p');
        const pNode = document.createTextNode(contentArray[i].title);

        pElement.appendChild(pNode);
        bodyElement.appendChild(pElement);
    }
}

          // TODO: catch errors
const req = new Request(url);

fetch(req)
    .then(function(response) {
        return response.json(); // Promise <>
    }).then(data => { // success - we got some dasta
        if (data.status === 'ok') {
            console.log(data.articles);
            displayContent(data.articles);
        } else {
            // error
            console.warn(`Error - ${data.status}`);
        }
    }).catch(error => { /// error - we couldnt get data - some server side issue?
        console.log(error)
    });




    //https://exploringjs.com/es6/ch_modules.html