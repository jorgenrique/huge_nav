//read and show JSON info for desktop navigation
function init() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var arr = JSON.parse(xhr.responseText)
            var out = "<ul>";
            for(i = 0; i < arr.items.length; i++) {
              out += "<div class='submenu_cont' onmouseover='show_bg("+i+")' onmouseout='hide_bg("+i+")'>";
                out += "<li class='list_style'><a href='"+arr.items[i].url+"'>"+arr.items[i].label+"</a></li>";
                out += "<div class='list_cont'>";
                  if(arr.items[i].items != ""){
                    for(j=0; j<arr.items[i].items.length; j++){
                      out += "<a href='"+arr.items[i].items[j].url+"'>"+arr.items[i].items[j].label+"</a>"
                    }
                  }
              out += "</div></div>";
            }
            out += "</ul>";
            //alert(arr.items[1].items)
            document.getElementById("navigation_bar").innerHTML = out;
        }
    }
    xhr.open('GET', '/api/nav.json', true);
    xhr.send(null);
};

//Methods for hiding/showing Translucent Black overlay
function show_bg(i){
  document.getElementById('bg_overlay').style.display ='block';
  document.getElementsByClassName('list_cont')[i].style.display ='block';
  document.getElementsByClassName('list_style')[i].style.background ='#fff';
  document.getElementsByClassName('list_style')[i].style.color ='#ec008c';
}
function hide_bg(i){
  document.getElementById('bg_overlay').style.display ='none';
  document.getElementsByClassName('list_cont')[i].style.display ='none';
  document.getElementsByClassName('list_style')[i].style.background ='none';
  document.getElementsByClassName('list_style')[i].style.color ='#fff';
}

//Method for showing mobile navigation
function showSidebar(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          var arr = JSON.parse(xhr.responseText)
          var out = "<ul>";
          for(a = 0; a < arr.items.length; a++) {
            out += "<div class='submenu_cont'>";
              out += "<li class='list_style'><a href='"+arr.items[a].url+"'>"+arr.items[a].label+"</a></li>";
              if(arr.items[a].items != ""){
                out += "<div id='down_arrow_"+[a]+"' class='down_arrow arrow' onclick='show_menu("+a+")'><img src='../images/down_arrow.png'></div><div id='up_arrow_"+[a]+"' class='arrow up_arrow' onclick='hide_menu("+a+")'><img src='../images/up_arrow.png'></div>"
              }
              out += "<div class='list_cont_mob'>";
                if(arr.items[a].items != ""){
                  for(j=0; j<arr.items[a].items.length; j++){
                    out += "<a href='"+arr.items[a].items[j].url+"'>"+arr.items[a].items[j].label+"</a>"
                  }
                }
            out += "</div></div>";
          }
          out += "</ul>";
          //alert(arr.items[1].items)
          document.getElementById("menu_cont").innerHTML = out;
      }
  }
  xhr.open('GET', '/api/nav.json', true);
  xhr.send(null);
  hide_burguer();
  document.getElementById('bg_overlay').style.display ='block';
  document.getElementById("holder").style.marginLeft = "300px";
  document.getElementById("footer").style.marginLeft = "300px";
  document.getElementById('side_nav').style.display ='block';
}
//Method for showing submenu on Mobile nav
function show_menu(a){
  document.getElementsByClassName('list_cont_mob')[a].style.display ='block';
  document.getElementById('up_arrow_'+[a]).style.display ='block';
  document.getElementById('down_arrow_'+[a]).style.display ='none';
}
//Method for hiding submenu on Mobile nav
function hide_menu(a){
  document.getElementsByClassName('list_cont_mob')[a].style.display ='none';
  document.getElementById('up_arrow_'+[a]).style.display ='none';
  document.getElementById('down_arrow_'+[a]).style.display ='block';
}
//Method for hiding mobile navigation
function hideSidebar(){
  show_burguer();
  document.getElementById('bg_overlay').style.display ='none';
  document.getElementById("holder").style.marginLeft = "0px";
  document.getElementById("footer").style.marginLeft = "0px";
  document.getElementById('side_nav').style.display ='none';
}

//Methods for hiding/showing Burguer and Close Menu buttons
function hide_burguer(){
  document.getElementById('burguer').style.display ='none';
  document.getElementById('close_menu').style.display ='block';
}
function show_burguer(){
  document.getElementById('burguer').style.display ='block';
  document.getElementById('close_menu').style.display ='none';
}
