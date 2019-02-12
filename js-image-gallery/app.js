function imageGallery() {
    const highlight = document.querySelector('.gallery-highlight')
    const previews = document.querySelectorAll('.room-preview img')

    previews.forEach(preview => {
        preview.addEventListener('click', previewClick)
    })

    function previewClick() {
        //Source link to small image
        const smallSrc = this.src
        //Source link to large image
        if (smallSrc.includes('png')) {
            console.log('has png')
            smallSrc.replace('png', 'jpg')
            console.log(smallSrc)
        }
        else if (smallSrc.includes('jpg')) {
            smallSrc.replace('jpg', 'png')
        }

        const bigSrc = smallSrc.replace('small', 'large')

        highlight.src = bigSrc
        previews.forEach(preview => preview.classList.remove('room-active'))
        previw.classList.add('room-active')
    }
} 

imageGallery()