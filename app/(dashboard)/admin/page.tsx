import { getAllManagers, getAllUsers } from '@/lib/user';
import AddUserPopup, { ManagerOption } from './AddUserPopup';
import UserTable from './UserTable';

export default async function AdminDashboard() {
  const managers = await getAllManagers();
  const users = await getAllUsers();

  return (
    <div className="flex min-h-screen flex-col max-w-7xl pt-16 mx-auto p-4">
      <div>
        <AddUserPopup
          managers={managers.map((manager) => {
            return {
              name: manager.name,
              id: manager.id,
            } as ManagerOption;
          })}
        />
        <UserTable users={users.map((user) => {
          return {
            name: user.name,
            email: user.email,
            manager: managers.find((manager) => manager.id === user.managerId)?.name,
            role: user.role as any,
          };
        })} />
      </div>
    </div>
  );
}
