const object_to_observe = document.querySelector('#object_to_observe')
const title = document.querySelector('#title')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5,
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            title.innerHTML = 'Is Observed...!!'
            //observer.unobserve(entry.target) // Stop observer or to use once
        } else {
            title.innerHTML = 'Not Observed'
        }
    })
}

const observer = new IntersectionObserver(callback, options)
observer.observe(object_to_observe)