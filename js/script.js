const loadButtonCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const categories = await response.json();
    return categories.data.news_category;
}
const showButton = async() => {
     //console.log(loadButtonCategories()) 
     const perButton = await loadButtonCategories()
     //console.log(perButton)

    const buttonCategories = document.getElementById('buttonCategories');
    // buttonCategories.innerHTML = ``;
    buttonCategories.classList.add('m-5')
    buttonCategories.innerHTML = `
    <button onclick="breaking('${perButton[0].category_id}')" class="btn btn btn-primary">${perButton[0].category_name}</button>

    <button onclick="regular('${perButton[1].category_id}')" class="btn btn btn-primary">${perButton[1].category_name}</button>

    <button onclick="international('${perButton[2].category_id}')" class="btn btn btn-primary">${perButton[2].category_name}</button>

    <button onclick="sports('${perButton[3].category_id}')" class="btn btn btn-primary">${perButton[3].category_name}</button>

    <button onclick="entertainment('${perButton[4].category_id}')" class="btn btn btn-primary">${perButton[4].category_name}</button>

    <button onclick="cultural('${perButton[5].category_id}')" class="btn btn btn-primary">${perButton[5].category_name}</button>

    <button onclick="arts('${perButton[6].category_id}')" class="btn btn btn-primary">${perButton[6].category_name}</button>

    <button onclick="allNews('${perButton[7].category_id}')" class="btn btn btn-primary">${perButton[7].category_name}</button>
    `
    // buttonCategories.appendChild(buttonCategories);
}
const breaking = (id) => {
     fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
     .then(rest => rest.json())
     .then(data => {
        console.log(data.data)
    //    let show = document.getElementById('total');
    //    show.innerText = data.data.length 
        let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.forEach(details => {
            console.log(details)
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('row');
            makeDiv.classList.add('mb-5');
            makeDiv.classList.add('shadow-lg')
            makeDiv.classList.add('p-4')
            makeDiv.classList.add('rounded-4')
            makeDiv.classList.add('bg-white')
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
                  <div><span class="fw-bold">View</span>  ${details.total_view}</div>
                  <div>
                  <button onclick="buttonDetails(${details.author.category_id})" class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
                  </div>
                  </div>
              </div>
            `
            breakingNews.appendChild(makeDiv);
        })

     })
}
const regular = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
     .then(rest => rest.json())
     .then(data => {
        console.log(data.data)
        let breakingNews = document.getElementById('breakingNews');
         breakingNews.innerHTML = ``;
        data.data.forEach(details => {
            console.log(details)
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('row');
            makeDiv.classList.add('mb-5');
            makeDiv.classList.add('shadow-lg')
            makeDiv.classList.add('p-4')
            makeDiv.classList.add('rounded-4')
            makeDiv.classList.add('bg-white')
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
               <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
              </div>
              <div><span class="fw-bold">View</span>  ${details.total_view ? details.total_view : 'NO VIEW'}</div>
              <div>
              <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
              </div>
              </div>
            
          </div>
            `
            breakingNews.appendChild(makeDiv);
        })
     })
}

const international = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}


const sports = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}

const entertainment = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}

const cultural =(id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}

const arts = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}

const allNews = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       console.log(data.data)
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
       data.data.forEach(details => {
           console.log(details)
           let makeDiv = document.createElement('div');
           makeDiv.classList.add('row');
           makeDiv.classList.add('mb-5');
           makeDiv.classList.add('shadow-lg')
           makeDiv.classList.add('p-4')
           makeDiv.classList.add('rounded-4')
           makeDiv.classList.add('bg-white')
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
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button class="btn btn-danger text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       })
    })
}


const buttonDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then(rest => rest.json())
    .then(data => {
        console.log(data)
    })
}




showButton()