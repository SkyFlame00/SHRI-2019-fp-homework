/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withLargeSize from '../hocs/withLargeSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withOnClickRotate from '../hocs/withOnClickRotate';


export default compose(
    withLargeSize,
    withPrimaryColor,
    withOnClickRotate
)(BaseButton)
