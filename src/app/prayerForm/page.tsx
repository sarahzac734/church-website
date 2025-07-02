export default function PrayerForm(){
    return (
        <>
        <div className="pt-50 pb-20">
        <form>
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-black">Prayer Request Form</h2>
                <div className="mt-20 px-6">
            <div className=" mb-5">
                <input type="text" name="first_name" id="first_name" className="py-2.5 px-2 rounded-lg border-black w-100 border-1 text-sm text-gray-900" placeholder="First Name" required />
            </div>
            <div className=" mb-5">
                <input type="text" name="floating_last_name" id="floating_last_name" className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" placeholder="Last Name" required />
            </div>

            <div className="mb-5">
              <input type="email" name="floating_email" id="floating_email" className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" placeholder="Email" required />
          </div>

          <div className="mb-5">
              <input type="text" name="floating_email" id="floating_email" className="py-2.5 px-2 rounded-lg border-black border-1 w-100 text-sm text-gray-900" placeholder="Phone Number" />
          </div>
          </div>
          <div className="text-center">
          <textarea className="border-1 px-2 rounded-lg"rows={4} cols={50} placeholder="Comment"></textarea>
          </div>
          <button className="border-1 rounded-lg">Submit</button>
            </div>
        </form>
        </div>
        </>
    )
}