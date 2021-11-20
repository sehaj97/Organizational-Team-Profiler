
function generateCard(data){
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${data.getName()}</h5>
            <h6 class="card-subtitle mb-2">${data.getRole()}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">ID: ${data.email}</li>
                <li class="list-group-item">${getFinalInfo(data)}</li>
            </ul>
        </div>
    </div>
    </div>
    `
}

function getFinalInfo(data){
    if(data.getRole() === 'Manager'){
        return `Office Number: ${data.officeNumber}`
    }
}

function generateRow(data){
    if(data.length>=1){
        var html = ``;
        var count = 0;
        for(var i = 0; i < data.length; i++){
            if(i%3===0){
                html = html + `
                <div class="row m-3 d-flex justify-content-center align-items-center">
                `
            }
            html = html + generateCard(data[i]);
            count = i+1;
            if(count%3===0 || data.length === count){
                html = html + `</div>`;
            }
        }
    }
    return html
}

module.exports = templateData => {
  
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

        <title>Team Profiler!</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-warning">
    <div class="container d-flex justify-content-center">
        <span class="h1">Teams</span>
    </div>
    </nav>
    <div>
    ${generateRow(templateData)}
    </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </body>
    </html>
    `;
  };