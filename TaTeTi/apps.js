const boxes = document.querySelector('.boxes')
partida()

function partida(){
    let turno = Math.round(Math.random())
    let box = [0,0,0,0,0,0,0,0,0] // el 0 es vacio | 1 es la X y 2 es O
    
    document.addEventListener('keypress', function(e){
            codigo = e.code
            if(codigo == 'Numpad7'){$("#b1"). trigger("click")}
            if(codigo == 'Numpad8'){$("#b2"). trigger("click")} 
            if(codigo == 'Numpad9'){$("#b3"). trigger("click")} 
            if(codigo == 'Numpad4'){$("#b4"). trigger("click")} 
            if(codigo == 'Numpad5'){$("#b5"). trigger("click")} 
            if(codigo == 'Numpad6'){$("#b6"). trigger("click")} 
            if(codigo == 'Numpad1'){$("#b7"). trigger("click")} 
            if(codigo == 'Numpad2'){$("#b8"). trigger("click")} 
            if(codigo == 'Numpad3'){$("#b9"). trigger("click")} 
        });

    boxes.addEventListener('click',(e)=>{
        if(turno != -1){
            clickBox(e)
            setTimeout(()=>{
            if(comprobar(1) == true){alert("Ganador la Cruz"); turno = -1;refresh()}
            if(comprobar(2) == true){alert("Ganador El circulo"); turno = -1;refresh()}
            },200)
        }
        

        
        
        
        
        
        
        
    })
    function refresh(){
            window.location.reload()
        }
    function clickBox(e){
        relleno = e.target.className.indexOf('active') == -1
            if(e.target.className.indexOf('boxes') == -1 && relleno ){
                ((turno += 1) == 2)?turno=0:turno = 1;
                turno = activarbox(e,turno)
            }
    }

    function activarbox(e,turno){
        if(turno){
            e.target.innerHTML = '<i class="fas fa-times activado"></i>';  
            e.target.className+=(" 1")
            setearB(e,1)
        }else{
            e.target.innerHTML = '<i class="far fa-circle activado"></i>';
            e.target.className+=(" 2")
            setearB(e,2)
        }
        e.target.className+=(" active")
        
        return turno
                
    }
    function setearB(e,elejido){
        boxNumber = e.target.className.split(' ')[1]
        box[(boxNumber-1)] = elejido
    }

    function comprobar(num){
        gan = false
        if(box[0] == num && box[1] == num && box[2] == num){gan = true}
        if(box[3] == num && box[4] == num && box[5] == num){gan = true}
        if(box[6] == num && box[7] == num && box[8] == num){gan = true}
        if(box[0] == num && box[3] == num && box[6] == num){gan = true}
        if(box[1] == num && box[4] == num && box[7] == num){gan = true}
        if(box[2] == num && box[5] == num && box[8] == num){gan = true}
        if(box[0] == num && box[4] == num && box[8] == num){gan = true}
        if(box[2] == num && box[4] == num && box[6] == num){gan = true}
        if(box.indexOf(0) == -1){setTimeout(refresh(),500)}

        return gan
    }


}









