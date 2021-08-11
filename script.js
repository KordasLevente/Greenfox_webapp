function Picture(src,title,desc){
    this.source = src;
    this.title = title;
    this.desc = desc;
}

function ThumbImage(src, num, title) {
    this.code = '<div class="thumbnail" data-num="'+ num +'"><div class="thumbTitle">'+ title +'</div><img src="' + src + '" width="100px" height="100px"></div>';
}

let pics = [
    new Picture("images/img8.jpg", "Pretty Flower", "A picture of a beautiful flower from the default windows lock screen directory."),
    new Picture("images/img101.png", "On an airplane", "Scenic islands lining up under a bright red airplane. Sourced from the default windows lock screen directory."),
    new Picture("images/img102.jpg", "Blue cave", "A cave covered in blue and some formations.\nKindly provided by the default windows lock screen directory."),
    new Picture("images/img103.png", "Lake in the mountains", "The reflections of the mountains in the distance make this an exceptional image.\nYou probably have a clue where this came from by now."),
    new Picture("images/img104.jpg", "Biker on a mountain", "A courageous tourist braving the heights of the mountain on his bicycle.")
];

let currentPhoto = 0;

function UpdateImg(picIndex) {
    let toLoad = pics[picIndex];
    $("#mainImg").attr('src', toLoad.source);
    $("#title").text(toLoad.title);
    $("#desc").text(toLoad.desc);

    for(let i = 0; i < pics.length; i++)
    {
        $('.thumbnail[data-num ="'+ i +'"]').removeClass("activeThumbnail");
    }
    $('.thumbnail[data-num ="'+ picIndex +'"]').addClass("activeThumbnail");

}

$("#mainViewer").on("click", "img", (e) => {
    if($(e.target).attr("id") == "imgPickerL")
    {
        if(currentPhoto == 0)
        {
            currentPhoto = 4;
        }
        else
        {
            currentPhoto--;
        }
    }
    else if($(e.target).attr("id") == "imgPickerR")
    {
        if(currentPhoto == 4)
        {
            currentPhoto = 0;
        }
        else
        {
            currentPhoto++;
        }
    }
    UpdateImg(currentPhoto);
});

$(document).on("click", ".thumbnail img", function(e){    
    currentPhoto = $(e.target).parent().attr("data-num"); 
    UpdateImg(currentPhoto);
});

window.onload = (e) => {
    UpdateImg(currentPhoto);
    let orderNum = 0;
    pics.forEach(pic => {
        $("#thumbnailbox").append(new ThumbImage(pic.source, orderNum, pic.title).code);
        orderNum++;
    });
    $('.thumbnail[data-num ="0"]').addClass("activeThumbnail");
};

