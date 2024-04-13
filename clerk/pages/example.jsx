import { UserButton, useClerk } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";

export default function Example() {
  const clerk = useClerk();
  const [userId, setUserId] = useState(null); // Use state to manage user ID

  useEffect(() => {
    if (
      clerk.user &&
      clerk.user.organizationMemberships &&
      clerk.user.organizationMemberships.length > 0
    ) {
      setUserId(clerk.user.organizationMemberships[0].role); // Set user ID from memberships
    } else {
      setUserId("User"); // Default to "User" if no membership or user
    }
  }, [clerk.user]); // Re-run useEffect on user changes

  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>
        {userId && (
          <>
            {userId === "org:admin" ? (
              <h1>Admin</h1>
            ) : (
              <h1>User</h1> // Display "User" for non-admins
            )}
          </>
        )}
      </div>
    </>
  );
}
