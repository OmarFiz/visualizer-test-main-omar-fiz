//1- 20220126 OmarFiz Load all images at once from the start so we have them at hand, setting all layers to invisible. Assign an id to each and a listener (onclisk event)
//2- 20220126 OmarFiz add Scrolls with listener to put their corresponding layer; set to invisible 
//3- 20220126 OmarFiz when click on fingerprints hide fingerprints and make the corresponding scroll visible
//4- 20220126 OmarFiz when click on base image hide scrolls and make fingerprints visible to be able to click again on them
//5- 20220126 OmarFiz when click on the vertical scroll image show the corresponding layer and hide two others of the vertica group
//6- 20220126 OmarFiz when click on the horizontal scroll image show the corresponding layer and hide four others of the horizontal group 
//7- 20220126 OmarFiz when click on refresh button go back to starting point with only the base picture and two fingerprints buttons

export default function Home () {


     const imageClick1 = () => {
     console.log('imageClick1111!!!!');
     document.getElementById('maskscrolvertical').style.visibility = 'visible';
     document.getElementById('maskscrolhorizontal').style.visibility = 'hidden';
     document.getElementById('fingerprint1').style.visibility = 'hidden';
     document.getElementById('fingerprint2').style.visibility = 'hidden';
    } 
    const imageClick2 = () => {
     console.log('imageClick22222!!!!');
     document.getElementById('maskscrolvertical').style.visibility = 'hidden';
     document.getElementById('maskscrolhorizontal').style.visibility = 'visible';
     document.getElementById('fingerprint1').style.visibility = 'hidden';
     document.getElementById('fingerprint2').style.visibility = 'hidden';
    } 

  const layerreset = () => {
     console.log('layerreset layerreset!!!!');
     document.getElementById('maskscrolvertical').style.visibility = 'hidden';
     document.getElementById('maskscrolhorizontal').style.visibility = 'hidden';
     document.getElementById('fingerprint1').style.visibility = 'visible';
     document.getElementById('fingerprint2').style.visibility = 'visible';
    } 
 
  
    const layeralmond = () => {
     console.log('layeralmond!!!!');
     document.getElementById('masksnatural').style.visibility = 'hidden';
     document.getElementById('maskstaupe').style.visibility = 'hidden';
     document.getElementById('masksalmond').style.visibility = 'visible';
    } 
    
     const layernatural = () => {
     console.log('layernatural!!!!');
     document.getElementById('masksalmond').style.visibility = 'hidden';
     document.getElementById('maskstaupe').style.visibility = 'hidden';
     document.getElementById('masksnatural').style.visibility = 'visible';
    } 
     
     const layertaupe = () => {
          console.log('layertaupe!!!!');
          document.getElementById('maskstaupe').style.visibility = 'visible';
          document.getElementById('masksalmond').style.visibility = 'hidden';
          document.getElementById('masksnatural').style.visibility = 'hidden';
    } 
  

     const layerroble = () => {
          console.log('layerroble!!!!');
          document.getElementById('roble').style.visibility = 'visible';
          document.getElementById('blanco').style.visibility = 'hidden';
          document.getElementById('cement').style.visibility = 'hidden';
          document.getElementById('mouse').style.visibility = 'hidden';
          document.getElementById('eucalyptus').style.visibility = 'hidden';
    } 

   const layerblanco = () => {
          console.log('layerroble!!!!');
          document.getElementById('roble').style.visibility = 'hidden';
          document.getElementById('blanco').style.visibility = 'visible';
          document.getElementById('cement').style.visibility = 'hidden';
          document.getElementById('mouse').style.visibility = 'hidden';
          document.getElementById('eucalyptus').style.visibility = 'hidden';
    }   
   const layercement = () => {
          console.log('layerroble!!!!');
          document.getElementById('roble').style.visibility = 'hidden';
          document.getElementById('blanco').style.visibility = 'hidden';
          document.getElementById('cement').style.visibility = 'visible';
          document.getElementById('mouse').style.visibility = 'hidden';
          document.getElementById('eucalyptus').style.visibility = 'hidden';
    }   

   const layermouse = () => {
          console.log('layerroble!!!!');
          document.getElementById('roble').style.visibility = 'hidden';
          document.getElementById('blanco').style.visibility = 'hidden';
          document.getElementById('cement').style.visibility = 'hidden';
          document.getElementById('mouse').style.visibility = 'visible';
          document.getElementById('eucalyptus').style.visibility = 'hidden';
    }   
   const layereucalyptus = () => {
          console.log('layerroble!!!!');
          document.getElementById('roble').style.visibility = 'hidden';
          document.getElementById('blanco').style.visibility = 'hidden';
          document.getElementById('cement').style.visibility = 'hidden';
          document.getElementById('mouse').style.visibility = 'hidden';
          document.getElementById('eucalyptus').style.visibility = 'visible';
    }   

     const clickrefresh = () => {
      console.log('recycle!!!!');
          document.getElementById('fingerprint1').style.visibility = 'visible';
          document.getElementById('fingerprint2').style.visibility = 'visible';
          document.getElementById('maskscrolvertical').style.visibility = 'hidden';
          document.getElementById('maskscrolhorizontal').style.visibility = 'hidden';
          document.getElementById('maskstaupe').style.visibility = 'hidden';
          document.getElementById('masksalmond').style.visibility = 'hidden';
          document.getElementById('masksnatural').style.visibility = 'hidden';
          document.getElementById('roble').style.visibility = 'hidden';
          document.getElementById('blanco').style.visibility = 'hidden';
          document.getElementById('cement').style.visibility = 'hidden';
          document.getElementById('mouse').style.visibility = 'hidden';
          document.getElementById('eucalyptus').style.visibility = 'hidden';
      } 
     
  

  return (

<div class="relative overflow-hidden flex justify-center items-center min-h-screen">
   <img id="basepict" class="absolute object-cover h-full w-full" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844" onClick={() => layerreset()}/>
       
  <div id="masksalmond" class="absolute object-cover h-full w-full invisible"> <img class="object-cover h-full w-full" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187053154%2FdorptVQTHsbkYC60NSlt-1567170849457-mTrveExUlJpsEInPt1KX?alt=media&token=6334cd99-2f26-4db9-8c1b-0cf4400a26cd" onClick={() => layerreset()}/> </div>
  <div id="masksnatural" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187274393%2FdorptVQTHsbkYC60NSlt-1567170849457-mTrveExUlJpsEInPt1KX?alt=media&token=fbc71106-b097-4c67-88a5-8edb6f97c421" onClick={() => layerreset()}/> </div>
  <div id="maskstaupe" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187566938%2FdorptVQTHsbkYC60NSlt-1567170849457-mTrveExUlJpsEInPt1KX?alt=media&token=aca48ffd-c464-4936-b85c-7249bbb64ea9" onClick={() => layerreset()}/> </div>

  <div id="roble" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563188157445%2FdorptVQTHsbkYC60NSlt-1567170849457-R4eHqq0Zi1Hb6GrP8JuV?alt=media&token=f4e0519e-1ba8-4eac-b861-9ae4fe974dfe" onClick={() => layerreset()}/> </div>
  <div id="blanco" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566226732308%2FdorptVQTHsbkYC60NSlt-1567170849457-R4eHqq0Zi1Hb6GrP8JuV?alt=media&token=aa9507b1-052e-4198-874c-fee3e426e783" onClick={() => layerreset()}/> </div>
  <div id="cement" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227071639%2FdorptVQTHsbkYC60NSlt-1567170849457-R4eHqq0Zi1Hb6GrP8JuV?alt=media&token=6b3fde80-199c-4f94-840e-6f6c85ed6ec2" onClick={() => layerreset()}/> </div>
  <div id="mouse" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227117039%2FdorptVQTHsbkYC60NSlt-1567170849457-R4eHqq0Zi1Hb6GrP8JuV?alt=media&token=3c73d48e-b879-413a-9b89-4f6f2e1d13e2" onClick={() => layerreset()}/> </div>
  <div id="eucalyptus" class="absolute object-cover h-full w-full invisible"> <img  class="object-cover h-full w-full"src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227938972%2FdorptVQTHsbkYC60NSlt-1567170849457-R4eHqq0Zi1Hb6GrP8JuV?alt=media&token=6f6e6070-bddf-4b7b-9a74-3210eebb5713" onClick={() => layerreset()}/> </div>


     <div id="fingerprint1" class="w-1/4 h-1/4 absolute top-34 right-2" onClick={() => imageClick2()}><button><img src="/imagenes/fingerprint2.png" class="h-14 sm:h-14 hover:opacity-100" /></button></div>
     <div id="fingerprint2" class="w-1/4 h-1/4 absolute  bottom-0 left-16" onClick={() => imageClick1()}><button><img src="/imagenes/fingerprint.png" class="h-14 sm:h-14 hover:opacity-100" /></button></div>

          <div id="refresh" class="w-20 h-20 absolute bg-slate-200 opacity-60 top-10 left-10 rounded-lg p-4" onClick={() => clickrefresh()}><img class="absolute w-28 h-22 top-0 left-0" src="/imagenes/refresh.png" /></div>
          
     <div id="maskscrolvertical" class="absolute left-0 h-80 w-1/4 overflow-x-auto  invisible">
                    <section>
                    <svg  class="h-12 w-24"  fill="none" viewBox="0 0 20 20">
                    <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                    </section>

               <section class="flex-none h-28 scroll-snap-align-center relative group" onClick={() => layeralmond()}>
                    <span class=" flex h-28 w-28 bg-white " >
                    <img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187053154%2Fpreview?alt=media&token=d5dcbb60-8267-43d6-94e6-2ab245ce6583" />
                    <div class=" px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100"> Tanzania Almond</div>
                    </span>
               </section>
               <section class="flex-none h-28 scroll-snap-align-center mt-2 relative group" onClick={() => layernatural()}>
                    <span class=" flex h-28 w-28 bg-white">
                    <img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187274393%2Fpreview?alt=media&token=1006c9f0-30ee-41e2-979e-0797df79d219"/>
                    <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100"> Tanzania Natural</div>
                    </span>
               </section>
               <section class="flex-none h-28 scroll-snap-align-center mt-2 relative group" onClick={() => layertaupe()}>
                    <span class=" flex h-28 w-28 bg-white">
                    <img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563187566938%2Fpreview?alt=media&token=ed0af5cc-aca5-4ae5-84f3-699d6d1710b4"/>
                    <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100"> Tanzania Taupe</div>
                    </span>
               </section>
                    <section>
                    <svg  class="h-12 w-24" fill="none" viewBox="0 0 20 20" >
                    <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </section>

     </div>   

     <div id="maskscrolhorizontal" class="absolute flex overflow-x-auto space-x-8 w-1/3 top-0 right-40  invisible">
          <section>
          <svg  class="h-24 w-12"  fill="none" viewBox="0 0 20 20">
          <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          </section>
           <section class="flex-shrink-0 h-38 w-28 group" onClick={() => layerroble()}>
              <span class=" flex h-28 w-28 bg-white"><img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1563188157445%2Fpreview?alt=media&token=7af46d73-63c0-4344-a23c-92f8d2cfc949"  /></span>
              <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100">Roble orgánico</div>
           </section>
           <section class="flex-shrink-0 h-38 w-28 group" onClick={() => layerblanco()}>
              <span class=" flex h-28 w-28 bg-white"><img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566226732308%2Fpreview?alt=media&token=2301b590-6114-4965-b70f-c3e4617a7a83" /></span>
                  <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100">Blanco Núbol</div>
            </section>
           <section class="flex-shrink-0 h-38 w-28 group" onClick={() => layercement()}>
              <span class=" flex h-28 w-28 bg-white"><img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227071639%2Fpreview?alt=media&token=b5ec6589-3120-47a2-9d1e-62780c668c9f" /></span>
                      <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100">Cement Mate</div>
            </section>
           <section class="flex-shrink-0 h-38 w-28 group" onClick={() => layermouse()}>
              <span class=" flex h-28 w-28 bg-white"><img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227117039%2Fpreview?alt=media&token=66bea65f-dc8f-4a2d-9b29-e52d65e95f10"  /></span>
                      <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100">Mouse Mate</div>
            </section>
           <section class="flex-shrink-0 h-38 w-28 group" onClick={() => layereucalyptus()}>
              <span class=" flex h-28 w-28 bg-white"><img class=" h-26 w-26 mt-2 ml-2 mb-2 mr-2" src="https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/materials%2F1566227938972%2Fpreview?alt=media&token=467b4482-bf29-4ed8-842b-eed5cbd1ac5b" /></span>
              <div class="px-2 text-2xl text-white font-semibold opacity-0 group-hover:opacity-100 duration-100">Eucalyptus Blond</div>
            </section>
          <section>
               <svg  class="h-24 w-12"  fill="none" viewBox="0 0 20 20">
               <path stroke='white' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
               </svg>
          </section>
     </div>
</div> 


  )
}
