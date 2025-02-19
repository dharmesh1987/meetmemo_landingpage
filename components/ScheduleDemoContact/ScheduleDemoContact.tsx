export default function ScheduleDemoContact() {
  return (
    <div id="demo" className="flex flex-col items-center justify-center  bg-[#7054F0] text-white px-4 sm:px-6 md:px-10 py-10">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center max-w-2xl mb-8 sm:mb-10 md:mb-12">
        Upgrade your team meetings with AI notes & task management.
      </h1>

      
      <div className="bg-white text-[#1F1654] rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">Schedule a Demo</h2>
        <p className="bg-[#F1E8FE] text-[#1F1654] p-3 sm:p-4 rounded-md text-sm sm:text-base mb-4">
          We’d be delighted to demo MeetMemo. Fill this form and our team will reach out soon.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFFFFF] focus:ring-2 focus:ring-[#7054F0] focus:outline-none"
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFFFFF] focus:ring-2 focus:ring-[#7054F0] focus:outline-none"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFFFFF] focus:ring-2 focus:ring-[#7054F0] focus:outline-none"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFFFFF] focus:ring-2 focus:ring-[#7054F0] focus:outline-none"
          />
        </div>

       
        <div className="flex justify-between">
          <button className="px-4 py-2 rounded-full bg-[#F1E8FE] text-[#7054F0] font-medium hover:bg-[#e0d1fd]">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-full bg-[#7054F0] text-white font-medium hover:bg-[#5a3bcf]">
            Submit
          </button>
        </div>
      </div>

      
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-xs sm:text-sm text-[#FFFFFF] mt-6 sm:mt-10 text-center sm:text-left">
        <span>© 2025</span>
        <div className="mt-2 sm:mt-0">
          <a href="#" className="hover:underline block sm:inline">Terms</a>
          <span className="mx-2 hidden sm:inline">|</span>
          <a href="#" className="hover:underline block sm:inline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}