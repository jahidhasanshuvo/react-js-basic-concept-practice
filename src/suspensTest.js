import { Suspense } from "react";
import { fetchUserProfile } from "./fetchUserProfile";

const SuspensefulUserProfile = ({ userId }) => {
  const data = fetchUserProfile(userId);
  return (
    <Suspense fallback={<h1>Loading user {userId}</h1>}>
      <UserProfile resource={data} />
    </Suspense>
  );
};
const UserProfile = ({ resource }) => {
  const data = resource.userProfile.read();
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
};
export const UserProfileList = () => (
  <>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>
);
