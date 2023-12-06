
// Signup/index section

function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let mobilenumber = document.getElementById("mobilenumber").value;
    let age = document.getElementById("age").value;


    let nameerror = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailerror = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passworderror = /^(?=.*[a-zA-Z0-9]).{8,}$/;
    let addresserror = /^[A-Za-z0-9\s,.#-?]+$/;
    let mobilenumbererror = /^\d{10,15}$/;
    let ageerror = /^[0-9]+$/;


    if (nameerror.test(name)) {
        document.getElementById("nameerror").innerHTML = "";
    }
    else {
        document.getElementById("nameerror").innerHTML = "**invalid name**";
        return false;
    }
    if (emailerror.test(email)) {
        document.getElementById("emailerror").innerHTML = "";
    }
    else {
        document.getElementById("emailerror").innerHTML = "**invalid email**";
        return false;
    }
    if (passworderror.test(password)) {
        document.getElementById("passworderror").innerHTML = "";
    }
    else {
        document.getElementById("passworderror").innerHTML = "**invalid password**";
        return false;
    }
    if (addresserror.test(address)) {
        document.getElementById("addresserror").innerHTML = "";
    }
    else {
        document.getElementById("addresserror").innerHTML = "**invalid address**";
        return false;
    }
    if (mobilenumbererror.test(mobilenumber)) {
        document.getElementById("mobilenumbererror").innerHTML = "";
    }
    else {
        document.getElementById("mobilenumbererror").innerHTML = "**invalid mobile number**";
        return false;
    }
    if (ageerror.test(age)) {
        document.getElementById("ageerror").innerHTML = "";
    }
    else {
        document.getElementById("ageerror").innerHTML = "**invalid age**";
        return false;
    }


    localStorage.setItem("name1", name);
    localStorage.setItem("email1", email);
    localStorage.setItem("password1", password);
    localStorage.setItem("address1", address);
    localStorage.setItem("mobilenumber1", mobilenumber);
    localStorage.setItem("age1", age);


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("address").value = "";
    document.getElementById("mobilenumber").value = "";
    document.getElementById("age").value = "";

    window.location.href = "login.html";
}


// Login section

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    let emailerror = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passworderror = /^(?=.*[a-zA-Z0-9]).{8,}$/;


    if (emailerror.test(email)) {
        document.getElementById("emailerror").innerHTML = "";
    }
    else {
        document.getElementById("emailerror").innerHTML = "**invalid email**";
        return false;
    }
    if (passworderror.test(password)) {
        document.getElementById("passworderror").innerHTML = "";
    }
    else {
        document.getElementById("passworderror").innerHTML = "**invalid password**";
        return false;
    }


    let email1 = localStorage.getItem("email1");
    let password1 = localStorage.getItem("password1");


    if (email == email1 && password == password1) {
        window.location.href = "index.html";
    }
    else {
        alert("Incorrect Email & Password");
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}


// Home/logout section

function logout() {
    localStorage.removeItem("name1");
    localStorage.removeItem("email1");
    localStorage.removeItem("password1");
    localStorage.removeItem("address1");
    localStorage.removeItem("mobilenumber1");
    localStorage.removeItem("age1");
    window.location.href = "login.html";
}

// Home/Contact us section

