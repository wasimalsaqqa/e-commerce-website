import { increment, decrement, reset } from "../../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const count = useSelector((state) => state.likes.like);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-2xl">likes: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        className="border border-b-blue-700 mx-2 px-2"
      >
        like
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="border border-b-blue-700 mx-2 px-2"
      >
        Dislike
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="border border-b-blue-700 mx-2 px-2"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
