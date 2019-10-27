import {withHandlers} from 'recompose';


export default withHandlers({
  onClick: ({ backCount, setBackCount, setInnerColor, setOuterColor }) => () => {
    let newBackCount = backCount - 1;

    if (newBackCount === 0) {
      setInnerColor('orange');
      setOuterColor('orange');
      newBackCount = 5;
    }

    setBackCount(newBackCount);
  },
});
