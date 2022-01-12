import { client, checkError } from './client';

export async function createTaskItem(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function fetchTaskList() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function deleteTask(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}

export async function changeIsComplete(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}
