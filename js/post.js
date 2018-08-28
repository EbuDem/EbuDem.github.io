let app = new Vue({
    el: "#content",
    data: {
        
        post: {},
        db: undefined,
    },
    methods: {},
    created: async function() 
    {
        let id = getParameterByName("id");
        let tmp = {};
        firebase.initializeApp({
            apiKey: 'AIzaSyANzIcmpBHiUcm_D7LJxHoECOFfa0W-u2w',
            authDomain: 'githubpages-7a535.firebaseapp.com',
            projectId: 'githubpages-7a535',
           
          });
     
          this.db = firebase.firestore();
          this.db.settings({ timestampsInSnapshots: true, })
          let snap = await this.db.collection("post").doc(id).get();
          this.post = snap.data();

          document.getElementById("title").innerHTML = this.post.title + " - Ebu's Blog";
    }
})


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}