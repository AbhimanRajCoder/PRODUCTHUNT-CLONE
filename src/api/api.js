const BASE_URL = import.meta.env.DEV ? 'http://localhost:5001' : '';
const DB_URL = '/db.json';

/**
 * A central API utility to handle fetching data in both development and production.
 * In production, it fetches the entire db.json and simulates the json-server endpoints.
 */
export const api = {
  getProducts: async () => {
    try {
      if (import.meta.env.DEV) {
        const res = await fetch(`${BASE_URL}/products`);
        if (res.ok) return await res.json();
      }
      
      // Fallback for production or if local server is down
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.error('API Error (getProducts):', error);
      // Final fallback
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.products;
    }
  },

  getProductById: async (id) => {
    try {
      if (import.meta.env.DEV) {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (res.ok) return await res.json();
      }

      // Fallback
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.products.find(p => p.id === id);
    } catch (error) {
      console.error('API Error (getProductById):', error);
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.products.find(p => p.id === id);
    }
  },

  getThreads: async () => {
    try {
      if (import.meta.env.DEV) {
        const res = await fetch(`${BASE_URL}/threads`);
        if (res.ok) return await res.json();
      }

      // Fallback
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.threads;
    } catch (error) {
      console.error('API Error (getThreads):', error);
      const res = await fetch(DB_URL);
      const data = await res.json();
      return data.threads;
    }
  },

  updateProduct: async (id, updates) => {
    try {
      if (import.meta.env.DEV) {
        const res = await fetch(`${BASE_URL}/products/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updates),
        });
        if (res.ok) return await res.json();
      }
      
      // In production, we can't persist to db.json
      // We just return the updates as if they were successful
      console.warn('Production: Mutations are local-only and will not persist to db.json');
      return { id, ...updates };
    } catch (error) {
      console.error('API Error (updateProduct):', error);
      return { id, ...updates };
    }
  }
};