function validation() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let a = document.getElementById("address").value;
    let p = document.getElementById("phone").value;
    let m = document.getElementById("message").value;


    let nameerror = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailerror = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let addresserror = /^[A-Za-z0-9\s,.#-?]+$/;
    let phoneerror = /^\d{10,15}$/;
    let messageerror = /^[A-Za-z0-9\s,.#-?]+$/;


    if (nameerror.test(n)) {
        document.getElementById("nameerror").innerHTML = "";
    }
    else {
        document.getElementById("nameerror").innerHTML = "**invalid Full Name**";
        return false;
    }
    if (emailerror.test(e)) {
        document.getElementById("emailerror").innerHTML = "";
    }
    else {
        document.getElementById("emailerror").innerHTML = "**invalid Email**";
        return false;
    }
    if (addresserror.test(a)) {
        document.getElementById("addresserror").innerHTML = "";
    }
    else {
        document.getElementById("addresserror").innerHTML = "**invalid Address**";
        return false;
    }
    if (phoneerror.test(p)) {
        document.getElementById("phoneerror").innerHTML = "";
    }
    else {
        document.getElementById("phoneerror").innerHTML = "**invalid Number**";
        return false;
    }
    if (messageerror.test(m)) {
        document.getElementById("messageerror").innerHTML = "";
    }
    else {
        document.getElementById("messageerror").innerHTML = "**invalid Message**";
        return false;
    }
}

// Add to cart product section

let items = [
    {
        proname: "Acorn Cottage",
        proimage: "Images/Product.jpeg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 1200
    }
    ,
    {
        proname: "Meadow View",
        proimage: "Images/Product (1).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 1500
    }
    ,
    {
        proname: "Chestnut House",
        proimage: "Images/Product (2).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 2000
    }
    , {
        proname: "Adventure House",
        proimage: "Images/Product (3).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 3500
    }
    ,
    {
        proname: "Palace",
        proimage: "Images/Product (4).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 4200
    }
    ,
    {
        proname: "Crows Nest",
        proimage: "Images/Product (5).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 2350
    }
    ,
    {
        proname: "Ivy Cottage",
        proimage: "Images/Product (6).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 2880
    }
    ,
    {
        proname: "Beachside Manor",
        proimage: "Images/Product (7).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 3232
    }
    ,
    {
        proname: "Dream Cottage",
        proimage: "Images/Product (8).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 4210
    }
    ,
    {
        proname: "Barefoot house",
        proimage: "Images/Product (9).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 3650
    }
    ,
    {
        proname: "Driftwood Villa",
        proimage: "Images/Product (10).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 2980
    }
    ,
    {
        proname: "Grey Chimney",
        proimage: "Images/Product (11).jpg",
        prodetail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, rem tempore odio autem iusto quibusdam.",
        proprice: 4320
    }

]

function additems() {
    let content = "";
    for (var i = 0; i < items.length; i++) {
        content += `
   <div class="card" style="width: 22rem;">
   <div class="proimg-container"><img src="${items[i].proimage}" class="card-img-top" alt=""></div>
  
  <div class="card-body">
    <h5 class="card-title">${items[i].proname}</h5>
    <p class="card-text">${items[i].prodetail}</p>
    <p class="card-text"><i class="bi bi-currency-dollar"></i>${items[i].proprice}</p>
    <a class="btn" onclick="addtocart(${i})">Add to cart</a>
  </div>
</div>
        
        `
    }
    document.querySelector(".productcard").innerHTML = content;
}
additems();

let addtocartitems = [];

function updatecartdisplay() {
    const cartcontainer = document.querySelector(".additem");
    const cartcountelement = document.querySelector(".cartcount");
    const totalcontainer = document.querySelector(".totalcontainer");
    document.querySelector(".totalcontainer").style.display = "";

    cartcontainer.innerHTML = '';

    let total = 0;

    addtocartitems.forEach(function (item, index) {
        total += item.proprice;
        cartcontainer.innerHTML += `
    
        <div class="card-item">
      <img src="${item.proimage}" class="card-img-top" alt="">
      <div class="card-item-info">
        <h5 class="card-title">${item.proname}</h5>
        <p class="card-text">${item.prodetail}</p>
        <p class="card-text"><i class="bi bi-currency-dollar"></i>${item.proprice}</p>
        <p class="card-text divider-line"></p>
      </div>
      <button class="btn btn-warning remove-btn" onclick="removefromcart(${index})"> Remove</button>
    
    </div>
        
        `
    });

    cartcountelement.textContent = addtocartitems.length;
    totalcontainer.textContent = total;

}

function addtocart(index) {
    addtocartitems.push(items[index]);
    updatecartdisplay();
}

function removefromcart(index) {
    addtocartitems.splice(index, 1);
    updatecartdisplay();
}

function carttog() {
    const cartdetails = document.querySelector('.cartdetailes');
    if (cartdetails.style.display === "none" || cartdetails.style.display == " ") {
        cartdetails.style.display = "block";

    }

    else {
        cartdetails.style.display = "none";
    }
}



