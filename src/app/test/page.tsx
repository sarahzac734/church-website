import SmallCarousel from "../components/smallCarousel";


export default function Test() {
        return (
                <>
                <div className="pt-80">
                </div>

                <div className="border rounded-2xl border-slate-800 bg-cyan-800  w-200 h-120 mx-auto">
                        <div className="grid grid-cols-2">
                          <div className="-mx-12 mt-5"> <SmallCarousel/> </div>
                          <div>
                                <p className="mx-8 font-bold text-white text-2xl pt-10 pb-5 underline">Celebrating Hosanna Service</p>
                                <p className="mt-8 rounded-2xl mx-5 pt-10 bg-stone-100 w-auto h-80 p-4 text-xl text-center">On May 24th, 2024, we gathered as a community to celebrate the uplifting Hosanna Service, guided by the insightful leadership of Fr. Anil K Thomas. It was a day filled with gratitude, reflection, and spiritual renewal.</p>
                          </div>
                        </div>
                        
                </div>

                <div className="pb-1200">
                </div>
                </>
        )
}
       