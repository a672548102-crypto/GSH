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

// ======================
// 自动生成作品集
// ======================


const container =
document.getElementById("caseContainer");


if(container){


cases.forEach(item=>{


container.innerHTML += `


<div class="case-card">


<div class="case-cover">


<img src="${item.cover}">


<div class="case-mask">

查看案例

</div>


</div>



<div class="case-info">


<h3>

${item.title}

</h3>


<p>

类型：

${item.type}

</p>


<p>

负责：

${item.role}

</p>



<div class="case-data">


<span>

▶ ${item.views}

</span>


<span>

❤ ${item.likes}

</span>


</div>



<a href="${item.link}">

查看详细数据 →

</a>


</div>


</div>


`;


});


}
