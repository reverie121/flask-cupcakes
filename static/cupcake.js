console.log('testing');

const BASE_URL = 'http://localhost:5000/api';

function cupcakeHTML(cupcake) {

    return `
        <li>
            <img src='${cupcake.image}'> ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
        </li>
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


getCupcakes();