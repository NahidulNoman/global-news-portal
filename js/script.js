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
    <button onclick="regular('${perButton[1].category_id}')" class="btn btn btn-primary">${perButton[1].category_name}</button>
    <button onclick="international(${perButton[2].category_id})" class="btn btn btn-primary">${perButton[2].category_name}</button>
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
            makeDiv.classList.add('mb-5');
            makeDiv.classList.add('shadow-lg')
            makeDiv.classList.add('p-4')
            makeDiv.classList.add('rounded-4')
            makeDiv.innerHTML =`
            <div class="col-md-4">
                <img src="${details.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${details.title}</h5> <br>
                  <p class="card-text opacity-50">${details.details.slice(0,450)}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-4">
                  <div>
                  <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
                   <span class="fw-semibold">${details.author.name}</span>
                  </div>
                  <div><h3>1.5M</h3></div>
                  <div>
                  <button class="btn btn-danger text-white">Details</button>
                  </div>
                  </div>
                
              </div>
            `
            breakingNews.appendChild(makeDiv);
        })

     })
}
// const regular = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
//      .then(rest => rest.json())
//      .then(data => {
//         console.log(data.data)
//         let breakingNews = document.getElementById('regularNews');
//         data.data.forEach(details => {
//             console.log(details)
//             let makeDiv = document.createElement('div');
//             makeDiv.classList.add('row');
//             makeDiv.classList.add('mb-4');
//             // makeDiv.classList.add('')
//             makeDiv.innerHTML =`
//             <div class="col-md-4">
//                 <img src="${details.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body">
//                   <h5 class="card-title">${details.title}</h5> <br>
//                   <p class="card-text">${details.details.slice(0,250)}</p>
//                   <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
//                   <span>${details.author.name}</span>
//                 </div>
//               </div>
//             `
//             breakingNews.appendChild(makeDiv);
//         })
//      })
// }
showButton()