<template>
    <div class="content">
        <div class="row">
        <div class="col-md-12">
            <div class="card">
            <div class="card-header d-none">
                <h5 class="card-title"></h5>
            </div>
            <div class="card-body">
                <h5>Users</h5>
                <table class="table datatable text-left" data-size="500">
                    <thead class="text-secondary">
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in list" :key="item.id">
                            <td class="img-row">
                            <div class="img-wrapper">
                                <img v-bind:src="item.avatar" class="img-raised">
                            </div>
                            </td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.first_name }}</td>
                            <td>{{ item.last_name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: 'auth',
  layout: 'default',
  data() {
    return { };
  },

  computed: {
    ...mapGetters(["loggedInUser"])
  },

  async asyncData({ $axios }) {
    return $axios
      .get('/users?page=2')
      .then(res => {
        return { list: res.data.data };
      })
      .catch(e => {});
  },

};
</script>