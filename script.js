let url = "https://breakingbadapi.com/api/characters";
let allnamecontainer = document.getElementById("cards_container");

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        data.forEach((dataitem) => {
            let cardtemplate = `
<div class="card" style="background-color: black">
<div class="card-inner">
  <div class="card-front">
    <img
      src="${dataitem.img}"
      alt=""
    />
  </div>
  <div class="card-back">
    <div style="text-align: center">
      <img
        src="https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049"
        alt=""
      />
    </div>
    <h1>shivani</h1>
    <ul>
      <li><strong>Actor Name:</strong> Kerry Condon</li>
      <li><strong>Nickname:</strong> Stacey</li>
      <li><strong>Birthday:</strong> Unknown</li>
      <li><strong>Status:</strong> ?</li>
    </ul>
  </div>
</div>
</div>
`;

            allnamecontainer.insertAdjacentHTML("afterbegin", cardtemplate);
        });
    });
