let authenticated = false;

class AuthService {
  setAuthenticated(value: boolean) {
    authenticated = value;
  };

  getAuthenticated() {
    return authenticated;
  }
}

export default new AuthService();