let apiKey = "adc5462f-f307-40de-84ca-bef1bf704f79";
let baseUrl = `http://intravision-task.test01.intravision.ru/api/${apiKey}/`;

export const RequestsListAPI = {
  getRequests() {
    return fetch(
      `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=adc5462f-f307-40de-84ca-bef1bf704f79`
    ).then((response) => response.json());
  },
  getStatuses() {
    return fetch(`${baseUrl}Statuses`).then((response) => response.json());
  },
  getPriorities() {
    return fetch(`${baseUrl}Priorities`).then((response) => response.json());
  },
  getUsers() {
    return fetch(`${baseUrl}Users`).then((response) => response.json());
  },
  addRequest(name, description, comment) {
    return fetch(`${baseUrl}Tasks`, {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json;odata.metadata=minimal;odata.streaming=true",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        comment: comment,
      }),
    });
  },
  putRequest(id, comment, statusId, executorId) {
    return fetch(`${baseUrl}Tasks`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        comment: comment,
        statusId: statusId,
        executorId: executorId,
      }),
    });
  },
};
