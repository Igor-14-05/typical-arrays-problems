
exports.min = function min (array) {
  var c = 1000000;
  var b = 0;
  if (array==undefined) 
  {
    return 0;
  }
  else if (array==[]) 
  {
    return b;
  }
  else
  {
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i] < c) c=array[i];
    }
    if (c == 1000000) return 0;
    return c;
  }
}

exports.max = function max (array) {
  var c = -1000000;
  var b = 0;
  if (array===undefined) 
  {
    return b;
  }
  else if (array===NaN) 
  {
    return b;
  }
  else
  {
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i] > c) c=array[i];
    }
    if (c == -1000000) return 0;
    return c;
  }
}

exports.avg = function avg (array) {
  var c = 0;
  var b = 0;
  if (array === undefined)
  {
    return 0;
  }
  else if (array==[]) return 0;
  else
  {
    for (var i = 0; i < array.length; i++) 
    {
        c = c + array[i];
    }
    var l = c/array.length; 
    if (isNaN(l)) return 0;
    return l;
  }
}