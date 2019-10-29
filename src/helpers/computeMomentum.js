import {prop, cond, compose} from 'ramda';

import {SHAPES} from '../constants';

// Использовать для округления результата
const round = num => Math.round(num * 10) / 10;

/**
 * Функции возвращающие св-ва объекта эквивалент 
 * 
 * const propShape = obj => obj.shape
 **/
const propShape = prop('shape');
const propHeight = prop('height');
const propDensity = prop('density');
const propSize = prop('size');


/**
 * Промежуточные формулы для рассчета указанные в задании
 */
const G = 9.8;

const momentumFormula = ({mass, velocity}) => mass * velocity;

const velocityFormula = height => Math.sqrt(2 * G * height); 

const massFormula = ({volume, density}) => volume * density;

const cubeVolumeFormula = n => Math.pow(n, 3);

const sphereVolumeFormula = d => (Math.PI * Math.pow(d, 3)) / 6;

const tetrahedronVolumeFormula = r => (Math.pow(r, 3) * Math.sqrt(2)) / 12;


const shapeEqualsCube = compose(
    (shape) => shape === SHAPES.CUBE,
    propShape
);

const shapeEqualsSphere = compose(
    (shape) => shape === SHAPES.SPHERE,
    propShape
);
const shapeEqualsTetrahedron = compose(
    (shape) => shape === SHAPES.TETRAHEDRON,
    propShape
);

const calcCubeVolume = compose(
    (size) => cubeVolumeFormula(size),
    propSize
);
const calcSphereVolume = compose(
    (size) => sphereVolumeFormula(size),
    propSize
);
const calcTetrahedronVolume = compose(
    (size) => tetrahedronVolumeFormula(size),
    propSize
);

const calcVolume = cond([
    [shapeEqualsCube, calcCubeVolume],
    [shapeEqualsSphere, calcSphereVolume],
    [shapeEqualsTetrahedron, calcTetrahedronVolume]
]);

const calcMass = compose(
    ({ shape, size, density }) => massFormula({ volume: calcVolume({ shape, size }), density })
);

const calcVelocity = compose(
    (height) => velocityFormula(height),
    propHeight
);

const computeMomentum = compose(
    round,
    (args) => momentumFormula({ mass: calcMass(args), velocity: calcVelocity(args)})
);


export default computeMomentum;
