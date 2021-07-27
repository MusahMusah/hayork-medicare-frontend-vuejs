<template>
  <div class="row" v-if="patients.lenght > 0">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="mb-0 card-title">All Shared Patients Encounter</h4>
          <div class="card-options">
            <a
              class="card-options-collapse"
              href="#"
              data-toggle="card-collapse"
              ><i class="fe fe-chevron-up"></i></a
            ><a class="card-options-remove" href="#" data-toggle="card-remove"
              ><i class="fe fe-x"></i
            ></a>
          </div>
        </div>
        <div class="mb-0 table-responsive">
          <table class="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Visit Type</th>
                <th>Height</th>
                <th>Weight</th>
                <th>BMI</th>
                <th>Diagnosis</th>
                <th>Treatment Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(encounter, index) in patients" :key="index">
                <td>{{encounter.date}}</td>
                <td>{{encounter.time}}</td>
                <td>{{encounter.visit_type}}</td>
                <td>{{encounter.height}}</td>
                <td>{{encounter.weight}}</td>
                <td>{{encounter.bmi}}</td>
                <td>{{encounter.diagnosis}}</td>
                <td>{{encounter.treatment_plan}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row">
   <div class="col-md-12">
      <div class="text-center card">
        <div class="card-body">
          <h3>No Encounter Yet</h3>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    patients: {
      type: Array,
      default: () => {},
    }
  }
};
</script>

<style>
</style>