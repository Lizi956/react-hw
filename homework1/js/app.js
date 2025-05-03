const root = document.getElementById("root");
 
 const data = [
   {
     id: 1,
     firstname: "Molly",
     lastname: "Begbie",
     email: "mbegbie0@parallels.com",
     gender: "Non-binary",
     age: 12,
   },
   {
     id: 2,
     firstname: "Mayer",
     lastname: "Kuhnke",
     email: "mkuhnke1@myspace.com",
     gender: "Agender",
     age: 39,
   },
   {
     id: 3,
     firstname: "Susy",
     lastname: "Kyneton",
     email: "skyneton2@buzzfeed.com",
     gender: "Male",
     age: 36,
   },
   {
     id: 4,
     firstname: "Raquela",
     lastname: "Littlefield",
     email: "rlittlefield3@google.co.uk",
     gender: "Genderqueer",
     age: 69,
   },
   {
     id: 5,
     firstname: "Robinetta",
     lastname: "Loughney",
     email: "rloughney4@typepad.com",
     gender: "Female",
     age: 40,
   },
   {
     id: 6,
     firstname: "Orelle",
     lastname: "Domanski",
     email: "odomanski5@angelfire.com",
     gender: "Polygender",
     age: 32,
   },
   {
     id: 7,
     firstname: "Brandi",
     lastname: "Haliburton",
     email: "bhaliburton6@baidu.com",
     gender: "Bigender",
     age: 57,
   },
   {
     id: 8,
     firstname: "Ario",
     lastname: "Cormack",
     email: "acormack7@sfgate.com",
     gender: "Bigender",
     age: 43,
   },
   {
     id: 9,
     firstname: "Kirsti",
     lastname: "Kimmerling",
     email: "kkimmerling8@statcounter.com",
     gender: "Female",
     age: 27,
   },
   {
     id: 10,
     firstname: "Orton",
     lastname: "Renachowski",
     email: "orenachowski9@amazon.co.uk",
     gender: "Genderfluid",
     age: 55,
   },
 ];
 
 function Card(props) {
   return React.createElement("div", { className: "card" }, [
     React.createElement("h2", null, `${props.firstname} ${props.lastname}`),
     React.createElement("p", null, `Age: ${props.age}`),
     React.createElement("p", null, `Gender: ${props.gender}`),
     React.createElement("p", null, `Email: ${props.email}`),
   ]);
 }
 
 function App() {
   return React.createElement(
     "div",
     { className: "container" },
     data.map((user) => React.createElement(Card, { ...user, key: user.id }))
   );
 }
 
 ReactDOM.render(App(), root);