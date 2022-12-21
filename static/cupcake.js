const BASE_URL = 'http://localhost:5000/api';

function cupcakeHTML(cupcake) {

    return `
            <div class="row">
                <div class="col-3">
                    <img class="thumbnail img-fluid" src="${cupcake.image}" >
                </div>
                <div class="col-9">
                    <div>
                        <span class='badge'>Flavor: ${cupcake.flavor}</span>
                    </div>
                    <div>
                        <span class='badge'>Size: ${cupcake.size}</span>
                    </div>                   
                    <div>
                        <span class='badge'>Rating: ${cupcake.rating}</span>
                    </div>
                </div>
            </div>

        <hr>
  `;
}

async function getCupcakes() {
    
    const response = await axios.get(`${BASE_URL}/cupcakes`);
  
    const cupcakes = response.data.cupcakes;
  
    for (let cupcake of cupcakes) {

        let newCupcake = $(cupcakeHTML(cupcake));
        $("#cupcake-list").append(newCupcake);        
        }

  };

$('#add-cupcake-form').on('submit', async function(e) {
    e.preventDefault();

    let flavor = $("#flavor").val();
    let rating = $("#rating").val();
    let size = $("#size").val();
    let image
    
    if ($("#image").val()) {
        image = $("#image").val();
    }
    else {
        image = 'https://tinyurl.com/demo-cupcake';
    }

    const response = await axios.post(`${BASE_URL}/cupcakes`, {
        flavor,
        rating,
        size,
        image
      });

      let newCupcake = $(cupcakeHTML(response.data.cupcake));
      $("#cupcake-list").append(newCupcake);
      $("#add-cupcake-form").trigger("reset");

});

getCupcakes();