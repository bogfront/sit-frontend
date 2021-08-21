<script>
import { VueFinalModal } from 'vue-final-modal'

import { renderRandomData } from '@/utils/randomData';
import { getRowTemplate } from '@/utils/templateGenerator';

export default {
  name: "UITable",

  inject: ['clusterize'],

  components: {
    VueFinalModal,
  },

  data: () => ({
    table: null,

    showModal: false,
    modalContent: {}
  }),

  mounted () {
    this.createCluster();
  },

  methods: {
    createCluster () {
      this.table = new this.clusterize({
        rows: this.getData(10),
        scrollElem: this.$refs.scrollArea,
        contentElem: this.$refs.contentArea,
      })
    },

    getData(amount) {
      const result = [];

      for (let i = 1; i < amount; i++) {
        const rowData = renderRandomData();
        result.push(getRowTemplate(rowData));
      }

      return result;
    },

    appendData (amount) {
      this.table.append(this.getData(amount));
    },

    showDetails ($event) {
      this.modalContent = JSON.parse($event.target.parentElement.dataset.info.replaceAll('\'', '"'));
      this.showModal = true;
    }
  }
}
</script>

<template>
  <div class="ui-table">
    <div style="margin-bottom: 16px;">
      <button @click="appendData(5)">Add 5</button>
      <button @click="appendData(50)">Add 50</button>
      <button @click="appendData(10000)">Add 10k</button>
      <button @click="appendData(200000)">Add 200k</button>
    </div>

    <div class="clusterize">
      <div ref="scrollArea" class="clusterize-scroll">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Formula</th>
              <th>Lattice</th>
              <th>Size</th>
              <th>Point type</th>
              <th>Line type</th>
              <th>Surface type</th>
              <th>Total energy (eV)</th>
              <th>Pressure (kbar)</th>
              <th>Fermi energy (eV)</th>
              <th>Total force (eV/Angstrom)</th>
              <th>Direct bandgap (eV)</th>
              <th>Indirect bandgap (eV)</th>
              <th>Band structure (array)</th>
              <th>Density of states (array)</th>
              <th>Elastic properties (1D array)</th>
            </tr>
          </thead>
          <tbody
            ref="contentArea"
            class="clusterize-content"
            @click="showDetails"
          >
            <tr class="clusterize-no-data">
              <td>Loading data…</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <VueFinalModal
    v-model="showModal"
    classes="modal-container"
    content-class="modal-content"
  >
    <span class="modal__title">Информация об эксперименте</span>

    <div class="modal__content">
      <div class="modal__content-item"><b>Name:</b> {{ modalContent.name }}</div>
      <div class="modal__content-item"><b>Formula:</b> {{ modalContent.formula }}</div>
      <div class="modal__content-item"><b>Lattice:</b> {{ modalContent.lattice }}</div>
      <div class="modal__content-item"><b>Size:</b> {{ modalContent.size }}</div>
      <div class="modal__content-item"><b>Point type:</b> {{ modalContent.pointType }}</div>
      <div class="modal__content-item"><b>Line type:</b> {{ modalContent.lineType }}</div>
      <div class="modal__content-item"><b>Surface type:</b> {{ modalContent.surfaceType }}</div>
      <div class="modal__content-item"><b>Total energy (eV):</b> {{ modalContent.totalEnergy }}</div>
      <div class="modal__content-item"><b>Pressure (kbar):</b> {{ modalContent.pressure }}</div>
      <div class="modal__content-item"><b>Fermi energy (eV):</b> {{ modalContent.fermiEnergy }}</div>
      <div class="modal__content-item"><b>Total force (eV/Angstrom):</b> {{ modalContent.totalForce }}</div>
      <div class="modal__content-item"><b>Direct bandgap (eV):</b> {{ modalContent.directBandgap }}</div>
      <div class="modal__content-item"><b>Indirect bandgap (eV):</b> {{ modalContent.indirectBandgap }}</div>
      <div class="modal__content-item"><b>Band structure (array):</b> <img :src="modalContent.bandStructure" alt=""></div>
      <div class="modal__content-item"><b>Density of states (array):</b> <img :src="modalContent.densityStates" alt=""></div>
      <div class="modal__content-item"><b>Elastic properties (1D array):</b> {{ modalContent.elasticProperties }}</div>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
body {
  font: normal 16px/1.2 Calibri, sans-serif;
}

table {
  width: 100%;
  border: 1px solid #000;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    position: sticky;
    top: -1px;
    background: #ffffff;
  }
}

.clusterize {
  th {
    border: 1px solid #000;
    padding: 8px 4px;
    background: #333;
    color: #fff;
    font-weight: 600;
  }

  td {
    border: 1px solid #000;
    padding: 4px;

    img {
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
  }

  tr {
    &:hover td {
      background: #f1f1f1;
    }
  }
}


/* max-height - the only parameter in this file that needs to be edited.
 * Change it to suit your needs. The rest is recommended to leave as is.
 */
.clusterize-scroll{
  max-height: 100vh;
  overflow: auto;
}

/**
 * Avoid vertical margins for extra tags
 * Necessary for correct calculations when rows have nonzero vertical margins
 */
.clusterize-extra-row{
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

/* By default extra tag .clusterize-keep-parity added to keep parity of rows.
 * Useful when used :nth-child(even/odd)
 */
.clusterize-extra-row.clusterize-keep-parity{
  display: none;
}

/* During initialization clusterize adds tabindex to force the browser to keep focus
 * on the scrolling list, see issue #11
 * Outline removes default browser's borders for focused elements.
 */
.clusterize-content{
  outline: 0;
  counter-reset: clusterize-counter;
}

/* Centering message that appears when no data provided
 */
.clusterize-no-data td{
  text-align: center;
}



.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  text-align: left;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.modal__content-item {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: normal;

  img {
    display: block;
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin: 8px auto 16px;
  }
}

.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
