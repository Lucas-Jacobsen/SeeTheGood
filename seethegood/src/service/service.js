class Service {
    async submitUser(newUser) {
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        if (!response.ok) {
          // Handle error here
          console.error('Error submitting user:', response.status, response.statusText);
          return false;
        }
  
        // If the response is successful, you can handle the result as needed
        const result = await response.json();
        console.log('User submitted successfully:', result);
        return true;
      } catch (error) {
        console.error('Error submitting user:', error);
        return false;
      }
    }
  }
  
  export default Service;
  