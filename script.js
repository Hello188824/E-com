
    document.getElementById("orderForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Order placed successfully");
    });
    <script type="module">
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCH6Pu0IiOlkxsdusJ7FXDnzGryuqu7So0",
      authDomain: "ecom-d5c30.firebaseapp.com",
      projectId: "ecom-d5c30",
      storageBucket: "ecom-d5c30.firebasestorage.app",
      messagingSenderId: "560710010757",
      appId: "1:560710010757:web:75bd8fe5723f3cccf526ec"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db=getDatabase(app);
    document.getElementById("submit").addEventListener('click',function(e){
      e.preventDefault();
      set(ref(db,'user/'+document.getElementById("first").value),{
        first:document.getElementById("first").value,
        last:document.getElementById("last").value,
        email:document.getElementById("email").value,
        Phone:document.getElementById("Phone").value,
        Street:document.getElementById("Street").value,
        House:document.getElementById("House").value,
        City:document.getElementById("City").value,
        State:document.getElementById("State").value,
        Zip:document.getElementById("Zip").value,
        Country:document.getElementById("Country").value,





      });
      alert("order placed successfull");

    })

    
  </script>
