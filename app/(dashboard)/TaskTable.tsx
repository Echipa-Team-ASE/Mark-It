'use client';
import Button from '@/components/ui/Button';
import { TaskDetails } from '@/types/task';
import clsx from 'clsx';
import { useState } from 'react';

function ActivityButton({
  localTask,
  localTasks,
  setLocalTasks,
}: {
  localTask: TaskDetails;
  localTasks: TaskDetails[];
  setLocalTasks: (task: TaskDetails[]) => void;
}) {
  const statusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-400 text-yellow-800';
      case 'pending':
        return 'bg-green-400 text-green-800';
      case 'completed':
        return 'bg-indigo-400 text-indigo-800';
      default:
        return 'bg-gray-400 text-gray-800';
    }
  };
  return (
    <Button
      variant="custom"
      onClick={() => {
        const newStatus = localTask.status === 'open' ? 'pending' : 'completed';
        if (localTask.status !== 'completed') {
          fetch(`/api/task/${localTask.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status: newStatus,
            }),
          }).then((res) => {
            if (res.status.toString().startsWith('2')) {
              const newTasks: TaskDetails[] = localTasks.map((task) => {
                if (task.id === localTask.id) {
                  return {
                    ...task,
                    status: newStatus,
                  };
                } else {
                  return task;
                }
              });
              setLocalTasks(newTasks);
            } else {
              console.log('error');
            }
          });
        }
      }}
      className={clsx('inline-flex px-2 text-md font-semibold leading-5 rounded-full', statusColor(localTask.status))}
    >
      {localTask.status === 'open' ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
          </svg>
        </>
      ) : localTask.status === 'pending' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ) : localTask.status === 'completed' ? (
        <></>
      ) : (
        <></>
      )}
    </Button>
  );
}

export default function TaskTable({ tasks }: { tasks: TaskDetails[] }) {
  const [localTasks, setLocalTasks] = useState<TaskDetails[]>(tasks);
  const statusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-blue-800 bg-blue-100';
      case 'pending':
        return 'bg-yellow-400 text-yellow-800';
      case 'completed':
        return 'bg-green-400 text-green-800';
      case 'closed':
        return 'bg-indigo-400 text-indigo-800';
      default:
        return 'bg-gray-400 text-gray-800';
    }
  };
  return (
    <div className="flex flex-col mt-4">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-green-400">
          <tr>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</td>
            <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {localTasks.map((task, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <p
                  className={clsx(
                    'inline-flex px-4 py-2 text-md font-semibold leading-5 rounded-full',
                    statusColor(task.status)
                  )}
                >
                  {task.status}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.user}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.manager}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ActivityButton localTask={task} localTasks={localTasks} setLocalTasks={setLocalTasks} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
