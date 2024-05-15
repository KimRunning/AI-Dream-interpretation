"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface DreamContent {
  id: string;
  createdAt: string;
  content: string;
  role: string;
}

interface Dream {
  content: DreamContent[];
  _id: string;
}

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetSearch: () => void;
  fetchDreams: (query?: string) => void;
  dreams: Dream[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dreams, setDreams] = useState<Dream[]>([]);

  const resetSearch = () => {
    setSearchQuery("");
  };

  const fetchDreams = useCallback(async (query?: string) => {
    try {
      const url = query ? `/api/searchDream?query=${query}` : "/api/getDream";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching dreams data");
      }

      const data = await response.json();
      const transformedDreams: Dream[] = data.map((dream: any) => ({
        content: dream.dream,
        _id: dream._id,
      }));
      setDreams(transformedDreams);
    } catch (err) {
      console.error("Error fetching dreams data:", err);
    }
  }, []);

  return <SearchContext.Provider value={{ searchQuery, setSearchQuery, resetSearch, fetchDreams, dreams }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
