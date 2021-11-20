import React from 'react';

const ErrorMessage = () => {
return(
    <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
  <p class="font-bold">Uh-oh! Invalid email or password.</p>
  <p class="text-sm">Check to make sure of your information or Sign up if you haven't.</p>
</div>
)

}

export default ErrorMessage;