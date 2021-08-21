import {TableData} from '@/utils/randomData';

export function getRowTemplate (item: TableData) {
  return `
          <tr data-info="${JSON.stringify(item).replaceAll('"', '\'')}">
            <td>${item.name}</td>
            <td>${item.formula}</td>
            <td>${item.lattice}</td>
            <td>${item.size}</td>
            <td>${item.pointType}</td>
            <td>${item.lineType}</td>
            <td>${item.surfaceType}</td>
            <td>${item.totalEnergy}</td>
            <td>${item.pressure}</td>
            <td>${item.fermiEnergy}</td>
            <td>${item.totalForce}</td>
            <td>${item.directBandgap}</td>
            <td>${item.indirectBandgap}</td>
            <td>
              <img src="${item.bandStructure}" />
            </td>
            <td>
              <img src="${item.densityStates}" />
            </td>
            <td>${item.elasticProperties}</td>
          </tr>
        `
}
