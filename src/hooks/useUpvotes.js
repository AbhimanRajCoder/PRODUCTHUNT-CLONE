import { useState, useEffect, useCallback } from 'react';

export const useUpvotes = (productId, initialCount) => {
  const [upvotes, setUpvotes] = useState(() => {
    const localUpvoteCount = localStorage.getItem(`upvote_count_product_${productId}`);
    return localUpvoteCount ? parseInt(localUpvoteCount) : initialCount;
  });

  const [hasUpvoted, setHasUpvoted] = useState(() => {
    return !!localStorage.getItem(`upvoted_product_${productId}`);
  });

  useEffect(() => {
    // Update count if initialCount changes and we don't have a local value yet
    const localUpvoteCount = localStorage.getItem(`upvote_count_product_${productId}`);
    if (localUpvoteCount === null && initialCount !== undefined) {
      setUpvotes(initialCount);
    }
  }, [productId, initialCount]);

  const syncState = useCallback(() => {
    const localUpvoteCount = localStorage.getItem(`upvote_count_product_${productId}`);
    const savedUpvote = localStorage.getItem(`upvoted_product_${productId}`);
    
    if (localUpvoteCount !== null) {
      setUpvotes(parseInt(localUpvoteCount));
    }
    setHasUpvoted(!!savedUpvote);
  }, [productId]);

  useEffect(() => {
    // Listen for storage events (other tabs)
    const handleStorageChange = (e) => {
      if (e.key === `upvote_count_product_${productId}` || e.key === `upvoted_product_${productId}`) {
        syncState();
      }
    };

    // Listen for custom events (same tab, different components)
    const handleCustomSync = (e) => {
      if (e.detail && e.detail.productId === productId) {
        syncState();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('product-upvote-sync', handleCustomSync);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('product-upvote-sync', handleCustomSync);
    };
  }, [productId, syncState]);

  const toggleUpvote = () => {
    let newCount;
    let newHasUpvoted;

    if (hasUpvoted) {
      newCount = upvotes - 1;
      newHasUpvoted = false;
      localStorage.removeItem(`upvoted_product_${productId}`);
    } else {
      newCount = upvotes + 1;
      newHasUpvoted = true;
      localStorage.setItem(`upvoted_product_${productId}`, "true");
    }

    localStorage.setItem(`upvote_count_product_${productId}`, newCount);
    setUpvotes(newCount);
    setHasUpvoted(newHasUpvoted);

    // Dispatch custom event for same-tab syncing
    window.dispatchEvent(new CustomEvent('product-upvote-sync', {
      detail: { productId, newCount, hasUpvoted: newHasUpvoted }
    }));
  };

  return { upvotes, hasUpvoted, toggleUpvote };
};
