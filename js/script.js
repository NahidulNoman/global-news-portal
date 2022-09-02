const loadButtonCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const categories = await response.json();
    return categories.data.news_category;
}
// const loadButtonCategories = () =>{
//     fetch(`https://openapi.programming-hero.com/api/news/categories`)
//     .then(rest => rest.json())
//     .then(categories => {
//         console.log(categories.data.news_category);

//     })
// }
const showButton = async() => {
     //console.log(loadButtonCategories()) 
     const perButton = await loadButtonCategories()
     console.log(perButton)

    const buttonCategories = document.getElementById('buttonCategories');
    buttonCategories.classList.add('m-5')
    buttonCategories.innerHTML = `
    <button onclick="breaking('${perButton[0].category_id}')" class="btn btn btn-primary">${perButton[0].category_name}</button>
    <button onclick="regular(${perButton[1].category_id})" class="btn btn btn-primary">${perButton[1].category_name}</button>
    <button class="btn btn btn-primary">${perButton[2].category_name}</button>
    <button class="btn btn btn-primary">${perButton[3].category_name}</button>
    <button class="btn btn btn-primary">${perButton[4].category_name}</button>
    <button class="btn btn btn-primary">${perButton[5].category_name}</button>
    <button class="btn btn btn-primary">${perButton[6].category_name}</button>
    <button class="btn btn btn-primary">${perButton[7].category_name}</button>
    `
    // buttonCategories.appendChild(buttonCategories);
}
const breaking = (id) => {
     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
     .then(rest => rest.json())
     .then(data => {
       // console.log(data.data)
        let breakingNews = document.getElementById('breakingNews');
        data.data.forEach(details => {
            console.log(details) 
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('row');
            makeDiv.classList.add('mb-3')
            makeDiv.innerHTML =`
            <div class="col-md-4">
                <img src="${details.image_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            `
            breakingNews.appendChild(makeDiv);
        });

     })
}
const regular = () => {}
showButton()