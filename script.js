 const btn=document.querySelector("#btn")
 const main=document.querySelector("#main")
 const saveNotes=()=>{
     const notes=document.querySelectorAll(".notes textarea");
     const data=[]
     notes.forEach(
        (notes)=>{
            data.push(notes.value)
        }
     )
     localStorage.setItem("notes",JSON.stringify(data))
 }
 btn.addEventListener(
    "click",
    function(){
        addNotes()
    }
 )
 const addNotes=()=>{
    const notes=document.createElement("div")
    notes.classList.add("notes")
    notes.innerHTML=`
    
    <div class="tools">
        <i class="trash fa-solid fa-trash"></i>
        <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea>  </textarea>
 
    `;
    notes.querySelector(".trash").addEventListener(
        "click",
        function(){
            notes.remove()
            saveNotes()
        }
    )
    notes.querySelector(".save").addEventListener(
         "click",
         function(){
            saveNotes()
         }
    )
    main.appendChild(notes)
    saveNotes()

 }