$(document).ready(function(){
    $(window).scroll(function(){
        // スクロール時に固定ナビゲーションバーのスクリプト
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // スクロールアップボタンの表示/非表示スクリプト
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // スライドアップスクリプト
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // スライドアップボタンをクリックしたときにスムーズスクロールを無効にする
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // メニューアイテムをクリックしたときにスムーズスクロールを再適用する
        $('html').css("scrollBehavior", "smooth");
    });

    // メニュー/ナビゲーションバースクリプトの切り替え
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // タイピングテキストアニメーションスクリプト
    var typed = new Typed(".typing", {
        strings: ["AI開発者","データ科学者","技術革新者","フルスタック開発者","システム開発者","ウェブサイト開発者"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["AIエンジニア", "機械学習エンジニア", "AI開発者", "データサイエンティスト", "AI研究者", "技術革新者"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // オウルカルーセルスクリプト
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
