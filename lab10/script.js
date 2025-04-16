var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';

var imglist_Url =  'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

var img_Url =  'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';

fetch(imglist_Url, {
  method:'GET',
  // headers: {
  //   'Content-Type':'application/json'
  // },
  // body: JSON.stringify({title: 'Fetch Post Request Example'})
})
.then (response=>response.json())
.then (data=>{
  addNewImg(data.photos.photo);
});



function addNewImg(dataset){
  var gal=document.getElementById("gallery");
  dataset.forEach(function(item){
    console.log(item);
    var imgUrl = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

    var img=document.createElement("img");
    img.setAttribute("src",imgUrl);
    img.setAttribute("alt",item.title);
    gal.appendChild(img);
  });
}

// function getimg(){
//   var xhr=new XMLHttpRequest();
//   //xhr.open('GET',imglist_Url,true);
//   xhr.send();
//   xhr.onload = function(){
//     var data=JSON.parse(this.responseText);
//     addNewImg(data);
//   }
// }