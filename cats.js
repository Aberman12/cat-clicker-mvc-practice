var model = {
  currentCat: null,
     inputSpecs: ['name', 'url', 'clicks'],
  cats: [
 {
    clickCount:0,
    name: "Cat 1",
    imgSrc:"https://vetstreet.brightspotcdn.com/dims4/default/a1a90c7/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0d%2Ff2e4c0b3a611e092fe0050568d634f%2Ffile%2Fhub-cats-senior.jpg",
    imgAlt:"cat1"
  },
  {
    clickCount:0,
    name: "Cat 2",
    imgSrc:"http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg",
    imgAlt:"cat2"
  },
  {
    clickCount:0,
    name: "Cat 3",
    imgSrc:"https://vetstreet.brightspotcdn.com/dims4/default/f6e3702/2147483647/thumbnail/180x180/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F17%2Fa85b40b3a511e092fe0050568d634f%2Ffile%2Fhub-cats-kitten.jpg",
    imgAlt:"cat3"
  },
  {
    clickCount:0,
    name: "Cat 4",
    imgSrc:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    imgAlt:"cat4"
  },
  {
    clickCount:0,
    name: "Cat 5",
    imgSrc:"https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/165/76/87490163.jpg",
    imgAlt:"cat5"
  }]
};

var octopus = {
init: function(){
  model.currentCat = model.cats[0];
  catView.init();
},
getCatImage: function(){
  return model.currentCat;
},
getCount: function(){
  return model.currentCat.clickCount;
},
incrementCount: function(){
 model.currentCat.clickCount++;
catView.catCount.html(model.currentCat.clickCount);
},
getCats: function(){
    return model.cats;
  },
  setCurrentCat: function(cat){
    model.currentCat = cat;
    catView.renderCatImage();
  },
  getInputs: function (){
    return model.inputSpecs;
  },
  setCatName: function(name){
    model.currentCat.name = name;
    catView.renderCatImage();
  },
  setCatImage: function(url){
    model.currentCat.imgSrc = url;
    catView.renderCatImage();
  },
  setCatClicks: function(clicks){
    model.currentCat.clickCount = clicks;
    catView.renderCatImage();
  }
};

var catView = {
init: function(){

  this.button = $('#button');
  this.catVisual = $('#cat');
  this.list = $('#cat-list');
this.catCount = $('#cat-count');

  this.renderCatImage();
  this.renderList();
  this.click();
  this.admin();
},

renderList: function(){
  var elem, i, cat;
  var catz = octopus.getCats();
  this.list.innerHTML = '';
for(i = 0; i < catz.length; i++){
    cat = catz[i];
  elem = document.createElement('li');
  elem.textContent = cat.name;

  elem.addEventListener('click', (function(catCopy) {
        return function() {
      octopus.setCurrentCat(catCopy);
};
})(cat));
  this.list.append(elem);
};

},

renderCatImage: function(){
  this.figure = $('#fig');
  var currentCatPicture = octopus.getCatImage();
   this.clickCount = octopus.getCount();
   this.catCount.innerHTML = this.clickCount;

  this.catCount.html(this.clickCount);
  this.catVisual.attr("src", currentCatPicture.imgSrc);
  this.catVisual.attr("alt", currentCatPicture.imgAlt);
  this.figure.html(currentCatPicture.name);
},

click: function(){
  this.catVisual.click(function(){
    var closer = (function(){
      return function(){
        octopus.incrementCount();
      }
    }());
    closer();
  });
},

admin: function(){
  var inputSpecs = octopus.getInputs();
  var inputs, j, text, submit, cancel, done, name, url, clicks, adOn;
  adOn = $('#inputz');
  name = $('.name');
  url = $('.url');
  clicks = $('.clicks');
  submit = $('#submit');
  cancel = $('#cancel');

  this.button.click(function(){
    for(j = 0; j < inputSpecs.length; j++){
      inputs = document.createElement('input');
      spec = inputSpecs[j];
      inputs.placeholder = 'edit ' + spec;
      inputs.setAttribute('type', 'text');
      inputs.setAttribute('class',spec);
      adOn.append(inputs);
      inputs.append(text);
    }
    submit.removeAttr('hidden');
    cancel.removeAttr('hidden');
  })

  submit.click(function(){
    name = $('.name');
    clicks = $('.clicks');
    url = $('.url');
    if(name.val() !== ""){
      octopus.setCatName(name.val());
    }
    if(clicks.val() !== ""){
      octopus.setCatClicks(clicks.val());
    }
    if(url.val() !== ""){
      octopus.setCatImage(url.val());
    }
  })

  cancel.click(function(){
    name = $('.name');
    clicks = $('.clicks');
    url = $('.url');
    name.val("");
    clicks.val("");
    url.val("");
  })
}
};
octopus.init();
