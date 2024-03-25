const apiDomain = process.env.NEXT_PUBLIC_API || null;

// fetch all properties
async function fetchProperties() {

    try {
        // handle the case where the domain isn't available yet
      if (!apiDomain) {
        return [];
      }  
      
      const res = await fetch(`${apiDomain}/properties`);
  
      if (!res.ok) {
        throw new Error('Failed to load properties!');
      }
  
      return res.json();
  
    } catch (error) {
      console.log(error);
      return [];
    }
  
  }
  
  // fetch single property

  async function fetchProperty(id) {

    try {
        // handle the case where the domain isn't available yet
      if (!apiDomain) {
        return [];
      }  
      
      const res = await fetch(`${apiDomain}/properties/${id}`);
  
      if (!res.ok) {
        throw new Error('Failed to load properties!');
      }
  
      return res.json();
  
    } catch (error) {
      console.log(error);
      return null;
    }
  
  }

  export { fetchProperties, fetchProperty }