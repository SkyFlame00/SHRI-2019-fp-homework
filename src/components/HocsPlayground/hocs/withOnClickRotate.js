import {withHandlers} from 'recompose';


export default withHandlers({
  onClick: ({ rotateDegree, setRotateDegree, setInnerColor, setOuterColor }) => () => {
    let newRotateDegree = rotateDegree - 30;
    const colors = ['green', 'gray', 'orange', 'black', 'brown', 'blue', 'red', 'purple'];

    if (newRotateDegree === -360) {
      newRotateDegree = 0;
      const color = colors[Math.floor(Math.random() * (colors.length - 1))];
      setInnerColor(color);
      setOuterColor(color);
    }

    setRotateDegree(newRotateDegree);
  },
});
