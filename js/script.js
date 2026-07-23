const cases = [

{
id:"01",

title:"爆款短视频案例01",

type:"剧情短视频",

role:"策划 + 剪辑 + 运营",

views:"280万",

likes:"12万",

cover:"images/cover01.jpg",

link:"case01.html"

},


{
id:"02",

title:"爆款短视频案例02",

type:"品牌宣传",

role:"策划 + 剪辑 + 运营",

views:"150万",

likes:"8万",

cover:"images/cover02.jpg",

link:"case02.html"

},


{
id:"03",

title:"爆款短视频案例03",

type:"探店视频",

role:"策划 + 剪辑 + 运营",

views:"90万",

likes:"5万",

cover:"images/cover03.jpg",

link:"case03.html"

}

];
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
