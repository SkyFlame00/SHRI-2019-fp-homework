/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withOnClickSetCount from '../hocs/withOnClickSetCount';
import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';


export default compose(
    withOnClickSetCount,
    withSmallSize,
    withPrimaryColor
)(BaseButton)
