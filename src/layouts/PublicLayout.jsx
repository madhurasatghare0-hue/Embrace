// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/common/Navbar'
// import Footer from '../components/common/Footer'

// function PublicLayout() {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default PublicLayout












// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/common/Navbar'
// import Footer from '../components/common/Footer'

// function PublicLayout() {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden">
//       {/* Soft purple/orange wash behind every public page */}
//       <div
//         className="fixed inset-0 -z-10"
//         style={{
//           background: 'linear-gradient(160deg, #F3E8FC 0%, #FBF5F0 42%, #FDE9DC 100%)',
//         }}
//       />

//       <Navbar />
//       <main className="relative z-10">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default PublicLayout






import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function PublicLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FCFAFD]">
      
      {/* Light pastel purple/orange background */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#FCFAFD]">
        
        {/* Top left - very light purple */}
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] bg-[#F3E8F8] rounded-full blur-3xl opacity-70" />
        
        {/* Top right - very light peach */}
        <div className="absolute -top-24 right-[-80px] w-[460px] h-[460px] bg-[#FDEBDD] rounded-full blur-3xl opacity-70" />
        
        {/* Bottom left - soft lavender */}
        <div className="absolute bottom-[-120px] left-[15%] w-[500px] h-[500px] bg-[#F7EFFA] rounded-full blur-3xl opacity-60" />
        
        {/* Bottom right - soft peach */}
        <div className="absolute bottom-[-160px] right-[5%] w-[480px] h-[480px] bg-[#FFF0E5] rounded-full blur-3xl opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default PublicLayout