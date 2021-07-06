const ul = document.getElementById('People'),
      url = 'https://randomuser.me/api/?gender=male&results=10';

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }

fetch(url)
  .then((response) => { return response.json(); })
  .then( data => {
    let People = data.results; 
    return People.map( People => { 
      let li = createNode('li'), 
          img = createNode('img'),
          span = createNode('span');
      img.src = People.picture.medium;  
      span.innerHTML = `${People.name.first} ${People.name.last}`; 
      append(li, img); 
      append(li, span);
      append(ul, li);
    });
  })
  .catch( error => { console.log(error); })
