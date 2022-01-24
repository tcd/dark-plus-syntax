
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router, styled*/
var app = app || {};

(function () {
	'use strict';

	app.ALL_TODOS = 'all';
	app.ACTIVE_TODOS = 'active';
	app.COMPLETED_TODOS = 'completed';

  styled.injectGlobal`
    html,
    body {
        margin: 0;
        padding: 0;
    }
    button {
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        font-size: 100%;
        vertical-align: baseline;
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
        -webkit-appearance: none;
        appearance: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        line-height: 1.4em;
        background: #f5f5f5;
        color: #4d4d4d;
        min-width: 230px;
        max-width: 550px;
        margin: 0 auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 300;
    }
    :focus {
        outline: 0;
    }
    .todoapp {
      background: #fff;
      margin: 130px 0 40px 0;
      position: relative;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                  0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    .todoapp input::-webkit-input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }
    .todoapp input::-moz-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }
    .todoapp input::input-placeholder {
      font-style: italic;
      font-weight: 300;
      color: #e6e6e6;
    }
    .todoapp h1 {
      position: absolute;
      top: -155px;
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
      -webkit-text-rendering: optimizeLegibility;
      -moz-text-rendering: optimizeLegibility;
      text-rendering: optimizeLegibility;
    }
    .info {
      margin: 65px auto 0;
      color: #bfbfbf;
      font-size: 10px;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
      text-align: center;
    }
    .info p {
      line-height: 1;
    }
    .info a {
      color: inherit;
      text-decoration: none;
      font-weight: 400;
    }
    .info a:hover {
      text-decoration: underline;
    }
  `

  app.Utils = {
    uuid: () => {
      /*jshint bitwise:false */
      var i, random;
      var uuid = '';

      for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
          .toString(16);
      }

      return uuid;
    },

    pluralize: (count, word) => {
      return count === 1 ? word : word + 's';
    },

    extend: () => {
      let newObj = {};
      for (let i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
          }
        }
      }
      return newObj;
    }
  };

  var Utils = app.Utils;
  // Generic "model" object. You can use whatever
  // framework you want. For this application it
  // may not even be worth separating this logic
  // out, but we do this to demonstrate one way to
  // separate out parts of your application.
  app.TodoModel = function (key) {
    this.key = key;
    this.todos = [];
    this.onChanges = [];
  };

  app.TodoModel.prototype.subscribe = function (onChange) {
    this.onChanges.push(onChange);
  };

  app.TodoModel.prototype.inform = function () {
    this.onChanges.forEach(function (cb) { cb(); });
  };

  app.TodoModel.prototype.addTodo = function (title) {
    this.todos = this.todos.concat({
      id: Utils.uuid(),
      title: title,
      completed: false
    });

    this.inform();
  };

  app.TodoModel.prototype.toggleAll = function (checked) {
    // Note: it's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map() and filter() everywhere instead of mutating the array or
    // todo items themselves.
    this.todos = this.todos.map(function (todo) {
      return Utils.extend({}, todo, {completed: checked});
    });

    this.inform();
  };

  app.TodoModel.prototype.toggle = function (todoToToggle) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoToToggle ?
        todo :
        Utils.extend({}, todo, {completed: !todo.completed});
    });

    this.inform();
  };

  app.TodoModel.prototype.destroy = function (todo) {
    this.todos = this.todos.filter(function(candidate) {
      return candidate !== todo;
    });

    this.inform();
  };

  app.TodoModel.prototype.save = function (todoToSave, text) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoToSave ? todo : Utils.extend({}, todo, {title: text});
    });

    this.inform();
  };

  app.TodoModel.prototype.clearCompleted = function () {
    this.todos = this.todos.filter(function (todo) {
      return !todo.completed;
    });

    this.inform();
  };

  var ClearCompletedButton = styled.default.button`
    float: right;
	position: relative;
	line-height: 20px;
	text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `

  var Footer = styled.default.footer`
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                  0 8px 0 -3px #f6f6f6,
                  0 9px 1px -3px rgba(0, 0, 0, 0.2),
                  0 16px 0 -6px #f6f6f6,
                  0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 430px) {
      height: 50px;
    }
  `

  const TodoCount = styled.default.span`
    float: left;
    text-align: left;
  `

  const TodoCountNumber = styled.default.strong`
    font-weight: 300;
  `

  const Filters = styled.default.ul`
    margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
    left: 0;
    @media (max-width: 430px) {
      bottom: 10px;
    }
  `

  const FilterItem = styled.default.li`
    display: inline;
  `

  const FilterItemLink = styled.default.a`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    &:hover {
      border-color: rgba(175, 47, 47, 0.1);
    }
    ${function (props) {
      return props.selected && styled.css`
        border-color: rgba(175, 47, 47, 0.2);
      `
    }}
  `


  var TodoFooter = React.createClass({
    render: function () {
      var activeTodoWord = app.Utils.pluralize(this.props.count, 'item');
      var clearButton = null;

      if (this.props.completedCount > 0) {
        clearButton = (
          <ClearCompletedButton onClick={this.props.onClearCompleted}>
            Clear completed
          </ClearCompletedButton>
        );
      }

      var nowShowing = this.props.nowShowing;
      return (
        <Footer>
          <TodoCount>
            <TodoCountNumber>{this.props.count}</TodoCountNumber> {activeTodoWord} left
          </TodoCount>
          <Filters>
            <FilterItem>
              <FilterItemLink
                href="#/"
                selected={nowShowing === app.ALL_TODOS}>
                  All
              </FilterItemLink>
            </FilterItem>
            {' '}
            <FilterItem>
              <FilterItemLink
                href="#/active"
                selected={nowShowing === app.ACTIVE_TODOS}>
                  Active
              </FilterItemLink>
            </FilterItem>
            {' '}
            <FilterItem>
              <FilterItemLink
                href="#/completed"
                selected={nowShowing === app.COMPLETED_TODOS}>
                  Completed
              </FilterItemLink>
            </FilterItem>
          </Filters>
          {clearButton}
        </Footer>
      );
    }
  });

  var NewTodoInput = styled.default.input`
    position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${function(props) {
      return !props.editing && styled.css`
        padding: 16px 16px 16px 60px;
        border: none;
        background: rgba(0, 0, 0, 0.003);
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      `
    }}
  `

  var TodoListItemView = styled.default.div``;

  var TodoListItemLabel = styled.default.label`
    word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
  `

  var TodoListItem = styled.default.li`
    position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
    &:last-child {
      border-bottom: none;
    }
    > ${NewTodoInput} {
      display: none;
    }
    ${function(props) {
      return props.editing && styled.css`
        border-bottom: none;
        padding: 0;
        &:last-child {
          margin-bottom: -1px;
        }
        ${NewTodoInput} {
          display: block;
          width: 506px;
          padding: 12px 16px;
          margin: 0 0 0 43px;
        }
        ${TodoListItemView} {
          display: none;
        }
      `
    }}
    ${function(props) {
      return props.completed && styled.css`
        ${TodoListItemLabel} {
          color: #d9d9d9;
          text-decoration: line-through;
        }
      `
    }}
  `

  var TodoListItemToggle = styled.default.input`
    text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
    appearance: none;
    opacity: 0;
    /*
      Hack to remove background from Mobile Safari.
      Can't use it globally since it destroys checkboxes in Firefox
    */
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      background: none;
      height: 40px;
    }
    & + ${TodoListItemLabel} {
      /*
		Firefox requires # to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the # - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
      */
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
      background-repeat: no-repeat;
      background-position: center left;
    }
    &:checked + ${TodoListItemLabel} {
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }
  `

  var TodoItemDestroyButton = styled.default.button`
    display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
    transition: color 0.2s ease-out;
    &:hover {
      color: #af5b5e;
    }
    &:after {
      content: '×';
    }
    ${TodoListItem}:hover & {
      display: block;
    }
  `

  var ESCAPE_KEY = 27;
  var ENTER_KEY = 13;

  var TodoItem = React.createClass({
    handleSubmit: function (event) {
      var val = this.state.editText.trim();
      if (val) {
        this.props.onSave(val);
        this.setState({editText: val});
      } else {
        this.props.onDestroy();
      }
    },

    handleEdit: function () {
      this.props.onEdit();
      this.setState({editText: this.props.todo.title});
    },

    handleKeyDown: function (event) {
      if (event.which === ESCAPE_KEY) {
        this.setState({editText: this.props.todo.title});
        this.props.onCancel(event);
      } else if (event.which === ENTER_KEY) {
        this.handleSubmit(event);
      }
    },

    handleChange: function (event) {
      if (this.props.editing) {
        this.setState({editText: event.target.value});
      }
    },

    getInitialState: function () {
      return {editText: this.props.todo.title};
    },

    /**
     * This is a completely optional performance enhancement that you can
     * implement on any React component. If you were to delete this method
     * the app would still work correctly (and still be very performant!), we
     * just use it as an example of how little code it takes to get an order
     * of magnitude performance improvement.
     */
    shouldComponentUpdate: function (nextProps, nextState) {
      return (
        nextProps.todo !== this.props.todo ||
        nextProps.editing !== this.props.editing ||
        nextState.editText !== this.state.editText
      );
    },

    /**
     * Safely manipulate the DOM after updating the state when invoking
     * `this.props.onEdit()` in the `handleEdit` method above.
     * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
     * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
     */
    componentDidUpdate: function (prevProps) {
      if (!prevProps.editing && this.props.editing) {
        var node = React.findDOMNode(this.refs.editField);
        node.focus();
        node.setSelectionRange(node.value.length, node.value.length);
      }
    },

    render: function () {
      return (
        <TodoListItem
          completed={this.props.todo.completed}
          editing={this.props.editing}
        >
          <TodoListItemView>
            <TodoListItemToggle
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={this.props.onToggle}
            />
            <TodoListItemLabel onDoubleClick={this.handleEdit}>
              {this.props.todo.title}
            </TodoListItemLabel>
            <TodoItemDestroyButton onClick={this.props.onDestroy} />
          </TodoListItemView>
          <NewTodoInput
            editing
            ref="editField"
            value={this.state.editText}
            onBlur={this.handleSubmit}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </TodoListItem>
      );
    }
  });

  var Main = styled.default.main`
  	position: relative;
	z-index: 2;
    border-top: 1px solid #e6e6e6;
  `

  var ToggleAll = styled.default.input.attrs({
    type: 'checkbox'
  })`
	text-align: center;
	border: none; /* Mobile Safari */
	opacity: 0;
    position: absolute;
    & + label {
      width: 60px;
      height: 34px;
      font-size: 0;
      position: absolute;
      top: -52px;
      left: -13px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    & + label:before {
      content: '❯';
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px 10px 27px;
    }
    &:checked + label:before {
      color: #737373;
    }
    /*
      Hack to remove background from Mobile Safari.
      Can't use it globally since it destroys checkboxes in Firefox
    */
    @media screen and (-webkit-min-device-pixel-ratio:0) {
      background: none;
    }
  `

  var TodoUnorderedList = styled.default.ul`
    margin: 0;
	padding: 0;
	list-style: none;
  `

	var ENTER_KEY = 13;

	var TodoApp = React.createClass({
		getInitialState: function () {
			return {
				nowShowing: app.ALL_TODOS,
				editing: null,
				newTodo: ''
			};
		},

		componentDidMount: function () {
			var setState = this.setState;
			var router = Router({
				'/': setState.bind(this, {nowShowing: app.ALL_TODOS}),
				'/active': setState.bind(this, {nowShowing: app.ACTIVE_TODOS}),
				'/completed': setState.bind(this, {nowShowing: app.COMPLETED_TODOS})
			});
			router.init('/');
		},

		handleChange: function (event) {
			this.setState({newTodo: event.target.value});
		},

		handleNewTodoKeyDown: function (event) {
			if (event.keyCode !== ENTER_KEY) {
				return;
			}

			event.preventDefault();

			var val = this.state.newTodo.trim();

			if (val) {
				this.props.model.addTodo(val);
				this.setState({newTodo: ''});
			}
		},

		toggleAll: function (event) {
			var checked = event.target.checked;
			this.props.model.toggleAll(checked);
		},

		toggle: function (todoToToggle) {
			this.props.model.toggle(todoToToggle);
		},

		destroy: function (todo) {
			this.props.model.destroy(todo);
		},

		edit: function (todo) {
			this.setState({editing: todo.id});
		},

		save: function (todoToSave, text) {
			this.props.model.save(todoToSave, text);
			this.setState({editing: null});
		},

		cancel: function () {
			this.setState({editing: null});
		},

		clearCompleted: function () {
			this.props.model.clearCompleted();
		},

		render: function () {
			var footer;
			var main;
			var todos = this.props.model.todos;

			var shownTodos = todos.filter(function (todo) {
				switch (this.state.nowShowing) {
				case app.ACTIVE_TODOS:
					return !todo.completed;
				case app.COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
				}
			}, this);

			var todoItems = shownTodos.map(function (todo) {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={this.toggle.bind(this, todo)}
						onDestroy={this.destroy.bind(this, todo)}
						onEdit={this.edit.bind(this, todo)}
						editing={this.state.editing === todo.id}
						onSave={this.save.bind(this, todo)}
						onCancel={this.cancel}
					/>
				);
			}, this);

			var activeTodoCount = todos.reduce(function (accum, todo) {
				return todo.completed ? accum : accum + 1;
			}, 0);

			var completedCount = todos.length - activeTodoCount;

			if (activeTodoCount || completedCount) {
				footer =
					<TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						nowShowing={this.state.nowShowing}
						onClearCompleted={this.clearCompleted}
					/>;
			}

			if (todos.length) {
				main = (
					<Main>
						<ToggleAll
							onChange={this.toggleAll}
							checked={activeTodoCount === 0}
						/>
						<TodoUnorderedList>
							{todoItems}
						</TodoUnorderedList>
					</Main>
				);
			}

			return (
				<div>
					<header className="header">
						<h1>todos</h1>
						<NewTodoInput
							placeholder="What needs to be done?"
							value={this.state.newTodo}
							onKeyDown={this.handleNewTodoKeyDown}
							onChange={this.handleChange}
							autoFocus={true}
						/>
					</header>
					{main}
					{footer}
				</div>
			);
		}
	});

	var model = new app.TodoModel('react-todos');

	function render() {
		ReactDOM.render(
			<TodoApp model={model}/>,
			document.getElementsByClassName('todoapp')[0]
		);
	}

	model.subscribe(render);
	render();
})();
