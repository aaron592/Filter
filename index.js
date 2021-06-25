// let arr=[34,56,6,78,24,12,90];

// let temp;

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//           temp=arr[i];
//           arr[i]=arr[j];
//           arr[j]=temp;
//         }
//     }
// }
// console.log(arr);




let users =[
    {
        name:"Aaron",
        age:23,
        city:"Aleppey",
        gender:"Male",
        zipcode:2277,
        qualification:"Masters",
        company:{
            name:"Google",
            role:"System Engineer",
            salary:12
        }
    },
    {
        name:"somesh",
        age:27,
        city:"Mumbai",
        gender:"Male",
        zipcode:28737,
        qualification:"Bachelors's",
        company:{
            name:"Facebook",
            role:"Web designer",
            salary:9
        }
    },
    {
        name:"ketaki",
        age:33,
        city:"Coimbatore",
        gender:"Female",
        zipcode:22837,
        qualification:"Masters",
        company:{
            name:"TCS",
            role:"System Administrator",
            salary:3.6
        }
    },
    {
        name:"Jithendar",
        age:29,
        city:"Mumbai",
        gender:"Male",
        zipcode:64787,
        qualification:"PHD",
        company:{
            name:"Infosys",
            role:"Web Developer",
            salary:10
        }
    },
    {
        name:"Saurabh",
        age:24,
        city:"Chennai",
        gender:"Male",
        zipcode:29887,
        qualification:"PHD",
        company:{
            name:"Letsupgrade",
            role:"Trainer",
            salary:15
        }
    },
    {
        name:"Sireesha",
        age:30,
        city:"Mumbai",
        gender:"Female",
        zipcode:7698,
        qualification:"Bachelor's",
        company:{
            name:"Tata",
            role:"System Engineer",
            salary:13
        }
    },
    {
        name:"Manu",
        age:27,
        city:"Kollam",
        gender:"Male",
        zipcode:3887,
        qualification:"12th",
        company:{
            name:"TVS",
            role:"Mechanic",
            salary:3.8
        }
    },
    {
        name:"Sathish",
        age:29,
        city:"Coimbatore",
        gender:"Male",
        zipcode:7987,
        qualification:"Masters",
        company:{
            name:"Nethuts Solutions",
            role:"Web Designer",
            salary:2.4
        }
    },
    {
        name:"Mukesh",
        age:35,
        city:"Madurai",
        gender:"Male",
        zipcode:9669,
        qualification:"Degree",
        company:{
            name:"Accenture",
            role:"Web Management",
            salary:5.7
        }
    },
    {
        name:"Sreenath",
        age:26,
        city:"Malapuram",
        gender:"Male",
        zipcode:9087,
        qualification:"Bachelor's",
        company:{
            name:"SBI",
            role:"System Security",
            salary:7.3
        }
    },
    {
        name:"Praveesh",
        age:28,
        city:"Palakkad",
        gender:"Male",
        zipcode:8877,
        qualification:"Masters",
        company:{
            name:"IBM",
            role:"Frontend Developer",
            salary:9
        }
    },
    {
        name:"Sarun",
        age:33,
        city:"Aleppey",
        gender:"Male",
        zipcode:1213,
        qualification:"PHD",
        company:{
            name:"Twitter",
            role:"Web Maintenance",
            salary:10
        }
    }
]

let usersDisplay = users;

function renderData(data){
    let row="";
    for(let i=0;i<data.length;i++){
        row+= `<tr>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].city}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].qualification}</td>
        <td>${data[i].company.name}</td>
        <td>${data[i].company.role}</td>
        <td>${data[i].company.salary}</td>
        </tr>`
    }

    document.getElementById('data').innerHTML=row;
}
renderData(usersDisplay);

let filters = {
    nameFilter: {
        status: false,
        value:""
    },
    cityFilter:{
        status: false,
        value:""
    },
    genderFilter:{
        status: false,
        value:""
    },
    qualificationFilter:{
        status: false,
        value:""
    },
    ageFilter:{
        status: false,
        value:""
    },
    roleFilter:{
        status: false,
        value:""
    },
    salaryFilter:{
        status: false,
        value:""
    }
}

function search(searchValue,property,data){
    
   let results=[];
   for(let i=0;i<data.length;i++){
       if(data[i][property].toLowerCase().indexOf(searchValue.toLowerCase())===0){
           results.push(data[i]);
       }
       
   }

   return results;
  
}

function companyFilter(searchValue,property,data){
    let results=[];
    for(let i=0;i<data.length;i++){
        if(data[i].company[property].toLowerCase().indexOf(searchValue.toLowerCase())===0){
            results.push(data[i]);
        }
    }
    return results;
}

function sortData(data,way){
    data.sort(function(a,b){
        if(way==="asc"){
            return a.age - b.age;
        }else if(way==="desc"){
            return b.age - a.age;
        }

    })
    return data;
   
}

function sortSalary(data, way){
    data.sort(function(a,b){
        if(way==="asc"){
            return a.company['salary'] - b.company['salary'];
        }else if(way==="desc"){
            return b.company['salary'] - a.company['salary'];
        }
    })
    return data;
}

function filter(searchValue, filterProperty){
    let usersDisplay = Object.create(users);

    if(searchValue!==""){
        filters[filterProperty].status=true;
        filters[filterProperty].value=searchValue;
        }
        else{
        filters[filterProperty].status=false;
        filters[filterProperty].value="";
    }


    if(filters.nameFilter.status===true){
        usersDisplay = search(filters.nameFilter.value,'name',usersDisplay);
    }

    if(filters.cityFilter.status===true){
        usersDisplay = search(filters.cityFilter.value,'city',usersDisplay);
    }

    if(filters.genderFilter.status===true){
        usersDisplay = search(filters.genderFilter.value,'gender',usersDisplay);
    }
    if(filters.qualificationFilter.status===true){
        usersDisplay = search(filters.qualificationFilter.value,'qualification',usersDisplay);
    }
    if(filters.roleFilter.status===true){
        usersDisplay = companyFilter(filters.roleFilter.value,'role',usersDisplay);
    }
    if(filters.ageFilter.status===true){
        usersDisplay = sortData(usersDisplay,filters.ageFilter.value);
    }
    if(filters.salaryFilter.status===true){
        usersDisplay = sortSalary(usersDisplay,filters.salaryFilter.value);
    }

    renderData(usersDisplay);
}

function clearFilter(){
    renderData(users);

    document.getElementById('name').value="";
    document.getElementById('city').value="";
    document.getElementById('gender').value="";
    document.getElementById('qualification').value="";
    document.getElementById('role').value="";

    filters = {
        nameFilter: {
            status: false,
            value:""
        },
        cityFilter:{
            status: false,
            value:""
        },
        genderFilter:{
            status: false,
            value:""
        },
        qualificationFilter:{
            status: false,
            value:""
        },
        ageFilter:{
            status: false,
            value:""
        },
        roleFilter:{
            status: false,
            value:""
        },
        roleFilter:{
            status: false,
            value:""
        }
        
    }
}





