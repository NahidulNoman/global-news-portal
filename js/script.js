const loadButtonCategories = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const categories = await response.json();
    return categories.data.news_category;
}

// button show on display 

const showButton = async() => {
     //console.log(loadButtonCategories()) 
     const perButton = await loadButtonCategories()
     //console.log(perButton)
     
    const buttonCategories = document.getElementById('buttonCategories');

    buttonCategories.innerHTML = `
    <button onclick="breaking('${perButton[0].category_id}')" class="btn btn btn-primary  mb-2">${perButton[0].category_name}</button>

    <button onclick="regular('${perButton[1].category_id}')" class="btn btn btn-primary mb-2">${perButton[1].category_name}</button>

    <button onclick="international('${perButton[2].category_id}')" class="btn btn btn-primary mb-2">${perButton[2].category_name}</button>

    <button onclick="sports('${perButton[3].category_id}')" class="btn btn btn-primary mb-2">${perButton[3].category_name}</button>

    <button onclick="entertainment('${perButton[4].category_id}')" class="btn btn btn-primary mb-2">${perButton[4].category_name}</button>

    <button onclick="cultural('${perButton[5].category_id}')" class="btn btn btn-primary mb-2">${perButton[5].category_name}</button>

    <button onclick="arts('${perButton[6].category_id}')" class="btn btn btn-primary mb-2">${perButton[6].category_name}</button>

    <button onclick="allNews('${perButton[7].category_id}')" class="btn btn btn-primary mb-2">${perButton[7].category_name}</button>
    `
    // toggleSpinner(true);
    // buttonCategories.appendChild(buttonCategories);
}

// breaking news

const breaking = (id) => {
  toggleSpinner(true);
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  .then(rest => rest.json())
  .then(data => {
        //console.log(data.data)
       
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Breaking News. `

        let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;

        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });

        data.data.forEach(details => {
          console.log(details.total_view)
             //console.log(shortIn)
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
                  <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-4">
                  <div>
                  <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
                   <span class="fw-semibold">${details.author.name}</span>
                  </div>
                  <div><span class="fw-bold">View</span>  ${details.total_view}</div>
                  <div>
                  <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
                  </div>
                  </div>
              </div>
            `
            breakingNews.appendChild(makeDiv);
        })
        toggleSpinner(false);
      })
}

// regular news

const regular = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
     .then(rest => rest.json())
     .then(data => {
        //console.log(data.data)
        let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Regular News. `
        let breakingNews = document.getElementById('breakingNews');
         breakingNews.innerHTML = ``;
         data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
        data.data.forEach(details => {
            //console.log(details)
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
              <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-4">
              <div>
              <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
               <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
              </div>
              <div><span class="fw-bold">View</span>  ${details.total_view ? details.total_view : 'NO VIEW'}</div>
              <div>
              <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
              </div>
              </div>
            
          </div>
            `
            breakingNews.appendChild(makeDiv);
        })
        toggleSpinner(false);
     });
}

// international news

const international = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
      // console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category International News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
          // console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// sports news

const sports = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
      // console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Sports News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
        //   console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// entertainment news

const entertainment = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
      // console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Entertainment News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
          // console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// cultural news

const cultural =(id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
      // console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Cultural News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
          // console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// arts news

const arts = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
      // console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category Arts News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
          // console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 300 ? details.details.slice(0,300) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
           
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// all news 

const allNews = (id) => {
  toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then(rest => rest.json())
    .then(data => {
       //console.log(data.data)
       let show = document.getElementById('total');
       show.innerText = data.data.length +  ` items found for category All News. `
       let breakingNews = document.getElementById('breakingNews');
        breakingNews.innerHTML = ``;
        data.data.sort((a, b) => {
          return b.total_view - a.total_view;
        });
       data.data.forEach(details => {
          // console.log(details)
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
             <p class="card-text opacity-50">${details.details.length > 500 ? details.details.slice(0,500) + '...' : details.details}</p>
             </div>
             <div class="d-flex justify-content-between align-items-center mt-4">
             <div>
             <img style="width:50px;border-radius:100px" class="rounded-lg" src="${details.author.img}">
              <span class="fw-semibold">${details.author.name ? details.author.name : 'NO NAME'}</span>
             </div>
             <div><span class="fw-bold">View</span>  ${details.total_view  ? details.total_view : '0'}</div>
             <div>
             <button onclick="buttonDetails('${details._id}')" class="btn btn-white text-dark fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Details</button>
             </div>
             </div>
         </div>
           `
           breakingNews.appendChild(makeDiv);
       });
       toggleSpinner(false);
    })
}

// button modal here

const buttonDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then(rest => rest.json())
    .then(details => {
        //console.log(data.data)
        let modalContainer = document.getElementById('modalContainer');
        modalContainer.innerHTML = ``;
        details.data.forEach(detail => {
            console.log(detail)
            let makeDiv = document.createElement('div');
            makeDiv.classList.add('modal-content');
            makeDiv.innerHTML = `
            <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">${detail.title.slice(0,15)}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="mb-3 w-25" src="${detail.thumbnail_url}">
          <p class="opacity-75">${detail.details.slice(0,200) +  '...'}</p>
          <div class="d-flex justify-content-between">
          <span class="fw-semibold">Author : ${detail.author.name ? detail.author.name : 'NO NAME'}</span>
          <span class="fw-bold">View ${detail.total_view ? detail.total_view : 'NO VIEW'}</span> 
          <button class="btn btn-primary">More Details</button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
            `
            modalContainer.appendChild(makeDiv);
        });
        
    })
}

// loading spinner 


const toggleSpinner = (isLoading) => {
    let loader = document.getElementById('loading');
    if(isLoading === true){
        loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}


 showButton()