export interface Movie {
    id: string;
  
    title: string;
  
    description: string;
  
    genre: string[];
  
    cast: string[];
  
    director: string;
  
    releaseYear: number;
  
    language: string;
  
    rating: number;
  
    popularity: number;
  
    voteCount: number;
  
    score: number;
  }
  
  export interface SearchResponse {
    page: number;
  
    size: number;
  
    total: number;
  
    totalPages: number;
  
    executionTimeMs: number;
  
    results: Movie[];
  }
  