"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { Dream } from "../types";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resetSearch: () => void;
  fetchDreams: (query?: string, cursor?: string) => Promise<{ dreams: Dream[]; nextCursor: string | null }>;
  dreams: Dream[];
  nextCursor: string | null;
  setDreams: React.Dispatch<React.SetStateAction<Dream[]>>;
  setNextCursor: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);

  const resetSearch = () => {
    setSearchQuery("");
    setDreams([]);
    setNextCursor(null);
  };

  const fetchDreams = useCallback(async (query: string = "", cursor: string | null = null) => {
    try {
      const url = cursor ? `/api/scrollDream?query=${query}&cursor=${cursor}` : `/api/scrollDream?query=${query}`;
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
      return { dreams: data.dreams, nextCursor: data.nextCursor };
    } catch (err) {
      console.error("Error fetching dreams data:", err);
      return { dreams: [], nextCursor: null };
    }
  }, []);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, resetSearch, fetchDreams, dreams, nextCursor, setDreams, setNextCursor }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
