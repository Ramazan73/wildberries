fetch('https://banners-website.wildberries.ru/public/v1/banners?urltype=1024&apptype=1&displaytype=2&longitude=37.6201&latitude=55.753737&country=1&culture=ru')
    .then((res) => res.json())
    .then((d) => {
        document.querySelectorAll('.swiper-slide__img').forEach((el, i) => {
            return (el.src = 'https://static-basket-01.wb.ru/vol1/crm-bnrs' + d[i].Src)
        });
    });

const images = [
    { src: 'img/banner-1.png' },
    { src: 'img/banner-2.png' },
    { src: 'img/banner-3.png' },
    { src: 'img/banner-4.png' },
    { src: 'img/banner-5.png' },
    { src: 'img/banner-6.png' },
    { src: 'img/banner-7.png' },
    { src: 'img/banner-8.png' }
];

var gallery = document.querySelector(".gallery");

var ul = document.createElement("ul");
ul.className = 'gallery__list';
for (var i = 0; i < images.length; i++) {
    var image = document.createElement("img"),
        li = document.createElement("li"),
        a = document.createElement("a");
    image.src = images[i].src;
    image.alt = "Image " + (i+1);
    a.href = "#" + (i+1);

    li.className = 'gallery__list--item';
    image.className = 'gallery__list--img';
    a.className = 'gallery__list--link';

    li.appendChild(a);
    a.appendChild(image);
    ul.appendChild(li);
}

gallery.appendChild(ul);