class LoopingElement {
   
    constructor(element,currentTranslation,speed,marq){
        this.element = element;
        this.currentTranslation = currentTranslation;
        this.speed = speed;
       this.d = false;
       this.marq = marq;

        this.lerp = {
            current : this.currentTranslation,
            target : this.currentTranslation,
            ease : 0.1,

        };
          this.render = this.render.bind(this);
          this.render();
    }

    lerpFunc(current,target,ease) {
        this.lerp.current = current * (1-ease) + target *ease;
        
    }

backward(){
    // this.d!= true ? this.lerp.target -= this.speed :this.lerp.target -= this.speed-this.speed;
      this.lerp.target -= this.speed;
    if(this.lerp.target < -100){
        this.lerp.current -= -100 *2;
        this.lerp.target  -=  -100*2;
    }
}

stopwa(){
     
    this.marq.addEventListener('mouseover', () => {
        this.d = true;
        console.log("hover");
    });
    this.marq.addEventListener('mouseleave', () => {
        this.d = false;
        console.log("nothover");
    });

}


// forward(){
//     this.lerp.target -= this.speed;
//     if(this.lerp.target <  100){
//         this.lerp.current -=  100 *2;
//         this.lerp.target  -=  100*2;
//     }
// }



    animate(){
        this.stopwa();
        if(this.d != true){
            this.backward();
            this.lerpFunc(this.lerp.current,this.lerp.target,this.lerp.ease);
            this.element.style.transform = `translateX(${this.lerp.current}%)`;
        }else {
            console.log("falseee");
        }
        
    }

    render(){
         
            this.animate();
            window.requestAnimationFrame(this.render);
        
       
    }
}

const i = document.getElementsByClassName("photo");
console.log(Array.isArray(i));
for(f =0;f < i.length;f++){
    console.log(i[f].naturalWidth);
    if (i[f].naturalWidth > 800){
        console.log("أكبر");
        i[f].classList.add("toyo");
    }
}

let elements = document.querySelectorAll(".m");
console.log(elements);
let elements2 = document.querySelectorAll(".marquee");

new LoopingElement(elements[0],0,0.09,elements2[0]);
new LoopingElement(elements[1],-100,0.09,elements2[0]);
 

const princesses = document.querySelectorAll(".princess");
const princesses2 = document.querySelectorAll(".princess2");
const g = document.querySelectorAll(".gallery");
const q = document.querySelectorAll(".queen");
console.log(princesses2);

  const observer =  new IntersectionObserver(entries =>{
   if(entries[0].isIntersecting){
    princesses[0].classList.add("show");
    princesses2[0].classList.add("show");
    q[0].classList.add("show");
   }else {
    princesses[0].classList.remove("show");
    princesses2[0].classList.remove("show");
    q[0].classList.remove("show");
   }
   
       
       
    
     
 
 
  } 
   )



     const observer2 =  new IntersectionObserver(entries =>{
      
        entries[0].target.classList.toggle("show", entries[0].isIntersecting);
        // princesses[0].classList.remove("show");
        // if(entry.target.isIntersecting){
        // //   entry.target.classList.toggle("show2", entry.isIntersecting)
        // observer2.observe(princesses2[0]);
        // princesses[0].classList.add("show");
        // }
        // else{
        //     princesses[0].classList.remove("show");
        // }
     
     

           
      
   
      
     },{
       
    // rootMargin:"500px"
      
    })
       observer.observe(g[0]);
         // observer2.observe(princesses2[0]);