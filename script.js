 // Localdeki gorevListesi yükleme
 let gorevListesi = [];

 if (localStorage.getItem("gorevListesi") !== null) {

     gorevListesi = JSON.parse(localStorage.getItem("gorevListesi"));

     for (let i of gorevListesi) {

         let li = `
          <li class="task-list__item">
                  <div class="task-list__item-normal">
                      <div class="form">
                          <input onclick="taskCheck(event)" class="task-check" type="checkbox" id="id${i.id}">
                          <label for="id${i.id}">${i.gorevAdi}</label>
                      </div>
                      <div class="dropdown-icon">
                          <button class="dropbtn"><i class="fa-solid fa-ellipsis"></i></button>
                          <div class="dropdown-content">
                              <span onclick="deleteItem(event)" class="dropdown-content__item delete-item"><i
                                      class=" fa-solid fa-trash-can"></i>Sil</span>
                              <span onclick="editItem(event)" class="dropdown-content__item edit-item"><i
                                      class=" fa-solid fa-pen"></i>Düzenle</span>
                          </div>
                      </div>
                  </div>
                  <div class="task-list__item-updating">
                      <form>
                          <input type="text" class="edit-task" placeholder="Görev İsmini Yazınız">
                          <button onclick="updateTask(event)" class="edit-task-btn" type="submit">Güncelle</button>
                          <button onclick="forego(event)" class="return-task-btn" type="submit">Vazgeç</button>
                      </form>
                      <div class="alert-empty-input">
                          <i class="fa-solid fa-circle-exclamation"></i>Lütfen Görev İsmini Doldurun!
                      </div>
                  </div>
              </li>
              `;

         document.querySelector(".task-list").insertAdjacentHTML("beforeend", li)

         if (i.durum == "completed") {

             document.querySelector(`#id${i.id}`).checked = 1;
             document.querySelector(`#id${i.id}`).parentElement.classList.add("strike-out")

         }

     }
 }
 if (document.querySelector(".task-list").children.length == 0) {
     document.querySelector(".no-hepsi").style.display = "flex";
 }



 // Dropdown için Birinci Yöntem
 window.onclick = function (event) {
     if (document.getElementsByClassName("showdrop").length > 0) {
         if (event.target == document.getElementsByTagName("html")[0] || !event.target.parentElement.matches('.dropbtn')) {
             var dropdownsbuttons = document.getElementsByClassName("dropbtn");
             for (let buttons of dropdownsbuttons) {
                 if (buttons.nextElementSibling.classList.contains("showdrop")) {
                     buttons.nextElementSibling.classList.toggle("showdrop");
                 }
             }
         } else if (!event.target.parentElement.nextElementSibling.matches(".showdrop")) {
             var dropdownsbuttons = document.getElementsByClassName("dropbtn");
             for (let buttons of dropdownsbuttons) {
                 if (buttons.nextElementSibling.classList.contains("showdrop")) {
                     buttons.nextElementSibling.classList.toggle("showdrop");
                 }
             }
             event.target.parentElement.nextElementSibling.classList.toggle("showdrop")
         } else {
             var dropdownsbuttons = document.getElementsByClassName("dropbtn");
             for (let buttons of dropdownsbuttons) {
                 if (buttons.nextElementSibling.classList.contains("showdrop")) {
                     buttons.nextElementSibling.classList.toggle("showdrop");
                 }
             }
         }

     } else if (event.target != document.getElementsByTagName("html")[0] && event.target.parentElement.matches('.dropbtn')) {
         event.target.parentElement.nextElementSibling.classList.toggle("showdrop")
     }
 }

 // Dropdown için ikinci Yöntem
 /* When the user clicks on the button,toggle between hiding and showing the dropdown content */
 // function showDropDown(event) {
 //     event.target.parentElement.nextElementSibling.classList.toggle("showdrop");
 // }
 // // Close the dropdown if the user clicks outside of it
 // window.onclick = function (event) {
 //     console.log(event.target)
 //     if (event.target == document.getElementsByTagName("html")[0] || !event.target.parentElement.matches('.dropbtn')) {
 //             var dropdownsbuttons = document.getElementsByClassName("dropbtn");
 //             for (let buttons of dropdownsbuttons) {
 //                 if (buttons.nextElementSibling.classList.contains("showdrop")) {
 //                     buttons.nextElementSibling.classList.toggle("showdrop");
 //                 }
 //             }
 //     }
 // }



 document.querySelector(".add-task-btn").addEventListener("click", function (event) {
     event.preventDefault();
     // Yeni Görev Ekle
     var text = document.querySelector(".add-task").value;

     if (text != "" && (/[a-zA-Z]/.test(text) || /\d/.test(text))) {
         event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "none";


         //Eleman Eklenince Eleman Yok Mesajları görünmesin
         if (document.querySelector(".active") == document.querySelector(".filtre-hepsi")) {
             document.querySelector(".no-hepsi").style.display = "none";
         }
         if (document.querySelector(".active") == document.querySelector(".filtre-yap")) {
             document.querySelector(".no-yap").style.display = "none";
         }



         var idno = document.querySelector(".task-list").children.length + 1;
         var li = `
         <li class="task-list__item">
                 <div class="task-list__item-normal">
                     <div class="form">
                         <input onclick="taskCheck(event)" class="task-check" type="checkbox" id="id${idno}">
                         <label for="id${idno}">${text}</label>
                     </div>
                     <div class="dropdown-icon">
                         <button class="dropbtn"><i class="fa-solid fa-ellipsis"></i></button>
                         <div class="dropdown-content">
                             <span onclick="deleteItem(event)" class="dropdown-content__item delete-item"><i
                                     class=" fa-solid fa-trash-can"></i>Sil</span>
                             <span onclick="editItem(event)" class="dropdown-content__item edit-item"><i
                                     class=" fa-solid fa-pen"></i>Düzenle</span>
                         </div>
                     </div>
                 </div>
                 <div class="task-list__item-updating">
                     <form>
                         <input type="text" class="edit-task" placeholder="Görev İsmini Yazınız">
                         <button onclick="updateTask(event)" class="edit-task-btn" type="submit">Güncelle</button>
                         <button onclick="forego(event)" class="return-task-btn" type="submit">Vazgeç</button>
                     </form>
                     <div class="alert-empty-input">
                         <i class="fa-solid fa-circle-exclamation"></i>Lütfen Görev İsmini Doldurun!
                     </div>
                 </div>
             </li>
             `;

         var ul = document.querySelector(".task-list");

         ul.insertAdjacentHTML("beforeend", li);

         // İşlem Bittikten Yeni listeyi locale Kaydetme
         gorevListesi = [];
         for (let i of document.querySelector(".task-list").children) {

             let id = i.querySelector(".task-check").id;
             let label = i.querySelector("label").textContent;
             let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

             let object = { "id": id, "gorevAdi": label, "durum": state }
             gorevListesi.push(object);
         }
         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));


         document.querySelector(".add-task").value = "";



         //Ekleye basınca filtreleme işlemi
         if (document.querySelector(".active") == document.querySelector(".filtre-yapildi")) {
             document.querySelector(".no-yapildi").style.display = "none";

             document.querySelector(".filtre-yapildi").classList.remove("active");

             document.querySelector(".filtre-hepsi").classList.add("active");

             let inputlar = document.querySelectorAll(".task-list .task-check");
             for (let input of inputlar) {
                 input.parentElement.parentElement.parentElement.style.display = "list-item";
             }
         }



     } else {
         event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "flex";

         setTimeout(() => {
             event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "none";

         }, 5000);


     }



 });


 //Hepsini Temizle
 document.querySelector(".btn-temizle").addEventListener("click", function () {
     if (document.querySelector(".active") == document.querySelector(".filtre-hepsi")) {
         while (0 < document.querySelector(".task-list").children.length) {
             document.querySelector(".task-list").children[0].remove();
         }
         document.querySelector(".no-hepsi").style.display = "flex";

         // İşlem Bittikten Yeni listeyi locale Kaydetme
         gorevListesi = [];
         for (let i of document.querySelector(".task-list").children) {

             let id = i.querySelector(".task-check").id;
             let label = i.querySelector("label").textContent;
             let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

             let object = { "id": id, "gorevAdi": label, "durum": state }
             gorevListesi.push(object);
         }
         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));


     } else if (document.querySelector(".active") == document.querySelector(".filtre-yap")) {
         let inputlar = document.querySelectorAll(".task-list .task-check");

         for (let input of inputlar) {
             if (!input.checked) {
                 input.parentElement.parentElement.parentElement.remove()
             }

         }
         document.querySelector(".no-yap").style.display = "flex";

         // İşlem Bittikten Yeni listeyi locale Kaydetme
         gorevListesi = [];
         for (let i of document.querySelector(".task-list").children) {

             let id = i.querySelector(".task-check").id;
             let label = i.querySelector("label").textContent;
             let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

             let object = { "id": id, "gorevAdi": label, "durum": state }
             gorevListesi.push(object);
         }
         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));


     } else if (document.querySelector(".active") == document.querySelector(".filtre-yapildi")) {
         let inputlar = document.querySelectorAll(".task-list .task-check");

         for (let input of inputlar) {
             if (input.checked) {
                 input.parentElement.parentElement.parentElement.remove();
             }

         }
         document.querySelector(".no-yapildi").style.display = "flex";

         // İşlem Bittikten Yeni listeyi locale Kaydetme
         gorevListesi = [];
         for (let i of document.querySelector(".task-list").children) {

             let id = i.querySelector(".task-check").id;
             let label = i.querySelector("label").textContent;
             let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

             let object = { "id": id, "gorevAdi": label, "durum": state }
             gorevListesi.push(object);
         }
         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
     }

 });


 //Seçili Olanı Temizle
 function deleteItem(event) {
     event.target.parentElement.parentElement.parentElement.parentElement.remove()

     // İşlem Bittikten Yeni listeyi locale Kaydetme
     gorevListesi = [];
     for (let i of document.querySelector(".task-list").children) {

         let id = i.querySelector(".task-check").id;
         let label = i.querySelector("label").textContent;
         let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

         let object = { "id": id, "gorevAdi": label, "durum": state }
         gorevListesi.push(object);
     }
     localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));

     if (document.querySelector(".active") == document.querySelector(".filtre-hepsi")) {
         if (document.querySelector(".task-list").children.length == 0) {
             document.querySelector(".no-hepsi").style.display = "flex";
         }
     }
     if (document.querySelector(".active") == document.querySelector(".filtre-yap")) {
         let i = 0;
         for (let tiksiz of document.querySelectorAll(".task-list .task-check")) {
             if (!tiksiz.checked) {
                 i++
             }
         }
         if (i == 0) {
             document.querySelector(".no-yap").style.display = "flex";
         }
     }
     if (document.querySelector(".active") == document.querySelector(".filtre-yapildi")) {
         let i = 0;
         for (let tikli of document.querySelectorAll(".task-list .task-check")) {
             if (tikli.checked) {
                 i++
             }
         }
         if (i == 0) {
             document.querySelector(".no-yapildi").style.display = "flex";
         }
     }
 };

 //Seçili Olanı Düzenle
 function editItem(event) {
     event.target.parentElement.parentElement.parentElement.style.display = "none";

     event.target.parentElement.parentElement.parentElement.nextElementSibling.style.display = "block";

     event.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector(".edit-task").focus();

     event.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector(".edit-task").value = event.target.parentElement.parentElement.parentElement.querySelector("label").innerHTML;

 }

 //EDİT EKRANI
 //__Güncelle
 function updateTask(event) {
     event.preventDefault();
     let text = event.target.previousElementSibling.value;
     if (text != "" && (/[a-zA-Z]/.test(text) || /\d/.test(text))) {

         event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "none";


         event.target.parentElement.parentElement.previousElementSibling.querySelector("label").innerHTML = text;

         event.target.parentElement.parentElement.style.display = "none";

         event.target.parentElement.parentElement.previousElementSibling.style.display = "flex"

         // İşlem Bittikten Yeni listeyi locale Kaydetme
         gorevListesi = [];
         for (let i of document.querySelector(".task-list").children) {

             let id = i.querySelector(".task-check").id;
             let label = i.querySelector("label").textContent;
             let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

             let object = { "id": id, "gorevAdi": label, "durum": state }
             gorevListesi.push(object);
         }
         localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));
     } else {
         event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "flex";

         setTimeout(() => {
             event.target.parentElement.parentElement.querySelector(".alert-empty-input").style.display = "none";

         }, 5000);
     }
 }

 //__Vazgeç
 function forego(event) {
     event.preventDefault();

     event.target.parentElement.parentElement.style.display = "none";

     event.target.parentElement.parentElement.previousElementSibling.style.display = "flex";
 }

 //İnput Kontrol
 function taskCheck(event) {
     event.target.parentElement.classList.toggle("strike-out")

     // İşlem Bittikten Yeni listeyi locale Kaydetme
     gorevListesi = [];
     for (let i of document.querySelector(".task-list").children) {

         let id = i.querySelector(".task-check").id;
         let label = i.querySelector("label").textContent;
         let state = (i.querySelector(".task-check").checked) ? "completed" : "pending";

         let object = { "id": id, "gorevAdi": label, "durum": state }
         gorevListesi.push(object);
     }
     localStorage.setItem("gorevListesi", JSON.stringify(gorevListesi));

     //Check edince filtreleri güncelle
     setTimeout(() => {
         if (document.querySelector(".active") == document.querySelector(".filtre-yapildi")) {
             event.target.parentElement.parentElement.parentElement.style.display = "none";

             let inputlar = document.querySelectorAll(".task-list .task-check");
             let i = 0;
             for (let input of inputlar) {
                 if (input.checked) {
                     i++;
                 }
             }
             if (i == 0) {
                 document.querySelector(".no-yapildi").style.display = "flex";
             }

         } else if (document.querySelector(".active") == document.querySelector(".filtre-yap")) {
             event.target.parentElement.parentElement.parentElement.style.display = "none";

             let inputlar = document.querySelectorAll(".task-list .task-check");
             let i = 0;
             for (let input of inputlar) {
                 if (!input.checked) {
                     i++;
                 }
             }
             if (i == 0) {
                 document.querySelector(".no-yap").style.display = "flex";
             }
         }
     }, 350)

 }
 //__input kontrolünü döngü ile hepsine addEventListener ekleyerek de yapabilirsin
 // let deneme = document.querySelectorAll(".task-check");
 // for (let denemem of deneme) {
 //     denemem.addEventListener("click", function (event) {
 //         event.target.parentElement.classList.toggle("strike-out")
 //         setTimeout(() => {
 //             if (document.querySelector(".active") == document.querySelector(".filtre-yapildi")) {
 //                 event.target.parentElement.parentElement.parentElement.style.display = "none";
 //             } else if (document.querySelector(".active") == document.querySelector(".filtre-yap")) {
 //                 event.target.parentElement.parentElement.parentElement.style.display = "none";
 //             }
 //         }, 350)
 //     })
 // }


 //FİLTRELEME
 //__Yapılacaklar
 document.querySelector(".filtre-yap").addEventListener("click", function (event) {

     let filtreMessage = document.querySelectorAll(".state");
     for (let state of filtreMessage) {
         state.style.display = "none"
     }


     document.querySelector(".filtre-hepsi").classList.remove("active");
     document.querySelector(".filtre-yapildi").classList.remove("active");
     event.target.classList.add("active");


     let inputlar = document.querySelectorAll(".task-list .task-check");
     let i = 0;
     for (let input of inputlar) {
         input.parentElement.parentElement.parentElement.style.display = "list-item";
         if (input.checked) {
             input.parentElement.parentElement.parentElement.style.display = "none";
         }
         if (!input.checked) {
             i++
         }
     }
     if (i == 0) {
         document.querySelector(".no-yap").style.display = "flex";
     }


 })

 //__Tamamlananlar
 document.querySelector(".filtre-yapildi").addEventListener("click", function (event) {

     let filtreMessage = document.querySelectorAll(".state");
     for (let state of filtreMessage) {
         state.style.display = "none"
     }

     document.querySelector(".filtre-hepsi").classList.remove("active");
     document.querySelector(".filtre-yap").classList.remove("active");
     event.target.classList.add("active");


     let inputlar = document.querySelectorAll(".task-list .task-check");
     let i = 0;
     for (let input of inputlar) {
         input.parentElement.parentElement.parentElement.style.display = "list-item";
         if (!input.checked) {
             input.parentElement.parentElement.parentElement.style.display = "none";
         }
         if (input.checked) {
             i++
         }
     }
     if (i == 0) {
         document.querySelector(".no-yapildi").style.display = "flex";
     }
 })

 //__Hepsi
 document.querySelector(".filtre-hepsi").addEventListener("click", function (event) {

     let filtreMessage = document.querySelectorAll(".state");
     for (let state of filtreMessage) {
         state.style.display = "none"
     }


     document.querySelector(".filtre-yap").classList.remove("active");
     document.querySelector(".filtre-yapildi").classList.remove("active");
     event.target.classList.add("active");


     let inputlar = document.querySelectorAll(".task-list .task-check");
     for (let input of inputlar) {
         input.parentElement.parentElement.parentElement.style.display = "list-item";
     }

     if (document.querySelector(".task-list").children.length == 0) {
         document.querySelector(".no-hepsi").style.display = "flex";
     }
 })
