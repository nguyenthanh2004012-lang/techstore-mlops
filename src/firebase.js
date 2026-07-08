// Mock Firebase setup
export const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: async (email, password) => {
    return { user: { email, uid: '12345', displayName: 'Test User' } };
  },
  createUserWithEmailAndPassword: async (email, password) => {
    return { user: { email, uid: '12345', displayName: 'Test User' } };
  },
  signOut: async () => {
    return true;
  }
};

export const mockDb = {
  // Mock methods can be added here
};
