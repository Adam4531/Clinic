// import { useEffect } from 'react';
import { Outlet} from 'react-router-dom';

// import { getTokenDuration } from '../util/auth';
import Navbar from './NavbarComponent';

function RootLayout() {
  // const token = useLoaderData()
  // const submit = useSubmit();
  // useEffect(()=>{
  //   if(!token){
  //     return
  //   }

  //   if(token==='EXPIRED'){
  //     submit(null, {action: '/logout', method: 'post'})
  //     return;
  //   }

  //   const tokenDuration = getTokenDuration()
  //   console.log(tokenDuration)
  //   setTimeout(()=>{
  //     submit(null, {action: '/logout', method: 'post'})
  //   }, tokenDuration)
  // }, [token, submit])


return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;