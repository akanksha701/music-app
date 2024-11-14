export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  isDeleted: boolean;
  gender: string;
  dateOfBirth: Date;
  mobileNumber: number;
  favoriteSongs?: any[];
  playlists?: any[];
} 