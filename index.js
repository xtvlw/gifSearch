const key = "<your tenor key goes here>"

let url = `https://g.tenor.com/v1/search?key=${key}`



function search(limit=50) {
    let search = document.getElementById('search-arg').value
    if (search == '') {
        alert('insert data')
        return 0
    }
    url += `&limit=${limit}&q=${search}`
    let sectionElem = document.getElementsByTagName('section')[0]
    sectionElem.innerHTML = ''
    let numCtl = 0
    let gifLim = 10
    
    for (let clNum=0 ; clNum<=6 ; clNum++){
        let gifsDiv = document.createElement('div')
        gifsDiv.setAttribute('class', 'colum')
        sectionElem.appendChild(gifsDiv)
    } 
    let columLen = document.getElementsByClassName('colum').length

    fetch(url)
        .then(res => res.json())
        .then(bruteData => {
            for (let clNum=0 ; clNum<=columLen ; clNum++){
                for (let i=numCtl ; i<gifLim ; i++) {
                    let gifsDiv = document.getElementsByClassName('colum')[clNum]
                    let gifData = bruteData['results'][i]['media'][0]['gif']['url']
                    let newGifDiv = document.createElement('div')
                    newGifDiv.setAttribute('class', 'gifData')
                    let newGifData = document.createElement('img')
                    newGifData.setAttribute('src', gifData)
                    newGifDiv.appendChild(newGifData)
                    gifsDiv.appendChild(newGifDiv)
                }
                numCtl += 10
                gifLim += 10
            }
        })
}