/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withSmallSize from '../hocs/withSmallSize';
import withDefaultColor from '../hocs/withDefaultColor';
import withOnClickSetBackCount from '../hocs/withOnClickSetBackCount';


export default compose(
    withSmallSize,
    withDefaultColor,
    withOnClickSetBackCount
)(BaseButton)
