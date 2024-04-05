"use client";

const useAuthToken = () => {
  const getItem = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("inuabizAuth");

      return { token };
    }
    // return { token: null }; // Return null if localStorage is not available
  };

  const clearAuthToken = () => {
    if (typeof window !== "undefined") {
      // Remove the token from local storage
      localStorage.removeItem("inuabizAuth");
    }
  };

  // Return the token and functions to update and clear it
  return { clearAuthToken, getItem };
};

export default useAuthToken;
