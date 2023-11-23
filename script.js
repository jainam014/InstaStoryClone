var arr = [
    { dp: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fyc3xlbnwwfHwwfHx8MA%3D%3D" },
]

var stories = document.querySelector("#stories");
var clutter = ""
arr.forEach(function (elem,idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
});

stories.innerHTML = clutter;

stories.addEventListener("click", function(dets){
    document.querySelector("#full-scrren").style.display = "block";
    document.querySelector("#full-scrren").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-scrren").style.display = "none";
    },3000)
})