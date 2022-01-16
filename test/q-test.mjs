import queryString from 'query-string'

const url = `https://https//dns.baschain.cn?bd=www.google.com/search?q=httpb%3A%2F%2Flanbery&oq=httpb%3A%2F%2Flanbery&aqs=chrome..69i57j69i59j69i58.8529j0j7&sourceid=chrome&ie=UTF-8`

test(url)


function test(str) {
    let u = new URL('https://www.google.com/search?q=httpb://lanbery')
    console.log('orig>>>>',u.search)
}