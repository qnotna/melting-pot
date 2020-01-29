const user = 'admin'
const password = 'admin'

module.exports = {
  mongoURI: `mongodb+srv://${user}:${password}@meltingcluster-wgwi5.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: "secret"
}