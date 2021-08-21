const names = ['Silicone FCC', 'MoS FCC', 'Graphene'];
const formulas = ['Si2',	'MoS2',	'C'];
const lattices = ['FCC',	'FCC',	'Hexagonal'];
const sizes = ['4x4',	'4x4',	'6x6'];
const pointTypes = ['Vacancy',	'Substitution',	'Vacancy'];
const lineTypes = ['Dislocation',	'None',	'None'];
const surfaceTypes = ['None',	'Grain',	'None'];
const totalEnergies = ['-300 eV',	'-500 eV',	'-100 eV'];
const pressures = ['1',	'2',	'0'];
const fermiEnergies = [''];
const totalForces = [''];
const directBandgaps = ['1 eV',	'1.15 eV',	'5 eV'];
const indirectBandgaps = ['1 eV',	'0.6 eV',	'6 eV'];
const bandStructures = ['https://www.researchgate.net/profile/Lars-Stixrude/publication/235466350/figure/fig9/AS:299869093810184@1448505772044/Band-structure-of-fcc-Si-Solid-lines-are-LAPW-band-structure-dashed-are-tight-binding.png', 'https://www.researchgate.net/profile/Lars-Stixrude/publication/235466350/figure/fig9/AS:299869093810184@1448505772044/Band-structure-of-fcc-Si-Solid-lines-are-LAPW-band-structure-dashed-are-tight-binding.png', 'https://www.researchgate.net/profile/Ryan-Newson/publication/258435190/figure/fig4/AS:669519219544078@1536637229877/Electronic-band-structure-for-a-graphene-and-b-graphite-62.jpg'];
const densityStates = ['https://www.researchgate.net/profile/Jorge-Tapia-Gonzalez-2/publication/226339793/figure/fig4/AS:650037063340066@1531992321838/Density-of-states-for-fcc-carbon-at-the-experimental-lattice-parameter-a-3563-A.png', 'https://www.researchgate.net/profile/Jorge-Tapia-Gonzalez-2/publication/226339793/figure/fig4/AS:650037063340066@1531992321838/Density-of-states-for-fcc-carbon-at-the-experimental-lattice-parameter-a-3563-A.png', 'https://www.researchgate.net/profile/Seung-Geol-Lee/publication/281422453/figure/fig4/AS:313005456805891@1451637724461/The-density-of-states-DOS-of-the-graphene-and-graphene-oxide-GO-systems-a-graphene.png'];
const elasticProperties = ['E=150 GPa',	'E=0.33 TPa',	'E=1.0 TPa'];

export interface TableData {
  name: string;
  formula: string;
  lattice: string;
  size: string;
  pointType: string;
  lineType: string;
  surfaceType: string;
  totalEnergy: string;
  pressure: string;
  fermiEnergy: string;
  totalForce: string;
  directBandgap: string;
  indirectBandgap: string;
  bandStructure: string;
  densityStates: string;
  elasticProperties: string;
}

function getRandomValue (array: string[]): string {
  return array[Math.floor(Math.random() * array.length)];
}

export function renderRandomData (): TableData {
  return {
    name: getRandomValue(names),
    formula: getRandomValue(formulas),
    lattice: getRandomValue(lattices),
    size: getRandomValue(sizes),
    pointType: getRandomValue(pointTypes),
    lineType: getRandomValue(lineTypes),
    surfaceType: getRandomValue(surfaceTypes),
    totalEnergy: getRandomValue(totalEnergies),
    pressure: getRandomValue(pressures),
    fermiEnergy: getRandomValue(fermiEnergies),
    totalForce: getRandomValue(totalForces),
    directBandgap: getRandomValue(directBandgaps),
    indirectBandgap: getRandomValue(indirectBandgaps),
    bandStructure: getRandomValue(bandStructures),
    densityStates: getRandomValue(densityStates),
    elasticProperties: getRandomValue(elasticProperties)
  }
}
