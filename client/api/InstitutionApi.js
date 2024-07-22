// api/InstitutionApi.js

import { useState, useEffect } from "react";

export const useGetInstitutions = () => {
  const [institutions, setInstitutions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRefetching, setIsRefetching] = useState(false);

  const fetchInstitutions = async (categories) => {
    setIsLoading(true);
    setIsRefetching(true);
    try {
      const baseUrl = "http://localhost:3000/api/institutions";
      let url = baseUrl;

      // Append categories as query parameters if provided
      if (categories && categories.length > 0) {
        const categoryParams = categories.join(",");
        const params = new URLSearchParams({ institutionType: categoryParams });
        url = `${baseUrl}?${params.toString()}`;
      }

      console.log("Fetching institutions from URL:", url);
      const response = await fetch(url);
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setInstitutions(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching institutions:", error);
      setError(error);
      setInstitutions([]);
    } finally {
      setIsLoading(false);
      setIsRefetching(false);
    }
  };

  // Initial fetch (without categories)
  useEffect(() => {
    fetchInstitutions([]);
  }, []);

  // Fetch institutions when categories change
  const refetch = (categories) => {
    fetchInstitutions(categories);
  };

  console.log("Returning institutions:", institutions);
  console.log("isLoading:", isLoading);
  console.log("error:", error);
  console.log("isRefetching:", isRefetching);

  return { institutions, isLoading, error, refetch, isRefetching };
};
