var React = require('react');


//<!--In this case Weather component is => this.props.children-->
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>

      <div>
        <div>
          <p>Main jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>

  )
}
module.exports = Main;
