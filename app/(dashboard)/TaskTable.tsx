export default function TaskTable() {    
    return (
        <div className="flex flex-col mt-4">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-green-400">
              <tr>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</td>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* {users.map((user, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.manager}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      );
}