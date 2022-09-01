import React from 'react';
import { Link } from 'react-router-dom'



function Nav() {

  return (
    <div class="p-2 flex justify-between items-center bg-orange-200/75">
      <div>
        <Link to="/"><img src="https://img.icons8.com/color/344/amazon.png" class="md:w-20 w-16" /></Link>
      </div>


      <img src="https://img.icons8.com/ios-filled/344/shopping-cart.png" class="md:w-20 w-16 mr-2" />

    </div>
  );
}

export default Nav;