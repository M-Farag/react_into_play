const Contact = (data) => {
    return React.createElement(
        'ul',{},[
            React.createElement('li',{},data.name),
            React.createElement('li',{},data.title),
            React.createElement('li',{},data.company),
        ]
    );
}


const App = () => {
    return React.createElement(
        "div",{},[
            React.createElement('h1',{},'Contacts'),
            React.createElement(Contact,{
                name: 'John',
                title: 'CEO',
                company: 'Apple'
            }),
            React.createElement(Contact,{
                name: 'Mark',
                title: 'CTO',
                company: 'Google'
            }),
            React.createElement(Contact,{
                name: 'Jack',
                title: 'CFO',
                company: 'Facebook'
            }),
        ]
    );
    
}

const container  = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    React.createElement(App)
);