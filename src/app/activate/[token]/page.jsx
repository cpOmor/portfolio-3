'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";


const ActivationPage = () => {
    const router = useRouter();
  const {token} = useParams()

  useEffect(() => {
    const activateUser = async () => {
      if (token) {
        try {
          // Send activation request to backend
          const response = await fetch(`http://localhost:5000/api/users/activate/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            // Activation successful, redirect user to login page
            router.push('/login');
          } else {
            console.error('Activation failed:', response.statusText);
            // Handle activation failure
          }
        } catch (error) {
          console.error('Error during activation:', error);
          // Handle network errors or other unexpected errors
        }
      }
    };

    activateUser();
  }, [token, router]);

  return (
    <div>
      <p>Activating user...</p>
    </div>
  );
};

export default ActivationPage;
