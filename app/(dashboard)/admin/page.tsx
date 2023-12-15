import { getAllManagers } from '@/lib/user';
import AddUserPopup, { ManagerOption } from './AddUserPopup';

export default async function AdminDashboard() {
  const managers = await getAllManagers();

  return (
    <div className="flex min-h-screen flex-col max-w-7xl pt-16 mx-auto">
      <div>
        <AddUserPopup
          managers={managers.map((manager) => {
            return {
              name: manager.name,
              id: manager.id,
            } as ManagerOption;
          })}
        />
      </div>
    </div>
  );
}
