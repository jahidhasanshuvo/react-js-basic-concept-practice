/*

0. I am fine. Thank you.
1. Fixes are given into code and commented as Answer 1.
2. Some improvements are also given and commented as Answer 2.
3. DropdownItem can be used in Dropdown component and passed array of {label, href} from the ExampleNav
4. If we wanted to sync this dropdown selection to the server with app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }), this should be included in Dropdown toggle method.
5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items then we should call the array in Dropdown component and map the array with DropdownItem. Remove DropdownItem from ExampleNav. Some code are given below and commented as Answer 5.
 */

import React, { PureComponent } from "react";

class Dropdown extends PureComponent {
  //Answer 1. Spelling mistake for constructor
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  //Answer 1. Must be arrow function or need to bind with this class
  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen }); // Answer 1. Improvements for working the toggle
  };

  render() {
    const { isOpen } = this.state;
    const { label, dropdownItems, ...restProps } = this.props;
    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expanded={isOpen} //Answer 1. Spelling mistake
          onClick={this.toggle}
          {...restProps} // Answer 2,3. Improvements and flexibility for controlling some properties from parent
        >
          {label}
        </button>

        <ul
          className={`${isOpen ? "dropdown-open" : ""} dropdown-menu`}
          aria-labelledby="dropdownButton"
          role="menu"
        >
          {/* Answer 5. mapping through the dropdown item array */}
          {dropdownItems.map(({ label, href }, index) => (
            <DropdownItem href={href} key={index}>
              {label}
            </DropdownItem>
          ))}
        </ul>
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  render() {
    const { href, children } = this.props;
    //Answer 1. render method should have return
    return <a href={href}>{children}</a>;
  }
}

//Answer 1. should have export
export default class ExampleNav extends PureComponent {
  constructor() {
    super();
    this.state = {
      dropdowns: [],
    };
  }
  componentDidMount() {
    /// Answer 5. Promise should be called here for the array of items
    const promiseReturn = [
      {
        label: "More items",
        dropdownItems: [
          { label: "Page 2", href: "/page2" },
          { label: "Page 3", href: "/page3" },
          { label: "Page 4", href: "/page4" },
        ],
      },
      {
        label: "Even more items",
        dropdownItems: [
          { label: "Page 4", href: "/page4" },
          { label: "Page 5", href: "/page5" },
        ],
      },
    ];
    this.setState({
      dropdowns: promiseReturn,
    });
  }
  render() {
    const { dropdowns } = this.state;
    console.log(dropdowns);
    return (
      <nav>
        <a href="/page1">Page 1</a>
        {/* Answer 5. Array of items of dropdowns */}
        {dropdowns.map(({ label, dropdownItems }, index) => (
          <Dropdown label={label} dropdownItems={dropdownItems} key={index} />
        ))}
      </nav>
    );
  }
}
