function getDependencies(mod, result) {
  result = result || [];
  var dependencies = mod.dependencies || [];
  
  for(dep in dependencies) {
    var key = dep + '@' + mod.dependencies[dep].version;
    
    if (result.indexOf(key) === -1)
      result.push(key);
      
    getDependencies(mod.dependencies[dep], result);
  }
  
  return result.sort()
}

module.exports = getDependencies