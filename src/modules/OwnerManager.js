const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  },
  removeAndList(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(this.getAll);
  }
}