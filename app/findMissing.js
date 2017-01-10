module.exports = {
  findMissing: function(arr1, arr2){
    var missing;
    if(arr1 == 0 || arr2 == 0){
      return 0
    }
    if(arr1.length === 1 || arr2.length === 1){
      return 0
    }
    
    arr1.sort()
    arr2.sort()
    console.log(arr1, arr2)
    
    if(arr1.length > arr2.length){
      for(var i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
          
        }
        else if(arr1[i !== arr2]){
          missing = arr1[i]
        }
      }
    }
    else if(arr2.length > arr1.length){
      for(var j = 0; j < arr2.length; j++){
        if(arr2[j] === arr1[j]){
          
        }
        else if(arr2[j] !== arr1[j]){
          return arr2[j]
        }
      }
    }
    
    return missing
  }
}