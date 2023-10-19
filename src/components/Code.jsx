import React from 'react';
import Editor from './Editor';
import { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import {Box, styled} from '@mui/material';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`

function Code() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <Container>
      <Editor 
        heading="HTML"
        icons="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor 
        heading="CSS"
        icons="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor 
        heading="JavaScript"
        icons="{}"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  )
}

export default Code