import { client, checkError } from './client';

export async function createTaskItem(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTaskList() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}
