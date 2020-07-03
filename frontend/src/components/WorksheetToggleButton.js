import React, { useState } from 'react';
import styles from './Footer.module.css';
import common_styles from '../styles/common.module.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from '../user';

const App = props => {
  var [inWorksheet, setInWorksheet] = useState(false);
  const { user } = useUser();
  if (user.worksheet === undefined) return <div>Signin</div>;
  if (!inWorksheet) {
    for (let i = 0; i < user.worksheet.length; i++) {
      if (
        user.worksheet[i][0] === props.season_code &&
        user.worksheet[i][1] === props.crn.toString()
      ) {
        setInWorksheet(true);
      }
    }
  }

  function add_remove_course() {
    let add_remove;
    inWorksheet ? (add_remove = 'remove') : (add_remove = 'add');
    axios
      .get(
        `/legacy_api/WorksheetActions.php?action=${add_remove}&season=${
          props.season_code
        }&ociId=${props.crn}`
      )
      .then(response => {
        console.log(response.data);
      });
  }

  function toggleWorkSheet(e) {
    e.preventDefault();
    add_remove_course();
    setInWorksheet(!inWorksheet);
    console.log('toggle ', props.crn + ' ' + props.season_code);
    window.location.reload();
  }
  return <Button onClick={toggleWorkSheet}>{inWorksheet ? '-' : '+'}</Button>;
};

export default App;
