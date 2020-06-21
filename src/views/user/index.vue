<template>
  <div class="app-container">
    <vue-good-table
      url="/user"
      :columns="columns"
      :rows="rows"
      mode="remote"
      :totalRows="total"
      :pagination-options="{
        enabled: true
      }"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        placeholder: 'Search this table',
        searchFn: searchQuery
      }"
    >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <el-button type="success" size="mini" icon="el-icon-edit"
            >Edit</el-button
          >
          <el-button type="danger" size="mini" icon="el-icon-delete"
            >Delete</el-button
          >
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
      <div slot="selected-row-actions">
        <el-button type="success" size="mini" icon="el-icon-edit"
          >Edit</el-button
        >
        <el-button type="danger" size="mini" icon="el-icon-delete"
          >Delete</el-button
        >
      </div>
      <div slot="table-actions">
        <el-button type="primary" size="mini" icon="el-icon-plus"
          >Add</el-button
        >
      </div>
    </vue-good-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  data() {
    return {
      total: 0,
      columns: [
        {
          label: "ID",
          field: "id"
        },
        {
          label: "UserName",
          field: "username",
          filterable: true
        },
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Mobile",
          field: "mobile"
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "120px"
        },
        {
          label: "Action",
          field: "action",
          sortable: false,
          width: "210px"
        }
      ],
      listLoading: true,
      rows: []
    };
  },
  created() {
    getList().then(response => {
      this.total = response.data.total;
      this.rows = response.data.list;
    });
  },
  methods: {
    searchQuery(row, col, cellValue, searchTerm) {
      return cellValue.contains(searchTerm);
    }
  }
};
</script>

<style></style>
