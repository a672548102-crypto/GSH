// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(157, 78, 221, 0.2)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// 观察动画（元素进入视口时触发）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 给所有卡片添加初始样式和观察
document.querySelectorAll('.work-card, .step, .service-card, .tag-item, .contact-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// 视频播放功能
document.querySelectorAll('.work-cover').forEach(cover => {
    cover.addEventListener('click', function() {
        const workCard = this.closest('.work-card');
        const workTitle = workCard.querySelector('.work-info h3').textContent;
        
        console.log('播放视频: ' + workTitle);
        alert('视频播放：' + workTitle);
    });
});

// 页面加载完成动画
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
    animateCounters();
});

// 数字计数动画
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    const speed = 200;
    
    stats.forEach(stat => {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    const text = entry.target.textContent;
                    
                    if (text.match(/^\d+/)) {
                        const finalNumber = parseInt(text);
                        let currentNumber = 0;
                        const increment = Math.ceil(finalNumber / (speed / 16));
                        
                        const counter = setInterval(() => {
                            currentNumber += increment;
                            if (currentNumber >= finalNumber) {
                                entry.target.textContent = text;
                                clearInterval(counter);
                            } else {
                                entry.target.textContent = currentNumber + '+';
                            }
                        }, 16);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// 键盘导航
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp') {
        window.scrollBy(0, -100);
    }
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    }
});

// 性能优化：懒加载图片
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// 页面隐藏/显示事件
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.style.opacity = '0.8';
    } else {
        document.body.style.opacity = '1';
    }
});

// 导出功能
window.exportData = function() {
    const portfolioData = {
        name: 'Gao Shuaihang',
        title: '短视频运营 | 视频剪辑 | 内容策划',
        updated: new Date().toISOString()
    };
    console.log('Portfolio Data:', portfolioData);
};
tsParticles.load(
"particles-js",
{

particles:{

number:{
value:80
},

color:{
value:"#9d4edd"
},

links:{
enable:true,
distance:150,
color:"#9d4edd",
opacity:0.3,
width:1
},

move:{
enable:true,
speed:1.2
},

size:{
value:{
min:1,
max:3
}
}

},


interactivity:{

events:{

onHover:{
enable:true,
mode:"grab"
},

onClick:{
enable:true,
mode:"push"
}

},

modes:{

grab:{
distance:200
},

push:{
quantity:4
}

}

}

});

console.log('Portfolio Website v1.0 - 用内容创造增长');
// =======================
// 音乐播放器
// =======================


const bgMusic =
document.getElementById("bgMusic");


const musicControl =
document.getElementById("musicControl");


const musicClose =
document.getElementById("musicClose");


const musicWidget =
document.getElementById("musicWidget");



bgMusic.volume = 0.35;



// 页面打开尝试播放

window.addEventListener(
"load",
()=>{


bgMusic.play()
.catch(()=>{

console.log(
"浏览器阻止自动播放"
);


});


});



musicControl.onclick=(e)=>{


if(moved){

return;

}


if(bgMusic.paused){

bgMusic.play();

musicControl.classList.add(
"playing"
);


}else{

bgMusic.pause();

musicControl.classList.remove(
"playing"
);


}

};
// 关闭按钮


musicClose.onclick=()=>{


bgMusic.pause();


musicWidget.style.display="none";


};
// =======================
// 视频播放控制音乐
// =======================


const videos =
document.querySelectorAll("video");



videos.forEach(video=>{


video.addEventListener(
"play",
()=>{


bgMusic.pause();


musicControl.classList.add(
"pause"
);


});




video.addEventListener(
"pause",
()=>{


bgMusic.play();


musicControl.classList.remove(
"pause"
);


});


});
// ==========================
// 音乐悬浮球拖动吸边
// ==========================


const widget =
document.getElementById("musicWidget");


let isDragging = false;
let moved=false;

let startX = 0;

let startY = 0;


let startLeft = 0;

let startTop = 0;



// 鼠标按下

widget.addEventListener(
"mousedown",
(e)=>{


isDragging=true;


widget.style.transition="none";



startX=e.clientX;

startY=e.clientY;


startLeft=widget.offsetLeft;

startTop=widget.offsetTop;


});




// 手机触摸

widget.addEventListener(
"touchstart",
(e)=>{


isDragging=true;


widget.style.transition="none";


const touch=e.touches[0];


startX=touch.clientX;

startY=touch.clientY;


startLeft=widget.offsetLeft;

startTop=widget.offsetTop;


});





// 移动


document.addEventListener(
"mousemove",
(e)=>{


if(!isDragging)
return;
moved=true;


moveWidget(
e.clientX,
e.clientY
);


});





document.addEventListener(
"touchmove",
(e)=>{


if(!isDragging)
return;



const touch=e.touches[0];


moveWidget(
touch.clientX,
touch.clientY
);


});






function moveWidget(x,y){


let moveX =
x-startX;


let moveY =
y-startY;



widget.style.left =
startLeft+moveX+"px";


widget.style.top =
startTop+moveY+"px";



widget.style.right="auto";


}







// 松手吸附


document.addEventListener(
"mouseup",
()=>{


if(!isDragging)
return;


isDragging=false;


snapToEdge();


});



document.addEventListener(
"touchend",
()=>{


if(!isDragging)
return;


isDragging=false;


snapToEdge();


});







function snapToEdge(){


widget.style.transition=
"all .3s ease";



let center =
window.innerWidth/2;



let widgetCenter =
widget.offsetLeft+
widget.offsetWidth/2;




// 靠左

if(widgetCenter<center){


widget.style.left="20px";


widget.style.right="auto";


}


// 靠右

else{


widget.style.left="auto";


widget.style.right="20px";


}



}
