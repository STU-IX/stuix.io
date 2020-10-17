let memberList = [
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    },
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    },
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    },
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    },
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    },
    {
        name: '內卷昴',
        img: 'https://i.imgur.com/RaW0Vu4.png',
        url: '#'
    }
]
$(function () {
    for (let { name, img, url } of memberList) {
        $(`#members-container`).append(
            $(`<a class="member" href="${url}">
                <div class="image">
                    <img src="${img}"/>
                </div>
                <div class="name">${name}</div>
            </a>`)
        )
    }
})