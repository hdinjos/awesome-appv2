<template>
  <div>
    <table class="generic-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Username</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.admin ? "admin" : "not admin" }}</td>
          <td>
            <button @click="asAdmin(user)" class="btn-table">
              Assign to Admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { listUsers, assignToAdmin } from "@/services/users.js";
export default {
  data: () => ({
    users: [],
  }),
  methods: {
    async asAdmin(user) {
      await assignToAdmin(user.username);
      const data = await listUsers();
      this.users = data.users;
    },
  },
  mounted() {
    const getAllUsers = async () => {
      const data = await listUsers();
      this.users = data.users;
    };
    getAllUsers();
  },
};
</script>

<style src="./styles/table.scss" lang="scss" scoped>
</style>