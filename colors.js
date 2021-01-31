var Set_color = {
  links : function(titlelistcolor,linkscolor){
    // var titlelist = document.querySelectorAll(".titlelist");
    // i = 0;
    // while(i < titlelist.length){
    //   titlelist[i].style.color = titlelistcolor;
    //   i = i + 1;
    // };
    $(".titlelist").css("color",titlelistcolor);

    // var links = document.querySelectorAll(".links");
    // i = 0;
    // while(i < links.length){
    //   links[i].style.color = linkscolor;
    //   i = i + 1;
    // };
    $(".links").css("color",linkscolor);
  },
  font: function(color){
    document.querySelector("body").style.color= color;
  },
  background: function(color){
    document.querySelector("body").style.backgroundColor= color;
  }
};

var night_DayHandler = function(self){
  if(self.value==="night"){
    Set_color.font("powderblue");
    Set_color.background("black");
    Set_color.links("powderblue","white");
    self.value="day";
  } else{
    Set_color.font("black");
    Set_color.background("white");
    Set_color.links("black","Indigo");
    self.value="night";
  }
};
