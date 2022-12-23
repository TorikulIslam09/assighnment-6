


const phone_details = () => {
    const serch_feild = document.getElementById("serch_feild");
    let foodlist = serch_feild.value;
    if(foodlist == " ") {
      alert(" Please serch your food")
      console.log("ok")
    }else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodlist}`;
      console.log(url)
      fetch(url)
          .then(respons =>respons.json())
          .then(data => foodUrlget(data))
    }

        serch_feild.value = " ";
}
const foodUrlget = foodget_lis => {
    const food_collect = foodget_lis.meals;
    console.log(food_collect.length);
    if(food_collect.length == 0) {
      alert("hello")
    }
    else {
    const phone_details = document.getElementById("phone_details");

    food_collect.forEach(items => {
        // console.log(items.idMeal)
        const items_dive = document.createElement("div");
        items_dive.classList.add("col");
        items_dive.innerHTML = `
  <div class="col" onclick="foodshowbtn(${items.idMeal})">
    <div class="card h-100">
      <img src="${items.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${items.strMeal}</h5>
        <p class="card-text">${items.strInstructions.slice(0, 200)}</p>
      </div>
  </div>
        `
        // console.log()
        phone_details.appendChild(items_dive);
    });
  }
}

const foodshowbtn = fooodsId => {
    
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fooodsId}`; 
    console.log(url)
    fetch(url)
        .then(respons => respons.json())
        .then(data => singleitems(data.meals[0]))
}

const singleitems = dataItems => {
    const single_items_show = document.getElementById("single_items_show");
    // dataItems.idMeal

    // dataItems.forEach(datshow => {
    //     console.log(datshow)
            
    const single_post = document.createElement("div");
    single_post.classList.add('toikul');
    single_post.innerHTML = `
    <div class="col">
    <div class="card h-100">
      <img src="${dataItems.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${dataItems.strMeal}</h5>
        <p class="card-text">${dataItems.strInstructions}</p>
      </div>
  </div>
    `
    // })

    single_items_show.appendChild(single_post)
}

// phone_detals()