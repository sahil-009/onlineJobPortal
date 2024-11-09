import { Link } from 'react-router-dom';

import { Button } from './ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      {/* <h1 className="text-2xl">Job Portal</h1> */}
      {/* <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/saved-jobs" className="mr-4">Saved Jobs</Link>
        <Link to="/my-jobs" className="mr-4">My Jobs</Link>
        <Link to="/post-job" className="mr-4">Post Job</Link>
      </nav> */}

      <nav className='py-1 flex justify-between'>
        <Link>
        <img src="/logo.png" className='h-20'/>
        </Link>
        <div className='flex gap-8'>
      <SignedOut>
        <Button variant="outline">Login</Button>
        
      </SignedOut>
      <SignInButton />
        <Link to="/PostJob">
        <Button variant="destructive">
          Post Job
        </Button>
        

          </Button>
        </Link>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </nav>


    </header>
  );
};

export default Header;
