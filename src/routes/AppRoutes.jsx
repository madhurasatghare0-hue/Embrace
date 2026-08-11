// import { createBrowserRouter } from 'react-router-dom'
// import PublicLayout from '../layouts/PublicLayout'
// import Home from '../pages/Home'
// import About from '../pages/About'
// import Services from '../pages/Services'
// import CarePackages from '../pages/CarePackages'
// import HowItWorksPage from '../pages/HowItWorks'
// import Blog from '../pages/Blog'
// import Contact from '../pages/Contact'
// import Login from '../pages/Login'
// import CitizenRegister from '../pages/citizen/Register'
// import CaretakerRegister from '../pages/caretaker/Register'
// import AdminLayout from '../layouts/AdminLayout'
// import AdminDashboard from '../pages/admin/Dashboard'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <PublicLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'services', element: <Services /> },
//       { path: 'care-packages', element: <CarePackages /> },
//       { path: 'how-it-works', element: <HowItWorksPage /> },
//       { path: 'blog', element: <Blog /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'register/citizen', element: <CitizenRegister /> },
//       { path: 'register/caretaker', element: <CaretakerRegister /> },
//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },

//   {
//   path: '/admin',
//   element: <AdminLayout />,
//   children: [
//     { index: true, element: <AdminDashboard /> },
//   ],
// },
// ])

// export default router













import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import CarePackages from '../pages/CarePackages'
import HowItWorksPage from '../pages/HowItWorks'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import CitizenRegister from '../pages/citizen/Register'
import CitizenSelectPlan from '../pages/citizen/SelectPlan'
import CitizenDashboard from '../pages/citizen/Dashboard'
import CaretakerRegister from '../pages/caretaker/Register'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../pages/admin/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'care-packages', element: <CarePackages /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'register/citizen', element: <CitizenRegister /> },
      { path: 'register/caretaker', element: <CaretakerRegister /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/citizen/select-plan',
    element: <CitizenSelectPlan />,
  },
  {
    path: '/citizen/dashboard',
    element: <CitizenDashboard />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
    ],
  },
])

export default router