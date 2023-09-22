const form = document.getElementById('form');
const url = document.getElementById('url');
const description = document.getElementById('description');
const list = document.getElementById('list');

form.addEventListener('submit', post);

function post(e) {
    e.preventDefault();
    const postdescription = description.value;

    const post = {
        description: postdescription
    };

    axios
        .post('http://localhost:3000/postbooks', post)
        .then((res) => {
           // createCard(res.data);
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });

    console.log(post);
}

 function createCard(res) {
    const div = document.createElement('div');
    div.className = 'divclass'
    const li = document.createElement('li');

    const description = document.createElement('h5');
    description.innerText = `Book Name: ${res.description}`;
    li.appendChild(description);
     
    const takenon = document.createElement('h6');
     takenon.innerText = `taken on Date: ${res.createdAt}`;
     li.appendChild(takenon);

     const returnon = document.createElement('h6');
     returnon.innerText = `return on Date: ${res.createdAt}`;
     li.appendChild(returnon);

     const fine = document.createElement('h6');
     fine.innerText = `fine to be paid :0`;
     li.appendChild(fine);


    const commentButton = document.createElement('button');
     commentButton.className = 'btn btn-success'

    commentButton.textContent = 'return book';
    li.appendChild(commentButton);
    div.appendChild(li);
    list.appendChild(div);
}



window.addEventListener('DOMContentLoaded', async () => {
    try {
        let res = await axios.get('http://localhost:3000/getbooks');
        for (var i = 0; i < res.data.length; i++) {
            // console.log(res.data);
            createCard(res.data[i]);
        }
    } catch (error) {
        console.log(error);
    }

 });



