let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let imgs = document.querySelector('.imgs')
let spn = document.querySelector('span')
btn.addEventListener('click', ()=>{
    spn.classList.add('none')
    if (inp.value == 1) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        

        `
    } else if (inp.value == 2) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        `
    } else if (inp.value == 3) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        `
    } else if (inp.value == 4) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
                <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
                <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
                <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        `
    } else if (inp.value == 5) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
                <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
                <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
                <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
                <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        `
    } else if (inp.value == 6) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        <img src="./img/delfin-gross-jpg--16333-.jpg" alt="" class="im">
        `
    } else if (inp.value == 7) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        <img src="./img/delfin-gross-jpg--16333-.jpg" alt="" class="im">
        <img src="./img/giant-panda-bear-red-panda-telus-customer-service-bear.jpg" alt="" class="im">
        `
    } else if (inp.value == 8) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        <img src="./img/delfin-gross-jpg--16333-.jpg" alt="" class="im">
        <img src="./img/giant-panda-bear-red-panda-telus-customer-service-bear.jpg" alt="" class="im">
        <img src="./img/97-979492_happy-feet-xd-happy-feet-penguin-png.png" alt="" class="im">
        `
    } else if (inp.value == 9) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        <img src="./img/delfin-gross-jpg--16333-.jpg" alt="" class="im">
        <img src="./img/giant-panda-bear-red-panda-telus-customer-service-bear.jpg" alt="" class="im">
        <img src="./img/97-979492_happy-feet-xd-happy-feet-penguin-png.png" alt="" class="im">
        <img src="./img/1505753935_5b739475fb9a2d7b716d098de98fb67d_600x400.jpg" alt="" class="im">

        `
    } else if (inp.value == 10) {
        imgs.innerHTML = `
        <img src="./img/image.webp" alt="" class="im">
        <img src="./img/png-clipart-running-horse-white-horse-thumbnail.png" alt="" class="im">
        <img src="./img/png-transparent-polar-bear-arctic-polar-bear-3d-computer-graphics-mammal-animals.png" alt="" class="im">
        <img src="./img/Puppies-Download-Transparent-PNG-Image.png" alt="" class="im">
        <img src="./img/Puppy-PNG-Free-Image.png" alt="" class="im">
        <img src="./img/delfin-gross-jpg--16333-.jpg" alt="" class="im">
        <img src="./img/giant-panda-bear-red-panda-telus-customer-service-bear.jpg" alt="" class="im">
        <img src="./img/97-979492_happy-feet-xd-happy-feet-penguin-png.png" alt="" class="im">
        <img src="./img/1505753935_5b739475fb9a2d7b716d098de98fb67d_600x400.jpg" alt="" class="im">
        <img src="./img/1-2-cat-png-2.png" alt="" class="im">

        `
    } else if (inp.value > 10) {
        spn.innerHTML = 'we haven\'t got enough picture'
        spn.classList.remove('none')
        imgs.innerHTML = ''
    } else if (inp.value <= -0) {
        spn.innerHTML = 'A number less than 0 is not possible'
        spn.classList.remove('none')
    }

}
)
  