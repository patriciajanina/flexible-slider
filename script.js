const wrapper = document.querySelector('.wrapper');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');

function Slider(images) {
    this.counter = 0;
    this.images = images;
}

Slider.prototype.addToCounter = function () {
    this.counter++;
    if (this.counter >= this.images.length) {
        this.counter = 0;
    }
};
Slider.prototype.subtractFromCounter = function () {
    this.counter--;
    if (this.counter <= 1) {
        this.counter = this.images.length - 1;
    }
};
tab = [
    'img/img0.jpg',
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg'
];
Slider.prototype.sliding = function () {
    wrapper.innerHTML = '<img class="images fade-in" src=' + this.images[this.counter] + '>';
};

var slider = new Slider(tab);
slider.sliding();
add.addEventListener('click', function () {
    slider.addToCounter();
    slider.sliding();
});
subtract.addEventListener('click', function () {
    slider.subtractFromCounter();
    slider.sliding();
});