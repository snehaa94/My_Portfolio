//open new contact

if(sessionStorage.getItem("user")==null){
    window.location.replace("../../../index.html");
}
else{
    var current_user = sessionStorage.getItem("user");

    //profile picture
    function profile(){
        var profile_pic = document.getElementById("profile_pic");
        var url = localStorage.getItem(current_user + "image");
        profile_pic.style.backgroundImage = "url("+url+")";
        profile_pic.style.backgroundSize = "cover";
        profile_pic.style.backgroundPosition = "center";
    }
    profile();

    //open contact box
        var add_icon = document.getElementById("new_contact");
        add_icon.onclick = function(){
        var bg = document.getElementById("contact_bg");
        bg.style.display="block";
    }
    //close contact box
    var close = document.getElementById("close");
    close.onclick = function(){
        var bg = document.getElementById("contact_bg");
        bg.style.display="none";

    }
    //add contact in local storage
    var add = document.getElementById("add");
    add.onclick = function(){
        var c_name = document.getElementById("c_name");
        var c_num =document.getElementById("c_number");
        if(c_name.value != "" && c_num.value !=""){
            var new_contact = {name:c_name.value,number:c_num.value};
            var json_text = JSON.stringify(new_contact);
            localStorage.setItem(current_user+"_conatct"+c_name.value,json_text);
        }
        else{
            alert("Please enter a name and phone number....");
            return false;
        }
    }
    //dynamic written contact
    function all_contacts(){
        var i=0;
        for(i ; i<localStorage.length; i++){
            var all_keys = localStorage.key(i);
            if(all_keys.match(sessionStorage.getItem("user") + "_conatct")){
                var j_txt = localStorage.getItem(all_keys);
                var obj = JSON.parse(j_txt);

                var contact_box = document.createElement("DIV");
                contact_box.setAttribute("id","contact");

                var name_p = document.createElement("P");
                name_p.setAttribute("class","contact_names");

                var name_i = document.createElement("I");
                name_i.setAttribute("class","fas fa-user");

                var tool = document.createElement("DIV");
                tool.setAttribute("id","tool");

                var edit_i = document.createElement("I");
                edit_i.setAttribute("class","fas fa-edit edit");

                var del_i = document.createElement("I");
                del_i.setAttribute("class","fas fa-trash del");


                var line = document.createElement("HR");
                line.setAttribute("color","purple");
                line.setAttribute("size","1");
                line.setAttribute("width","75%");

                var num_p = document.createElement("P");

                var num_i = document.createElement("I");
                num_i.setAttribute("class","fas fa-mobile-alt");

                name_p.appendChild(name_i);
                name_p.innerHTML += " "+obj.name;

                tool.appendChild(edit_i);
                tool.appendChild(del_i);

                num_p.appendChild(num_i);
                num_p.innerHTML += " "+obj.number;

                contact_box.appendChild(name_p);
                contact_box.appendChild(tool);
                contact_box.appendChild(line);
                contact_box.appendChild(num_p);

                var all_contact_box = document.getElementById("all_contact_box");
                all_contact_box.appendChild(contact_box);
            }
        }
    }
    all_contacts();

    //searching functionality -----
    var search = document.getElementById("search");
    search.oninput = function(){
        var all_contact_name = document.getElementsByClassName("contact_names");
        var i=0;
        for(i;i<all_contact_name.length;i++){
            if(all_contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase())){
                all_contact_name[i].parentElement.style.display="block";
            }else{
                all_contact_name[i].parentElement.style.display="none";
            }
        }
    }

    //delete functionality
    var del = document.getElementsByClassName("del");
    var i = 0;
    for(i;i<del.length;i++){
        del[i].onclick = function(){
            var parent = this.parentElement.parentElement;
            var p_ele = parent.getElementsByClassName("contact_names")[0];
            var username = p_ele.innerHTML.replace('<i class="fas fa-user"></i>',"");
            localStorage.removeItem(current_user + "_conatct"+username.trim());
            parent.className = "animate__animated animate__bounceOut";
            
            setTimeout(function(){
                parent.remove();
            },1000);
        }
    }

    //edit functionality
    function edit(){
        var edit_icon = document.getElementsByClassName("edit");
        var i = 0;
        for(i;i<edit_icon.length;i++){
            edit_icon[i].onclick = function(){
                var parent = this.parentElement.parentElement;
                var para = parent.getElementsByTagName("P");
                var name = para[0].innerHTML.replace('<i class="fas fa-user"></i>',"").trim();
                var number = para[1].innerHTML.replace('<i class="fas fa-mobile-alt"></i>',"").trim();

                var c_name = document.getElementById("c_name");
                var c_num = document.getElementById("c_number");

                var add_btn = document.getElementById("new_contact");
                var c_heading = document.getElementById("c_heading");
                var add = document.getElementById("add")
                var close = document.getElementById("close")

                c_name.value = name;
                c_num.value = number;
                c_heading.innerHTML = "Edit Contact";
                add.innerHTML = "update";
                close.style.display = "none";
                add_btn.click();
                localStorage.removeItem(current_user+"_conatct"+name);
                
            }
        }
    }
    edit();
}