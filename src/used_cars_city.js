import Maruthi from './images/maruthi.jpg';
import Ford from './images/ford.jpg'
import Chevrolet from './images/chevrolet.jpg'
import Honda from './images/honda.jpg'
import Mahindra from './images/mahindra.jpg'
import Volkswagen from './images/volkswagen.jpg'




export default function Usedcarcity(){
    return(
        <div className="flex justify-center relative bottom-10 bg-emerald-400" id="used_car_city">
        <div className="grid grid-flow-row-dense ">
            <div className="flex justify-center text-3xl font-extrabold">
                <p>Used Cars</p>

            </div>
            <div className="flex justify-center gap-16 font-medium text-stone-500">
                <p className="hover:text-black">By City</p>
                <p  className="hover:text-black">By Price</p>
                <p  className="hover:text-black">By Model</p>
                <p  className="hover:text-black">By Body Type</p>
                <p  className="hover:text-black">By Make</p>
          </div>
          <div className="w-full h-0.5 bg-black relative bottom-7"></div>
            <div className="flex justify-center">
                <div className="grid grid-flow-row-dense gap-10">
                <div className="flex gap-10 relative bottom-10">
                    <div>
                    <p><img src={Maruthi} alt="maruthi" className="w-40 h-40"></img></p>
                    </div>
                    <div><p><img src={Ford} alt="" className="w-40 h-40"></img></p>
                    </div>
                    <div><p><img src={Chevrolet} alt="" className="w-40 h-40"></img></p>
                    </div>

                </div>
                <div className="flex gap-10 relative bottom-10">
                   <div><p><img src={Honda} alt="" className="w-40 h-40"></img></p>
                   </div>
                    <div><p><img src={Mahindra} alt="" className="w-40 h-40"></img></p>
                    </div>
                 <div><p><img src={Volkswagen} alt="" className="w-40 h-40"></img></p>
                 </div>

                </div>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="bg-blue-500 w-40 h-7 text-center rounded-lg hover:font-bold">View All</p>
            </div>

        </div>
        </div>
    )
}