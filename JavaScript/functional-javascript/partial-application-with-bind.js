function log(namespace) {
  return console.log.bind(console, namespace)
}

module.exports = log;
