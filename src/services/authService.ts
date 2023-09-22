export default {
  setAuthenticatedUserId(userId: number) {
    localStorage.setItem("authenticatedUserId", userId.toString());
  },

  getAuthenticatedUserId(): number | null {
    const userId = localStorage.getItem("authenticatedUserId");
    return userId ? parseInt(userId) : null;
  },

  logout() {
    localStorage.removeItem("authenticatedUserId");
  },
};
