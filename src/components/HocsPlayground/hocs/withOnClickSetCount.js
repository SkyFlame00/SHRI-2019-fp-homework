import {withHandlers} from 'recompose';


export default withHandlers({
  onClick: ({ count, setCount, setInnerColor, setOuterColor }) => () => {
    const newCount = count + 1;

    if (newCount % 2 === 0) {
      setInnerColor('gray');
      setOuterColor('gray');
    } else {
      setInnerColor('green');
      setOuterColor('green');
    }

    setCount(newCount);
  },
});
