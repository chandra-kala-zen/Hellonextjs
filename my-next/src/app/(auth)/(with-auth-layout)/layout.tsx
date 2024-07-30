// import Link from "next/link";
// import { usePathname } from "next/navigation";


// const navLinks = [
//   {name :"Register", href:"/register"},
//   {name : "Login", href:"/login"},
//   {name : "forgot password", href:"/forgotpassword"}

// ]
// export default function auth({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   return (
//     <div>
//      <h1> inner content{children}</h1>
//      {
//       navLinks.map((link) => {
//         const isActive =pathname.startsWith(link.href);
//         return(
//           <Link href={link.href} 
//           key={link.name}
//           className={isActive ? "font-bold mr-4 ": "text-blue-400  ml-4"}
//           >{link.name}
//           </Link>
//         );
//       })
//      }
//     </div>
//   );
// }
