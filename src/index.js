import React from "react";
import ReactDOM from "react-dom";

import "./static/scss/app.scss";

import Actions from "./libs/actions";
import Auth from "./libs/auth";
import Authenticate from './libs/authenticate'

import Layout from "./Layout";

const main = async () => {
  let actions = await Actions("http://149.28.121.92:9000");

  const user = await Authenticate(actions)
  console.log(user)

  // kinda hacky
  const auth = Auth("http://149.28.121.92:9001");
  actions = {...actions, ...auth}

  return ReactDOM.render(
    <Layout user={user} actions={actions} />,
    document.getElementById("app")
  );
};

main();