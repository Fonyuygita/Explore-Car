// import { SignIn } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs/app-beta";
 
export default function Page() {
  return (
    <div className="flex justify-center h-screen flex-center">
  <SignUp />;
  </div>
  )
    
}