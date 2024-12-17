

const accordionItems = document.querySelectorAll('.value--accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value--accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value--accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

const div = document.querySelector('.expand-button1');
const collapsible1 = document.querySelector('.collapsible1');

div.addEventListener('click', () => {
    collapsible1.classList.toggle('expanded');
});
const div1 = document.querySelector('.expand-button2');
const collapsible2 = document.querySelector('.collapsible2');

div1.addEventListener('click', () => {
    collapsible2.classList.toggle('expanded');
});

const div2 = document.querySelector('.expand-button');
const collapsible = document.querySelector('.collapsible');

div2.addEventListener('click', () => {
    collapsible.classList.toggle('expanded');
});






// Other event listeners ...
        
        // const videoContainer = document.querySelector('.video-container');
        // const videos = document.querySelector('.videos');
        
        // let isDragging = false;
        // let startX, scrollLeft;
        
        // videoContainer.addEventListener('mousedown', (e) => {
        //     isDragging = true;
        //     videoContainer.classList.add('dragging');
        //     videos.classList.add('dragging');
        //     startX = e.pageX - videoContainer.offsetLeft;
        //     scrollLeft = videoContainer.scrollLeft;
        // });
        
        // videoContainer.addEventListener('mouseleave', () => {
        //     isDragging = false;
        //     videos.classList.remove('dragging');
        // });
        
        // videoContainer.addEventListener('mouseup', () => {
        //     isDragging = false;
        //     videos.classList.remove('dragging');
        // });
        
        // videoContainer.addEventListener('mousemove', (e) => {
        //     if (!isDragging) return;
        //     e.preventDefault();
        //     const x = e.pageX - videoContainer.offsetLeft;
        //     const walk = (x - startX) * 2;
        //     videoContainer.scrollLeft = scrollLeft - walk;
        // });


