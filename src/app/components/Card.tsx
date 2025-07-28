import SmallCarousel from "./smallCarousel";


export default function Card () {
    return (
        <>
        <div className="border rounded-2xl border-slate-800 bg-cyan-800  w-300 h-130 mx-auto mb-20">
                        <div className="grid grid-cols-2">
                          <div className="mx-16 mt-10"> <SmallCarousel/> </div>
                          <div>
                                <p className="text-center font-bold text-white text-3xl pt-10 pb-5 ">Celebrating Hosanna Service</p>
                                <p className="mt-8 rounded-2xl mx-5 font-bold pt-10 bg-stone-100 w-auto h-80 p-4 text-xl text-center">On May 24th, 2024, we gathered as a community to celebrate the uplifting Hosanna Service, guided by the insightful leadership of Fr. Anil K Thomas. It was a day filled with gratitude, reflection, and spiritual renewal.</p>
                          </div>
                          </div>
                        
          </div>

          <div className="border rounded-2xl border-slate-800 bg-cyan-800  w-300 h-130 mx-auto mb-20">
                      <div className="grid grid-cols-2">
                            <div className="mx-16 mt-22"> <img className="w-130 h-90" src="/images/photo4.jpg" alt="hello"/> </div>
                                <div>
                                      <p className="text-center font-bold text-white text-3xl pt-10 pb-5 ">Dedication Service</p>
                                      <p className="mt-8 rounded-2xl mx-5 font-bold pt-10 bg-stone-100 w-auto h-80 p-4 text-xl text-center">Rev. Fr. Jacob Joseph Parathodathil conducted Dedication Service of four Altar Boys, Ryan Thyparambil, Noah Kunnirickal, Ethan Kodinjoor and Alby Kochumalathuseril on October 16, 2021. Holy Eucharist was conducted at St John the Baptist Knanaya Church, Washington DC. May these Altar Boys, serve around the Altar of God and His Church! </p>
                                </div>
                            </div>
          </div>
        </>
    )
}