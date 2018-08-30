

window.onload = function()
{
    menu();
  
}

function menu()
{
    let elements = document.getElementById("nav").children[0].children;

    for(let i = 0; i< elements.length;i++)
    {
        let cur = elements[i];
        let pathname = window.location.pathname;
        let curhref = cur.children[0].getAttribute("href");
        pathname = (pathname == "/" ? "/index.html" : pathname);
        if(curhref == pathname)
        {
            cur.style.pointerEvents = "none";
            cur.classList.add("selected");
        }
    }
}


let app = new Vue({
    el: "#content",
    data: {
        
        posts: [],
        db: undefined,
        age: Math.floor(Math.abs((new Date(1999, 0, 20, 0, 0, 0, 0) -new Date())/(360*24*60*60*1000)))
    },
    created: async function() 
    {
        console.log(this.posts);
        firebase.initializeApp({
            apiKey: 'AIzaSyANzIcmpBHiUcm_D7LJxHoECOFfa0W-u2w',
            authDomain: 'githubpages-7a535.firebaseapp.com',
            projectId: 'githubpages-7a535',
           
          });
          let tmp = [];
          this.db = firebase.firestore();
          this.db.settings({ timestampsInSnapshots: true, });
          let snap = await this.db.collection("post").get();
          console.log(snap);

          snap.forEach(function (e) {
              let obj = e.data();
              obj.id = e.id;
              tmp.push(obj);
          })
         
        
   
        this.posts = tmp;
    }
})