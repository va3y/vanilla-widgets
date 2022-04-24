const data = [
    {
        title: 'this is h1 heading',
        children: [
            {
                title: 'this is an h2 heading',
                children: [
                    {
                        title: 'h3'
                    },
                    {
                        title: 'second h3'
                    }
                ]
            },
            {
                title: 'second h2 heading',
            }
        ]
    },
    {
        title: 'h1',
        children: []
    }
]

const rootEl = document.querySelector('#outline-view')
const createList = (currSlice, currLevel) => {
    currSlice.forEach(el => {
        const newEl = document.createElement('div')
        newEl.innerText = el.title
        newEl.classList.add(`level-${currLevel}`)
        rootEl.append(newEl)
        el.children && createList(el.children, currLevel + 1)
    })

}
createList(data, 1)
