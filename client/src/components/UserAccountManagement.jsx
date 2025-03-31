import { useAuth } from "../context/AuthContext";
import AuthForm from "./common/AuthForm";
import UserProfile from "./UserProfile";

function UserAccountManagement() {
  const { user, logout } = useAuth();

  if (user) {
    return <UserProfile name={user.name} onClick={logout} />;
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <AuthForm />
      </div>
    </div>
  );
}

export default UserAccountManagement;
