import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext
} from "react";

import uuid from "uuid/v4";

import { getRestaurants } from "../../actions/Restaurants"; //redux
import { connect } from "react-redux"; //redux
import { Container, Header, Grid, Checkbox, Input } from "semantic-ui-react";
import axios from "axios";
import RestaurantModal from "./restaurantModal/restaurantModal";
import SearchBar from "./searchBar/searchBar";
import { SEARCH } from "../../actions/Restaurants";
import { store } from "../../index.js";

const Passport = props => {
  const { getRestaurants } = props;
  //checking state of stamped , if true  checkmark will be added to component
  const [stamped, setStamped] = useState(true);
  const [checked, setChecked] = useState(true);
  const [cols, setCols] = useState(4);
  const [hovered, setHovered] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searching, setSearching] = useState(false);
  const toggle = () => setChecked(!checked);

  useEffect(() => {
    getRestaurants();
  }, [getRestaurants]);


  const searchRestaurantsHandler = e => {
    const restaurants = props.restaurants.body.filter(r => {
      if (r.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return r;
      }
    });
    setSearching(true);
    setFilteredRestaurants(restaurants);
  };



  return (
    <Container style={{ marginTop: "3em" }} className="content-container">
      <App2 />
      <div className="header">
        <Header as="h1" className="city-name">
          Restaurants
        </Header>
        <div className="lower-header-content">
          {/*          <SearchBar
            restaurants={props.restaurants}
            
            setCols={setCols}
          />*/}
          <Input
            onChange={searchRestaurantsHandler}
            placeholder="search restaurants..."
          />
          <Checkbox
            label="Show Visited"
            onChange={toggle}
            checked={checked}
            className="checkbox"
          />
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center restaurant-container">
        {props.isFetching ? (
          <p>Fetching your Pokémon</p>
        ) : (
          <Grid centered columns={cols}>
            {searching
              ? console.log(filteredRestaurants) ||
                filteredRestaurants.map(rest => (
                  <RestaurantModal rest={rest} key={rest.id} />
                ))
              : props.restaurants.body.map(rest => (
                  <RestaurantModal rest={rest} key={rest.id} />
                ))}
          </Grid>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getRestaurants }
)(Passport);

////////////////////////////////////////

const DispatchContext = createContext(null);

const initalTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false
  }
];

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETE":
      return "COMPLETE";
    case "SHOW_INCOMPLETE":
      return "INCOMPLETE";
    default:
      return state;
  }
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return state.concat({
        task: action.task,
        id: uuid(),
        complete: false
      });
    default:
      return state;
  }
};

export const App2 = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initalTodos);

  // Global Dispatch Function
  const dispatch = action =>
    [dispatchTodos, dispatchFilter].forEach(fn => fn(action));

  const filteredTodos = todos.filter(todo => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLETE" && todo.complete) {
      return true;
    }

    if (filter === "INCOMPLETE" && !todo.complete) {
      return true;
    }

    return false;
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <Filter />
      <TodoList todos={filteredTodos} />
      <AddTodo />
    </DispatchContext.Provider>
  );
};

const Filter = () => {
  const dispatch = useContext(DispatchContext);

  const handleShowAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowComplete = () => {
    dispatch({ type: "SHOW_COMPLETE" });
  };

  const handleShowIncomplete = () => {
    dispatch({ type: "SHOW_INCOMPLETE" });
  };

  return (
    <div>
      <button type="button" onClick={handleShowAll}>
        Show All
      </button>
      <button type="button" onClick={handleShowComplete}>
        Show Complete
      </button>
      <button type="button" onClick={handleShowIncomplete}>
        Show Incomplete
      </button>
    </div>
  );
};

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

const TodoItem = ({ todo }) => {
  const dispatch = useContext(DispatchContext);

  const handleChange = () =>
    dispatch({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    });

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleChange}
        />
        {todo.task}
      </label>
    </li>
  );
};

const AddTodo = () => {
  const dispatch = useContext(DispatchContext);

  const [task, setTask] = useState("");

  const handleSubmit = event => {
    if (task) {
      dispatch({ type: "ADD_TODO", task });
    }

    setTask("");

    event.preventDefault();
  };

  const handleChange = event => setTask(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
