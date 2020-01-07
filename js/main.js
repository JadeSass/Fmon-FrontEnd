// Material initialization
$(document).ready(function(){
    $('.sidenav').sidenav();
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel()
})

new Vue({
    el: "#app",
    data:{
        cardItems:[
            {imageUrl: "assets/icon/font-agro/010-construction-and-tools.svg", title: "Empowering Farmers"},
            {imageUrl: "assets/icon/font-agro/016-construction-and-tools.svg", title: "Utilizing Arable Farmland"},
            {imageUrl: "assets/icon/font-agro/009-agriculture.svg", title: "Strenghtening Our Food Security"},
            {imageUrl: "assets/icon/font-agro/008-farm.svg", title: "Promising Return after Harvest"},
        ],
        farmItems:[
            {videoUrl: "assets/img/banner-img.jpg", title: "Yam", location: "Ogun State", amount: "# 30,000", ratio: "10% returns in 6 months"},
            {videoUrl: "assets/img/banner-img.jpg", title: "Rice", location: "Lagos State", amount: "# 105,000", ratio: "10% returns in 6 months"},
            {videoUrl: "assets/img/banner-img.jpg", title: "Cocoa Yam", location: "Oyo State", amount: "# 80,000", ratio: "10% returns in 6 months"},
            {videoUrl: "assets/img/banner-img.jpg", title: "Beans", location: "Ondo State", amount: "# 310,000", ratio: "10% returns in 6 months"},
        ],
        moreServices:[
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "16,000+", text: "Acres Available"},
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "23,000", text: "Farm Sponsorship"},
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "24,000", text: "Farmers"},
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "1,600", text: "Chicken Reared"},
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "160", text: "Farm Followers"},
            {iconUrl: "assets/icon/font-agro/002-bee.svg", title: "1,160", text: "Successful Farmers"}
        ],
        sponsors:[
            {imgPath: "assets/img/close-up-photography-of-leaves-with-droplets-807598.jpg", name: "Adekanmi Shola", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis est suscipit placeat omnis eveniet quam! Nisi ratione illum atque saepe voluptas facere, cumque repudiandae vero ut magni deserunt, voluptatem sint odit aliquam magnam. Laudantium, dignissimos! Voluptatem cum inventore doloremque?"},
            {imgPath: "assets/img/close-up-photography-of-leaves-with-droplets-807598.jpg", name: "Kunle Adekogbe", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis est suscipit placeat omnis eveniet quam! Nisi ratione illum atque saepe voluptas facere, cumque repudiandae vero ut magni deserunt, voluptatem sint odit aliquam magnam. Laudantium, dignissimos! Voluptatem cum inventore doloremque?"},
            {imgPath: "assets/img/close-up-photography-of-leaves-with-droplets-807598.jpg", name: "Femi Adekola", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis est suscipit placeat omnis eveniet quam! Nisi ratione illum atque saepe voluptas facere, cumque repudiandae vero ut magni deserunt, voluptatem sint odit aliquam magnam. Laudantium, dignissimos! Voluptatem cum inventore doloremque?"}
        ],
        testimonials:[
            {videoPath: "assets/video/video3.mp4", testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis est suscipit placeat omnis eveniet quam! Nisi ratione illum atque saepe voluptas facere, cumque repudiandae vero ut magni deserunt, voluptatem sint odit aliquam magnam. Laudantium, dignissimos! Voluptatem cum inventore doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nobis est suscipit placeat omnis eveniet quam! Nisi ratione illum atque saepe voluptas facere, cumque repudiandae vero ut magni deserunt, voluptatem sint odit aliquam magnam. Laudantium, dignissimos! Voluptatem cum inventore doloremque?"}
        ]
    }
})