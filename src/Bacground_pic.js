import Car from './images/backcar.jpg'

export default function Backgroundcar(){
    return(
        <div className="relative top-28">
            <div>
                <p><img src={Car} alt="Backgroundcar"></img></p>
                </div>
                <div className="relative bottom-72 left-20 uppercase">
                    <p className="text-7xl font-extrabold">india's no-1</p>
                    <p className="text-xl font-medium">auto tech aggregation platform</p>
                </div>

        </div>
    )
}