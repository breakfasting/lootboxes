$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// Click "Congratulations!" to play animation

    $(function () {
        var numberOfStars = 20;

        for (var i = 0; i < numberOfStars; i++) {
            $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
        }

        animateText();

        animateBlobs();
    });

    $('.conbtn').click(function () {

        reset();
        //random message by me
        var messages = new Array("您獲得了搶手的稀有物品！<br>將大大地提昇您的遊戲體驗！",
            "您獲得了最基本的獎勵，<br>或許下一次的獎品會更好?",
            "您獲得了一些物品，<br>或許運氣還不錯可以再接再厲?",
            "您獲得了最熱門的稀有獎勵！<br>運氣正旺，乘勝追擊！",
            "您獲得了一些物品，<br>但似乎離大獎又更近了些！",
            "您獲得了一些物品，<br>稀有的獎勵快來呀…",
            "您獲得了最基本的獎勵，<br>不會比這更慘了，再來！",
            "您獲得了最基本的獎勵，<br>如果再抽不到大獎我就不玩了…",
            "您獲得了一些物品，<br>再一次！再一次！再一次！",
            "您獲得了最基本的獎勵，<br>再一次！再一次！再一次！");
        var randno = Math.floor(Math.random() * (messages.length));

        $('.pop').remove();
        $('.congrats').append("<h1 class='pop'>" + messages[randno] + "</h1>");
        //console.log(randno);



        animateText();

        animateBlobs();


    });

    function reset() {
        $.each($('.blob'), function (i) {
            TweenMax.set($(this), {
                x: 0,
                y: 0,
                opacity: 1
            });
        });

        TweenMax.set($('.pop'), {
            scale: 1,
            opacity: 1,
            rotation: 0
        });
    }

    function animateText() {
        TweenMax.from($('.pop'), 0.8, {
            scale: 0.4,
            opacity: 0,
            rotation: 0,
            ease: Back.easeOut.config(4),
        });
    }

    function animateBlobs() {

        var xSeed = _.random(350, 380);
        var ySeed = _.random(120, 170);

        $.each($('.blob'), function (i) {
            var $blob = $(this);
            var speed = _.random(1, 5);
            var rotation = _.random(5, 100);
            var scale = _.random(0.8, 1.5);
            var x = _.random(-xSeed, xSeed);
            var y = _.random(-ySeed, ySeed);

            TweenMax.to($blob, speed, {
                x: x,
                y: y,
                ease: Power1.easeOut,
                opacity: 0,
                rotation: rotation,
                scale: scale,
                onStartParams: [$blob],
                onStart: function ($element) {
                    $element.css('display', 'block');
                },
                onCompleteParams: [$blob],
                onComplete: function ($element) {
                    $element.css('display', 'none');
                }
            });
        });
    }

$(document).ready(function(){
  sizeTheVideo();
  $(window).resize(function(){
    sizeTheVideo();
  });  
});

function sizeTheVideo(){
  // - 1.78 is the aspect ratio of the video
// - This will work if your video is 1920 x 1080
// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
  var aspectRatio = 1.78;
  
    var video = $('#videoWithJs iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
		var halfNewWidth = newWidth/2;
    
  //Define the new width and centrally align the iframe
  video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
}