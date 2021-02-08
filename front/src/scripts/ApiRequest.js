export default (url) =>
    fetch(url)
        .then(res => res.status === 200 ? res.json() : res.text())
        .then(res => res.status === 'OK' ? JSON.parse(res.data) : null)
        .catch(e => { throw e })