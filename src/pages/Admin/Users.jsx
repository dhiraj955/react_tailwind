import React from 'react';
import { useApiCall } from '../../hooks/useApiCall';
import { fetchUserAxios } from '../../services/userService';

function Users() {
  const { data, error, loading } = useApiCall(fetchUserAxios);

  if (loading) {
    return <div className="text-center py-8 text-gray-600 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500 text-lg">Error: {error.message}</div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div className="text-center py-8 text-gray-500">No data available</div>;
  }

  return (
    <div className="w-[95%] lg:w-[80%] mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 border-b">ID</th>
              <th className="text-left py-3 px-4 border-b">Email</th>
              <th className="text-left py-3 px-4 border-b">Username</th>
              <th className="text-left py-3 px-4 border-b">Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{user.id}</td>
                <td className="py-3 px-4 border-b">{user.email}</td>
                <td className="py-3 px-4 border-b">{user.username}</td>
                <td className="py-3 px-4 border-b text-red-500 font-mono">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
