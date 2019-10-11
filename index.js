
const Fingerprint2 = require('script/fingerprintjs2');

module.exports = {
  fingerprint : (vueInstance, endpoint, slug) => {
    //Passes entire vueInstance into the function, will need to pass in the this keyword and it will destructure below
    //Pass the endpoint in the 2nd param to keep the endpoint dynamic
    //Pass the slug in the 3rd param to keep the function site agnostic
    const{ $axios, $route } = vueInstance
    Fingerprint2.get((components) => {
      const murmur = Fingerprint2.x64hash128(components.map((pair) => { return pair.value }).join(), 31)
      const headers = {'Content-Type': 'application/json'}
      // For testing: console.log('your fp: ' + murmur)
      $axios.post(`${endpoint}`, {
        fingerprint: murmur,
        slug: `${slug}/${$route.path}`,
        action: 'visited',
        created_at: new Date()
      }, {headers: headers})
      .then(response => {console.log('200: Pushed fingerprint to database successfully!', response.data)})
      .catch(e => {
        console.log(e)
      })
    })
  }
}
