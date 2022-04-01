export const loadUsers = (offset = 0) =>
  fetch(`https://test.relabs.ru/api/users/list?offset=${offset}`).then((r) =>
    r.json()
  );
