window.addEventListener('storage', function(e) {  
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = e.storageArea;

  console.log("js");
});


//------------------------------------------------------------------------------------------
//a way for other pages on the domain using the storage to sync any changes that are made.
//          NOTE: Pages on other domains can't access the same storage objects.
//the key of the data that changed
//the old value before the change, 
//the new value after that change, 
//the URL of the document that changed the storage, 
//the storage object itself.