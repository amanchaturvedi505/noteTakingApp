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
     if(data.length===0){
        localStorage.removeItem("notes")
     }
     else{
        localStorage.setItem("notes",JSON.stringify(data))
     }
    
 }
 
 btn.addEventListener(
    "click",
    function(){
        addNotes()
    }
 )

 const addNotes=(text = "")=>{
    const notes=document.createElement("div")
    notes.classList.add("notes")
    notes.innerHTML=`
    
    <div class="tools">
        <i class="trash fa-solid fa-trash"></i>
        <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea>${text}  </textarea>
 
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
 (
    function(){
        const lsnotes=JSON.parse(localStorage.getItem("notes"))
        if(lsnotes===null){
            addNotes()
        }
        else{
            lsnotes.forEach(
                (lsnotes)=>{
                    addNotes(lsnotes)
                }
            )
        }
      
       
    }
 )()