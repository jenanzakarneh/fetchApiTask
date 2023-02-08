
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then ((data)=>{
      console.log(data);
      data.forEach((post)=>{
        let myDiv= document.createElement('div');
        myDiv.setAttribute('id',post.id);
        myDiv.setAttribute('class',"card")
        myDiv.setAttribute('onclick','modifyPost(this)')
        let title =document.createElement("h3");
        title.innerHTML=post.title;
        let body=document.createElement('p');
        body.setAttribute('class','body');
        body.innerHTML=post.body;
        myDiv.append(title);
        myDiv.append(body);
        document.getElementById('output').append(myDiv);
      }
    )
    });

function modifyPost(post) {//div
  console.log(post);
  let id=post.getAttribute('id');
  console.log(id);
  const form = document.getElementById("add-post");
  form.scrollIntoView();
  let title = post.querySelector("h3"); //title element
  let body = post.querySelector("p"); //body element
  console.log("title is : " + title.innerHTML);
  console.log("body is : " + body.innerHTML);

  form.querySelector("#title").defaultValue = title.innerHTML;
  form.querySelector("#body").defaultValue = body.innerHTML;

const params = new URLSearchParams(location.search);
params.set('id', id);

window.history.pushState({}, '', `${location.pathname}?${params}`);

console.log(params.get('id'))
}
function editCard() {//form
 let params = new URLSearchParams(location.search);
console.log("param =" +params.get('id'));
cardId=params.get('id');
sellector='#'+cardId;
card = document.getElementById('output').children[cardId-1]
console.log(card)

const form = document.getElementById("add-post");
card.children[0].innerHTML=form.querySelector("#title").value;
card.children[1].innerHTML=form.querySelector("#body").value;
}
