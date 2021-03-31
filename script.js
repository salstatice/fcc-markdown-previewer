class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "appapp" }, /*#__PURE__*/
      React.createElement("div", { className: "editorWrapper" }, /*#__PURE__*/
      React.createElement(Toolbar, { icon: "far fa-edit", text: "Editor" }), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "previewerWrapper" }, /*#__PURE__*/
      React.createElement(Toolbar, { icon: "far fa-eye", text: "Preview" }), /*#__PURE__*/
      React.createElement(Markup, { markdown: this.state.markdown }))));




  }}
;

const Toolbar = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "toolbar" }, /*#__PURE__*/
    React.createElement("i", { className: props.icon }),
    props.text, /*#__PURE__*/
    React.createElement("i", { className: "fas fa-cat to-the-right" })));


};

const Markup = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview",
      dangerouslySetInnerHTML: {
        __html: marked(props.markdown, { breaks: true }) } }));



};

const placeholder = `# Heading: Markdown Previewer
## Sub-heading: A project for FCC
Requirement: 
[see User Story](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
      
    Tab twice or more
    It will create   
    an indented code block

or you can type it inline 
\`<div></div>\`, with escaped backticks.

Here is a list
- one
- two
- three
  - little
    - pigs

**Famouse Quote:**
> Who lives in a house like this?!

Finally, here is a ~pigture~ 
![Picture of a pig](https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/feed/feednavigator.com/article/2019/04/01/enzymes-and-feed-efficiency-in-pigs/9320883-8-eng-GB/Enzymes-and-feed-efficiency-in-pigs_wrbm_large.jpg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));